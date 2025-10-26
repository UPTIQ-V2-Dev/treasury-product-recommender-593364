import { useState, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Upload, FileText, AlertCircle, CheckCircle, X } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { AgentLoading } from '@/components/ui/agent-loading';
import { treasuryService } from '@/services/treasury';
import { cn } from '@/lib/utils';
import type { BankStatement } from '@/types/treasury';

export const StatementUploadPage = () => {
    const navigate = useNavigate();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [dragActive, setDragActive] = useState(false);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [uploadedStatement, setUploadedStatement] = useState<BankStatement | null>(null);

    // Get supported formats
    const { data: supportedFormats = [] } = useQuery({
        queryKey: ['supported-formats'],
        queryFn: treasuryService.getSupportedFormats
    });

    // Upload mutation
    const uploadMutation = useMutation({
        mutationFn: async (file: File) => {
            // First upload the file
            const uploadResult = await treasuryService.uploadStatement({ file }, setUploadProgress);
            setUploadedStatement(uploadResult);
            setIsAnalyzing(true);

            // Then perform agent analysis
            const documents = uploadResult.signedUrl
                ? [
                      {
                          signedUrl: uploadResult.signedUrl,
                          fileName: uploadResult.filename,
                          mimeType: file.type
                      }
                  ]
                : undefined;

            const analysisResult = await treasuryService.getAnalysisResult(uploadResult.id, uploadResult, documents);

            return { uploadResult, analysisResult };
        },
        onSuccess: result => {
            setIsAnalyzing(false);
            navigate(`/dashboard/recommendations/${result.uploadResult.id}`, {
                state: {
                    bankStatement: result.uploadResult,
                    analysisResult: result.analysisResult
                }
            });
        },
        onError: () => {
            setIsAnalyzing(false);
        }
    });

    const handleDrag = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true);
        } else if (e.type === 'dragleave') {
            setDragActive(false);
        }
    }, []);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        const files = e.dataTransfer.files;
        if (files && files[0]) {
            setSelectedFile(files[0]);
        }
    }, []);

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files[0]) {
            setSelectedFile(files[0]);
        }
    };

    const handleUpload = () => {
        if (selectedFile) {
            uploadMutation.mutate(selectedFile);
        }
    };

    const clearFile = () => {
        setSelectedFile(null);
        setUploadProgress(0);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const formatFileSize = (bytes: number) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    const isFileSupported = (file: File) => {
        return supportedFormats.some(format => file.type === format.mimeType || file.name.endsWith(format.extension));
    };

    // Show agent loading when analyzing
    if (isAnalyzing && uploadedStatement) {
        return (
            <div className='space-y-6'>
                <div className='flex items-center justify-between'>
                    <div>
                        <h1 className='text-2xl font-semibold'>Analyzing Your Statement</h1>
                        <p className='text-muted-foreground mt-1'>
                            Our AI is processing your bank statement to generate personalized recommendations
                        </p>
                    </div>
                </div>

                <AgentLoading
                    agentName='Treasury Solution Advisor'
                    message='Analyzing your financial patterns and generating personalized treasury product recommendations'
                    estimatedTime='1-2 minutes'
                />

                {/* Show uploaded statement details during analysis */}
                <Card className='border-muted'>
                    <CardHeader>
                        <CardTitle className='flex items-center gap-2 text-lg'>
                            <FileText className='h-5 w-5' />
                            Processing Statement
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
                            <div>
                                <p className='text-sm font-medium'>Filename</p>
                                <p className='text-sm text-muted-foreground'>{uploadedStatement.filename}</p>
                            </div>
                            <div>
                                <p className='text-sm font-medium'>Bank</p>
                                <p className='text-sm text-muted-foreground'>
                                    {uploadedStatement.bankName || 'Detected automatically'}
                                </p>
                            </div>
                            <div>
                                <p className='text-sm font-medium'>Account Type</p>
                                <p className='text-sm text-muted-foreground'>
                                    {uploadedStatement.accountType || 'Detected automatically'}
                                </p>
                            </div>
                            <div>
                                <p className='text-sm font-medium'>Status</p>
                                <Badge variant='secondary'>Processing</Badge>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className='space-y-6'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='text-2xl font-semibold'>Upload Bank Statement</h1>
                    <p className='text-muted-foreground mt-1'>
                        Upload your bank statement to get personalized treasury product recommendations
                    </p>
                </div>
            </div>

            <div className='grid gap-6 md:grid-cols-3'>
                <Card className='md:col-span-2'>
                    <CardHeader>
                        <CardTitle className='flex items-center gap-2'>
                            <Upload className='h-5 w-5' />
                            Statement Upload
                        </CardTitle>
                        <CardDescription>Drag and drop your bank statement file or click to browse</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div
                            className={cn(
                                'border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer',
                                dragActive ? 'border-primary bg-primary/5' : 'border-muted-foreground/25',
                                !selectedFile && 'hover:border-muted-foreground/50'
                            )}
                            onDragEnter={handleDrag}
                            onDragLeave={handleDrag}
                            onDragOver={handleDrag}
                            onDrop={handleDrop}
                            onClick={() => fileInputRef.current?.click()}
                        >
                            <input
                                ref={fileInputRef}
                                type='file'
                                onChange={handleFileSelect}
                                accept={supportedFormats.map(f => f.mimeType).join(',')}
                                className='hidden'
                            />

                            {selectedFile ? (
                                <div className='space-y-4'>
                                    <div className='flex items-center justify-center'>
                                        <div className='relative'>
                                            <FileText className='h-16 w-16 text-primary' />
                                            {selectedFile && !isFileSupported(selectedFile) && (
                                                <div className='absolute -top-1 -right-1'>
                                                    <AlertCircle className='h-5 w-5 text-destructive' />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <p className='font-medium'>{selectedFile.name}</p>
                                        <p className='text-sm text-muted-foreground'>
                                            {formatFileSize(selectedFile.size)}
                                        </p>
                                    </div>

                                    {uploadMutation.isPending && (
                                        <div className='space-y-2'>
                                            <Progress
                                                value={uploadProgress}
                                                className='w-full'
                                            />
                                            <p className='text-sm text-muted-foreground'>
                                                Uploading... {uploadProgress}%
                                            </p>
                                        </div>
                                    )}

                                    {!uploadMutation.isPending && (
                                        <div className='flex gap-2 justify-center'>
                                            <Button
                                                onClick={handleUpload}
                                                disabled={!isFileSupported(selectedFile)}
                                                className='min-w-24'
                                            >
                                                <Upload className='h-4 w-4 mr-2' />
                                                Upload
                                            </Button>
                                            <Button
                                                variant='outline'
                                                onClick={clearFile}
                                                className='min-w-24'
                                            >
                                                <X className='h-4 w-4 mr-2' />
                                                Clear
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className='space-y-4'>
                                    <Upload className='mx-auto h-12 w-12 text-muted-foreground' />
                                    <div>
                                        <p className='text-lg font-medium'>Drop your file here</p>
                                        <p className='text-muted-foreground'>
                                            or <span className='text-primary font-medium'>browse</span> to choose a file
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {uploadMutation.isError && (
                            <Alert
                                variant='destructive'
                                className='mt-4'
                            >
                                <AlertCircle className='h-4 w-4' />
                                <AlertDescription>
                                    Upload failed. Please try again or contact support if the problem persists.
                                </AlertDescription>
                            </Alert>
                        )}

                        {selectedFile && !isFileSupported(selectedFile) && (
                            <Alert
                                variant='destructive'
                                className='mt-4'
                            >
                                <AlertCircle className='h-4 w-4' />
                                <AlertDescription>
                                    This file type is not supported. Please select a supported file format.
                                </AlertDescription>
                            </Alert>
                        )}
                    </CardContent>
                </Card>

                <div className='space-y-6'>
                    <Card>
                        <CardHeader>
                            <CardTitle className='text-lg'>Supported Formats</CardTitle>
                        </CardHeader>
                        <CardContent className='space-y-3'>
                            {supportedFormats.map(format => (
                                <div
                                    key={format.extension}
                                    className='flex items-center gap-2'
                                >
                                    <Badge variant='outline'>{format.extension}</Badge>
                                    <span className='text-sm text-muted-foreground'>{format.description}</span>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className='text-lg'>Security & Privacy</CardTitle>
                        </CardHeader>
                        <CardContent className='space-y-3 text-sm text-muted-foreground'>
                            <div className='flex items-start gap-2'>
                                <CheckCircle className='h-4 w-4 text-green-500 mt-0.5 flex-shrink-0' />
                                <p>Your data is encrypted during upload and processing</p>
                            </div>
                            <div className='flex items-start gap-2'>
                                <CheckCircle className='h-4 w-4 text-green-500 mt-0.5 flex-shrink-0' />
                                <p>Files are automatically deleted after analysis</p>
                            </div>
                            <div className='flex items-start gap-2'>
                                <CheckCircle className='h-4 w-4 text-green-500 mt-0.5 flex-shrink-0' />
                                <p>We never share your financial data with third parties</p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};
