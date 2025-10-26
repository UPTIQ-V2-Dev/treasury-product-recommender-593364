import { useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { FileText, Clock, CheckCircle, AlertCircle, Loader2, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { treasuryService } from '@/services/treasury';
import type { BankStatement } from '@/types/treasury';

const PROCESSING_STEPS = [
    { id: '1', name: 'File Validation', description: 'Verifying file format and integrity' },
    { id: '2', name: 'Data Extraction', description: 'Extracting transaction data from statement' },
    { id: '3', name: 'Pattern Analysis', description: 'Analyzing cash flow patterns and trends' },
    { id: '4', name: 'Risk Assessment', description: 'Calculating risk profile and liquidity metrics' },
    { id: '5', name: 'Product Matching', description: 'Finding suitable treasury products' },
    { id: '6', name: 'Recommendations', description: 'Generating personalized recommendations' }
];

export const AnalysisProcessingPage = () => {
    const { id } = useParams<{ id: string }>();
    const location = useLocation();
    const navigate = useNavigate();

    const bankStatement = location.state?.bankStatement as BankStatement | undefined;

    const {
        data: analysisStatus,
        error,
        refetch
    } = useQuery({
        queryKey: ['analysis-status', id],
        queryFn: () => treasuryService.getAnalysisStatus(id!),
        refetchInterval: query => {
            // Stop polling if analysis is completed or failed
            const data = query.state.data;
            return data?.status === 'COMPLETED' || data?.status === 'FAILED' ? false : 2000;
        },
        enabled: !!id
    });

    // Navigate to recommendations when analysis is completed
    useEffect(() => {
        if (analysisStatus?.status === 'COMPLETED') {
            setTimeout(() => {
                navigate(`/dashboard/recommendations/${id}`, {
                    state: { bankStatement }
                });
            }, 1500);
        }
    }, [analysisStatus?.status, id, navigate, bankStatement]);

    const getStepStatus = (stepIndex: number) => {
        if (!analysisStatus) return 'pending';

        const progressPercentage = analysisStatus.progress;
        const stepProgress = ((stepIndex + 1) / PROCESSING_STEPS.length) * 100;

        if (analysisStatus.status === 'FAILED') {
            return stepProgress <= progressPercentage ? 'failed' : 'pending';
        }

        if (stepProgress <= progressPercentage) {
            return 'completed';
        } else if (stepProgress - 100 / PROCESSING_STEPS.length < progressPercentage) {
            return 'in_progress';
        }

        return 'pending';
    };

    const getStepIcon = (status: string) => {
        switch (status) {
            case 'completed':
                return <CheckCircle className='h-5 w-5 text-green-500' />;
            case 'in_progress':
                return <Loader2 className='h-5 w-5 text-blue-500 animate-spin' />;
            case 'failed':
                return <AlertCircle className='h-5 w-5 text-destructive' />;
            default:
                return <Clock className='h-5 w-5 text-muted-foreground' />;
        }
    };

    if (!id) {
        return (
            <Alert variant='destructive'>
                <AlertCircle className='h-4 w-4' />
                <AlertDescription>Analysis ID not found. Please try uploading your statement again.</AlertDescription>
            </Alert>
        );
    }

    if (error) {
        return (
            <div className='space-y-6'>
                <div>
                    <h1 className='text-2xl font-semibold'>Analysis Processing</h1>
                    <p className='text-muted-foreground mt-1'>
                        Processing your bank statement for treasury recommendations
                    </p>
                </div>

                <Alert variant='destructive'>
                    <AlertCircle className='h-4 w-4' />
                    <AlertDescription>Failed to load analysis status. Please try again.</AlertDescription>
                </Alert>

                <Button onClick={() => refetch()}>Retry</Button>
            </div>
        );
    }

    return (
        <div className='space-y-6'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='text-2xl font-semibold'>Analysis Processing</h1>
                    <p className='text-muted-foreground mt-1'>
                        Processing your bank statement for treasury recommendations
                    </p>
                </div>
                <Badge
                    variant={
                        analysisStatus?.status === 'COMPLETED'
                            ? 'default'
                            : analysisStatus?.status === 'FAILED'
                              ? 'destructive'
                              : 'secondary'
                    }
                >
                    {analysisStatus?.status || 'Loading...'}
                </Badge>
            </div>

            {bankStatement && (
                <Card>
                    <CardHeader>
                        <CardTitle className='flex items-center gap-2'>
                            <FileText className='h-5 w-5' />
                            Bank Statement Details
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
                            <div>
                                <p className='text-sm font-medium'>Filename</p>
                                <p className='text-sm text-muted-foreground'>{bankStatement.filename}</p>
                            </div>
                            <div>
                                <p className='text-sm font-medium'>Bank</p>
                                <p className='text-sm text-muted-foreground'>
                                    {bankStatement.bankName || 'Detected automatically'}
                                </p>
                            </div>
                            <div>
                                <p className='text-sm font-medium'>Account Type</p>
                                <p className='text-sm text-muted-foreground'>
                                    {bankStatement.accountType || 'Detected automatically'}
                                </p>
                            </div>
                            <div>
                                <p className='text-sm font-medium'>Statement Period</p>
                                <p className='text-sm text-muted-foreground'>
                                    {new Date(bankStatement.statementPeriod.startDate).toLocaleDateString()} -{' '}
                                    {new Date(bankStatement.statementPeriod.endDate).toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}

            <Card>
                <CardHeader>
                    <CardTitle className='flex items-center gap-2'>
                        <TrendingUp className='h-5 w-5' />
                        Analysis Progress
                    </CardTitle>
                    <CardDescription>
                        We're analyzing your financial data to provide personalized recommendations
                    </CardDescription>
                </CardHeader>
                <CardContent className='space-y-6'>
                    {analysisStatus && (
                        <div className='space-y-2'>
                            <div className='flex justify-between text-sm'>
                                <span>Overall Progress</span>
                                <span>{analysisStatus.progress}%</span>
                            </div>
                            <Progress
                                value={analysisStatus.progress}
                                className='w-full'
                            />
                            {analysisStatus.currentStep && (
                                <p className='text-sm text-muted-foreground'>
                                    Current step: {analysisStatus.currentStep}
                                </p>
                            )}
                        </div>
                    )}

                    <div className='space-y-4'>
                        {PROCESSING_STEPS.map((step, index) => {
                            const status = getStepStatus(index);
                            return (
                                <div
                                    key={step.id}
                                    className='flex items-start gap-3'
                                >
                                    {getStepIcon(status)}
                                    <div className='flex-1 min-w-0'>
                                        <p
                                            className={`font-medium ${
                                                status === 'completed'
                                                    ? 'text-green-700'
                                                    : status === 'in_progress'
                                                      ? 'text-blue-700'
                                                      : status === 'failed'
                                                        ? 'text-destructive'
                                                        : 'text-muted-foreground'
                                            }`}
                                        >
                                            {step.name}
                                        </p>
                                        <p className='text-sm text-muted-foreground'>{step.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {analysisStatus?.status === 'FAILED' && (
                        <Alert variant='destructive'>
                            <AlertCircle className='h-4 w-4' />
                            <AlertDescription>
                                {analysisStatus.error || 'Analysis failed. Please try uploading your statement again.'}
                            </AlertDescription>
                        </Alert>
                    )}

                    {analysisStatus?.status === 'COMPLETED' && (
                        <Alert>
                            <CheckCircle className='h-4 w-4' />
                            <AlertDescription>
                                Analysis completed successfully! Redirecting to recommendations...
                            </AlertDescription>
                        </Alert>
                    )}
                </CardContent>
            </Card>

            {analysisStatus?.status === 'FAILED' && (
                <div className='flex gap-2'>
                    <Button
                        onClick={() => navigate('/dashboard/upload')}
                        variant='outline'
                    >
                        Upload New Statement
                    </Button>
                    <Button onClick={() => refetch()}>Retry Analysis</Button>
                </div>
            )}
        </div>
    );
};
