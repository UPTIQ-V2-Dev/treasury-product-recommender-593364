import { useState, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Upload, FileText, AlertCircle, CheckCircle, X } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { treasuryService } from '@/services/treasury';
import { cn } from '@/lib/utils';

export const StatementUploadPage = () => {
    const navigate = useNavigate();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [dragActive, setDragActive] = useState(false);

    // Get supported formats
    const { data: supportedFormats = [] } = useQuery({
        queryKey: ['supported-formats'],
        queryFn: treasuryService.getSupportedFormats
    });

    // Upload mutation
    const uploadMutation = useMutation({
        mutationFn: (file: File) => treasuryService.uploadStatement({ file }, setUploadProgress),
        onSuccess: result => {
            navigate(`/dashboard/analysis/${result.id}`, {
                state: { bankStatement: result }
            });
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
