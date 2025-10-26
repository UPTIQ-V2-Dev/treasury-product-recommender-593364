import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import {
    Upload,
    FileText,
    TrendingUp,
    DollarSign,
    Clock,
    CheckCircle,
    AlertCircle,
    ArrowRight,
    BarChart3,
    Building2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const recentAnalyses = [
    {
        id: '1',
        filename: 'statement_jan_2024.pdf',
        uploadDate: '2024-01-15',
        status: 'completed',
        recommendations: 3,
        bankName: 'Chase Bank'
    },
    {
        id: '2',
        filename: 'statement_dec_2023.pdf',
        uploadDate: '2024-01-10',
        status: 'completed',
        recommendations: 5,
        bankName: 'Wells Fargo'
    },
    {
        id: '3',
        filename: 'statement_nov_2023.pdf',
        uploadDate: '2024-01-08',
        status: 'processing',
        recommendations: 0,
        bankName: 'Bank of America'
    }
];

const quickStats = [
    {
        title: 'Total Analyses',
        value: '12',
        change: '+2 this month',
        trend: 'up',
        icon: FileText
    },
    {
        title: 'Active Recommendations',
        value: '8',
        change: 'Updated today',
        trend: 'up',
        icon: TrendingUp
    },
    {
        title: 'Potential Savings',
        value: '$25,000',
        change: '+$5,000 projected',
        trend: 'up',
        icon: DollarSign
    },
    {
        title: 'Processing Time',
        value: '2-5 min',
        change: 'Average analysis',
        trend: 'stable',
        icon: Clock
    }
];

export const DashboardPage = () => {
    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'completed':
                return <CheckCircle className='w-4 h-4 text-green-600' />;
            case 'processing':
                return <Clock className='w-4 h-4 text-yellow-600' />;
            case 'failed':
                return <AlertCircle className='w-4 h-4 text-red-600' />;
            default:
                return null;
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'completed':
                return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-900/50';
            case 'processing':
                return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-900/50';
            case 'failed':
                return 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-900/50';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-900/20 dark:text-gray-400 dark:border-gray-900/50';
        }
    };

    return (
        <div className='space-y-8'>
            {/* Header Section */}
            <div className='space-y-2'>
                <h1 className='text-3xl font-bold text-gray-900 dark:text-white'>Dashboard</h1>
                <p className='text-gray-600 dark:text-gray-400'>
                    Welcome to your treasury analytics dashboard. Upload statements to get personalized recommendations.
                </p>
            </div>

            {/* Welcome Banner */}
            <Alert className='border-blue-200 bg-blue-50 dark:border-blue-900/50 dark:bg-blue-900/20'>
                <Building2 className='h-4 w-4 text-blue-600' />
                <AlertDescription className='text-blue-800 dark:text-blue-200'>
                    <strong>Get Started:</strong> Upload your bank statement to receive personalized treasury product
                    recommendations tailored to your financial profile.
                </AlertDescription>
            </Alert>

            {/* Quick Action */}
            <Card className='border-2 border-dashed border-blue-200 bg-blue-50/50 dark:border-blue-900/50 dark:bg-blue-900/10'>
                <CardHeader className='text-center pb-4'>
                    <div className='mx-auto w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4'>
                        <Upload className='w-6 h-6 text-white' />
                    </div>
                    <CardTitle className='text-xl'>Upload Bank Statement</CardTitle>
                    <CardDescription>
                        Start your analysis by uploading a recent bank statement. Our AI will analyze your financial
                        patterns and suggest optimal treasury products.
                    </CardDescription>
                </CardHeader>
                <CardContent className='text-center'>
                    <Button
                        asChild
                        size='lg'
                        className='mb-2'
                    >
                        <Link to='/dashboard/upload'>
                            <Upload className='w-4 h-4 mr-2' />
                            Upload Statement
                        </Link>
                    </Button>
                    <p className='text-sm text-gray-600 dark:text-gray-400'>Supports PDF, CSV, and Excel formats</p>
                </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                {quickStats.map((stat, index) => {
                    const IconComponent = stat.icon;
                    return (
                        <Card key={index}>
                            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                                <CardTitle className='text-sm font-medium text-gray-600 dark:text-gray-400'>
                                    {stat.title}
                                </CardTitle>
                                <IconComponent className='h-4 w-4 text-gray-400' />
                            </CardHeader>
                            <CardContent>
                                <div className='text-2xl font-bold text-gray-900 dark:text-white'>{stat.value}</div>
                                <p className='text-xs text-gray-600 dark:text-gray-400 flex items-center mt-1'>
                                    {stat.trend === 'up' && <TrendingUp className='h-3 w-3 text-green-600 mr-1' />}
                                    {stat.change}
                                </p>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>

            {/* Recent Analyses */}
            <Card>
                <CardHeader>
                    <div className='flex items-center justify-between'>
                        <div>
                            <CardTitle>Recent Analyses</CardTitle>
                            <CardDescription>
                                Your recently uploaded statements and their processing status
                            </CardDescription>
                        </div>
                        <Button
                            variant='outline'
                            asChild
                        >
                            <Link to='/dashboard/history'>
                                View All
                                <ArrowRight className='w-4 h-4 ml-2' />
                            </Link>
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    {recentAnalyses.length > 0 ? (
                        <div className='space-y-4'>
                            {recentAnalyses.map((analysis, index) => (
                                <div key={analysis.id}>
                                    <div className='flex items-center justify-between p-4 rounded-lg border bg-gray-50/50 dark:bg-gray-900/50 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-colors'>
                                        <div className='flex items-center space-x-4'>
                                            <div className='w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center'>
                                                <FileText className='w-5 h-5 text-blue-600 dark:text-blue-400' />
                                            </div>
                                            <div className='space-y-1'>
                                                <p className='font-medium text-gray-900 dark:text-white'>
                                                    {analysis.filename}
                                                </p>
                                                <div className='flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400'>
                                                    <span>{analysis.bankName}</span>
                                                    <span>•</span>
                                                    <span>{new Date(analysis.uploadDate).toLocaleDateString()}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex items-center space-x-4'>
                                            <div className='text-right space-y-1'>
                                                <div className='flex items-center space-x-2'>
                                                    {getStatusIcon(analysis.status)}
                                                    <Badge
                                                        variant='secondary'
                                                        className={getStatusColor(analysis.status)}
                                                    >
                                                        {analysis.status}
                                                    </Badge>
                                                </div>
                                                {analysis.recommendations > 0 && (
                                                    <p className='text-xs text-gray-600 dark:text-gray-400'>
                                                        {analysis.recommendations} recommendation
                                                        {analysis.recommendations !== 1 ? 's' : ''}
                                                    </p>
                                                )}
                                            </div>
                                            {analysis.status === 'completed' && (
                                                <Button
                                                    variant='outline'
                                                    size='sm'
                                                    asChild
                                                >
                                                    <Link to={`/dashboard/recommendations/${analysis.id}`}>
                                                        <BarChart3 className='w-4 h-4 mr-2' />
                                                        View Results
                                                    </Link>
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                    {index < recentAnalyses.length - 1 && <Separator className='my-4' />}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className='text-center py-8'>
                            <FileText className='w-12 h-12 text-gray-400 mx-auto mb-4' />
                            <h3 className='text-lg font-medium text-gray-900 dark:text-white mb-2'>No analyses yet</h3>
                            <p className='text-gray-600 dark:text-gray-400 mb-6'>
                                Upload your first bank statement to get started with personalized recommendations.
                            </p>
                            <Button asChild>
                                <Link to='/dashboard/upload'>
                                    <Upload className='w-4 h-4 mr-2' />
                                    Upload Statement
                                </Link>
                            </Button>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};
