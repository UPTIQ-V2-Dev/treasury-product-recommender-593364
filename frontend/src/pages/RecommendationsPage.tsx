import { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import {
    TrendingUp,
    Shield,
    DollarSign,
    Clock,
    Phone,
    Mail,
    ChevronRight,
    Star,
    ArrowUp,
    ArrowDown,
    Minus,
    AlertTriangle
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { treasuryService } from '@/services/treasury';
import { cn } from '@/lib/utils';
import type { RiskLevel, Recommendation, FinancialInsight } from '@/types/treasury';

export const RecommendationsPage = () => {
    const { id } = useParams<{ id: string }>();
    const location = useLocation();

    const [selectedRecommendation, setSelectedRecommendation] = useState<Recommendation | null>(null);
    const [contactMessage, setContactMessage] = useState('');
    const [preferredContact, setPreferredContact] = useState<'EMAIL' | 'PHONE'>('EMAIL');

    // Get analysis result from navigation state (from agent call) or fallback to API
    const analysisResultFromState = location.state?.analysisResult;
    const bankStatement = location.state?.bankStatement;

    const {
        data: analysisResult,
        isLoading,
        error
    } = useQuery({
        queryKey: ['analysis-result', id],
        queryFn: () => {
            if (analysisResultFromState) {
                return Promise.resolve(analysisResultFromState);
            }
            // Fallback - this shouldn't be needed with the new flow, but kept for safety
            if (!bankStatement) {
                throw new Error('Bank statement data not available');
            }
            return treasuryService.getAnalysisResult(id!, bankStatement);
        },
        enabled: !!id,
        initialData: analysisResultFromState
    });

    const contactMutation = useMutation({
        mutationFn: (data: {
            recommendationId: string;
            contactInfo: { message?: string; preferredContact: 'EMAIL' | 'PHONE' };
        }) => treasuryService.contactForProduct(data.recommendationId, data.contactInfo),
        onSuccess: () => {
            setContactMessage('');
            setSelectedRecommendation(null);
        }
    });

    const handleContact = () => {
        if (selectedRecommendation) {
            contactMutation.mutate({
                recommendationId: selectedRecommendation.id,
                contactInfo: {
                    message: contactMessage,
                    preferredContact
                }
            });
        }
    };

    const getRiskColor = (risk: RiskLevel) => {
        switch (risk) {
            case 'LOW':
                return 'text-green-600 bg-green-50';
            case 'MEDIUM':
                return 'text-yellow-600 bg-yellow-50';
            case 'HIGH':
                return 'text-orange-600 bg-orange-50';
            case 'VERY_HIGH':
                return 'text-red-600 bg-red-50';
            default:
                return 'text-gray-600 bg-gray-50';
        }
    };

    const getTrendIcon = (trend: 'UP' | 'DOWN' | 'STABLE') => {
        switch (trend) {
            case 'UP':
                return <ArrowUp className='h-4 w-4 text-green-500' />;
            case 'DOWN':
                return <ArrowDown className='h-4 w-4 text-red-500' />;
            case 'STABLE':
                return <Minus className='h-4 w-4 text-blue-500' />;
        }
    };

    const getImpactColor = (impact: 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL') => {
        switch (impact) {
            case 'POSITIVE':
                return 'border-l-green-500 bg-green-50';
            case 'NEGATIVE':
                return 'border-l-red-500 bg-red-50';
            case 'NEUTRAL':
                return 'border-l-blue-500 bg-blue-50';
        }
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount);
    };

    if (!id) {
        return (
            <Alert variant='destructive'>
                <AlertTriangle className='h-4 w-4' />
                <AlertDescription>
                    Analysis ID not found. Please upload a statement to get recommendations.
                </AlertDescription>
            </Alert>
        );
    }

    if (isLoading) {
        return (
            <div className='space-y-6'>
                <div className='animate-pulse'>
                    <div className='h-8 bg-gray-200 rounded w-1/3 mb-2'></div>
                    <div className='h-4 bg-gray-200 rounded w-2/3'></div>
                </div>
                <div className='grid gap-4'>
                    {[1, 2, 3].map(i => (
                        <div
                            key={i}
                            className='h-32 bg-gray-200 rounded animate-pulse'
                        ></div>
                    ))}
                </div>
            </div>
        );
    }

    if (error || !analysisResult) {
        return (
            <Alert variant='destructive'>
                <AlertTriangle className='h-4 w-4' />
                <AlertDescription>
                    Failed to load analysis results. Please try again or contact support.
                </AlertDescription>
            </Alert>
        );
    }

    return (
        <div className='space-y-6'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='text-2xl font-semibold'>Treasury Recommendations</h1>
                    <p className='text-muted-foreground mt-1'>
                        Personalized product recommendations based on your financial profile
                    </p>
                </div>
                <Badge
                    variant='outline'
                    className={getRiskColor(analysisResult.riskProfile)}
                >
                    {analysisResult.riskProfile} Risk Profile
                </Badge>
            </div>

            {/* Financial Insights */}
            <Card>
                <CardHeader>
                    <CardTitle className='flex items-center gap-2'>
                        <TrendingUp className='h-5 w-5' />
                        Financial Insights
                    </CardTitle>
                    <CardDescription>Key insights from your bank statement analysis</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className='grid md:grid-cols-2 gap-4 mb-6'>
                        <div className='space-y-2'>
                            <p className='text-sm font-medium'>Average Balance</p>
                            <p className='text-2xl font-bold'>{formatCurrency(analysisResult.averageBalance)}</p>
                        </div>
                        <div className='space-y-2'>
                            <p className='text-sm font-medium'>Liquidity Coverage</p>
                            <div className='flex items-center gap-2'>
                                <Progress
                                    value={analysisResult.liquidityCoverage}
                                    className='flex-1'
                                />
                                <span className='text-sm font-medium'>{analysisResult.liquidityCoverage}%</span>
                            </div>
                        </div>
                    </div>

                    <div className='grid gap-4'>
                        {analysisResult.financialInsights.map((insight: FinancialInsight) => (
                            <div
                                key={insight.id}
                                className={cn('border-l-4 p-4 rounded-r-lg', getImpactColor(insight.impact))}
                            >
                                <div className='flex items-start justify-between'>
                                    <div className='flex-1'>
                                        <div className='flex items-center gap-2 mb-1'>
                                            <h4 className='font-medium'>{insight.title}</h4>
                                            {getTrendIcon(insight.trend)}
                                        </div>
                                        <p className='text-sm text-muted-foreground'>{insight.description}</p>
                                    </div>
                                    <div className='text-right'>
                                        <p className='text-lg font-semibold'>{insight.value}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Recommendations */}
            <div className='space-y-4'>
                <h2 className='text-xl font-semibold'>Recommended Products</h2>
                {analysisResult.recommendations.map((recommendation: Recommendation, index: number) => (
                    <Card
                        key={recommendation.id}
                        className='relative'
                    >
                        {index === 0 && (
                            <div className='absolute -top-2 -right-2'>
                                <Badge className='bg-yellow-500 text-white'>
                                    <Star className='h-3 w-3 mr-1' />
                                    Top Pick
                                </Badge>
                            </div>
                        )}
                        <CardHeader>
                            <div className='flex items-start justify-between'>
                                <div className='flex-1'>
                                    <CardTitle className='flex items-center gap-2'>
                                        {recommendation.product.name}
                                        <Badge variant='outline'>{recommendation.product.category}</Badge>
                                    </CardTitle>
                                    <CardDescription className='mt-2'>
                                        {recommendation.product.description}
                                    </CardDescription>
                                </div>
                                <div className='text-right'>
                                    <div className='text-2xl font-bold text-primary'>{recommendation.score}/100</div>
                                    <p className='text-sm text-muted-foreground'>Match Score</p>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className='space-y-4'>
                            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
                                <div className='flex items-center gap-2'>
                                    <DollarSign className='h-4 w-4 text-muted-foreground' />
                                    <div>
                                        <p className='text-sm font-medium'>Expected Return</p>
                                        <p className='text-sm text-muted-foreground'>
                                            {recommendation.product.expectedReturn}% APY
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <Shield className='h-4 w-4 text-muted-foreground' />
                                    <div>
                                        <p className='text-sm font-medium'>Risk Level</p>
                                        <Badge
                                            variant='outline'
                                            className={getRiskColor(recommendation.product.riskLevel)}
                                        >
                                            {recommendation.product.riskLevel}
                                        </Badge>
                                    </div>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <DollarSign className='h-4 w-4 text-muted-foreground' />
                                    <div>
                                        <p className='text-sm font-medium'>Min Investment</p>
                                        <p className='text-sm text-muted-foreground'>
                                            {formatCurrency(recommendation.product.minInvestment)}
                                        </p>
                                    </div>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <Clock className='h-4 w-4 text-muted-foreground' />
                                    <div>
                                        <p className='text-sm font-medium'>Tenure</p>
                                        <p className='text-sm text-muted-foreground'>{recommendation.product.tenure}</p>
                                    </div>
                                </div>
                            </div>

                            <div className='space-y-3'>
                                <div>
                                    <h5 className='font-medium mb-1'>Why this product suits you:</h5>
                                    <p className='text-sm text-muted-foreground'>{recommendation.reasoning}</p>
                                </div>

                                {recommendation.recommendedAmount && (
                                    <div>
                                        <h5 className='font-medium mb-1'>Recommended Investment:</h5>
                                        <p className='text-sm text-muted-foreground'>
                                            {formatCurrency(recommendation.recommendedAmount)} -{' '}
                                            {recommendation.expectedBenefit}
                                        </p>
                                    </div>
                                )}
                            </div>

                            <div className='flex gap-2 pt-2'>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button
                                            onClick={() => setSelectedRecommendation(recommendation)}
                                            className='flex-1'
                                        >
                                            <Mail className='h-4 w-4 mr-2' />
                                            Contact for Details
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Contact for Product Details</DialogTitle>
                                            <DialogDescription>
                                                Get in touch with our treasury specialists about{' '}
                                                {selectedRecommendation?.product.name}
                                            </DialogDescription>
                                        </DialogHeader>
                                        <div className='space-y-4'>
                                            <div>
                                                <Label>Preferred Contact Method</Label>
                                                <RadioGroup
                                                    value={preferredContact}
                                                    onValueChange={(value: 'EMAIL' | 'PHONE') =>
                                                        setPreferredContact(value)
                                                    }
                                                    className='mt-2'
                                                >
                                                    <div className='flex items-center space-x-2'>
                                                        <RadioGroupItem
                                                            value='EMAIL'
                                                            id='email'
                                                        />
                                                        <Label
                                                            htmlFor='email'
                                                            className='flex items-center gap-2'
                                                        >
                                                            <Mail className='h-4 w-4' />
                                                            Email
                                                        </Label>
                                                    </div>
                                                    <div className='flex items-center space-x-2'>
                                                        <RadioGroupItem
                                                            value='PHONE'
                                                            id='phone'
                                                        />
                                                        <Label
                                                            htmlFor='phone'
                                                            className='flex items-center gap-2'
                                                        >
                                                            <Phone className='h-4 w-4' />
                                                            Phone Call
                                                        </Label>
                                                    </div>
                                                </RadioGroup>
                                            </div>
                                            <div>
                                                <Label htmlFor='message'>Message (optional)</Label>
                                                <Textarea
                                                    id='message'
                                                    placeholder='Any specific questions or requirements?'
                                                    value={contactMessage}
                                                    onChange={e => setContactMessage(e.target.value)}
                                                    className='mt-1'
                                                />
                                            </div>
                                            <Button
                                                onClick={handleContact}
                                                className='w-full'
                                                disabled={contactMutation.isPending}
                                            >
                                                {contactMutation.isPending ? 'Sending...' : 'Send Request'}
                                            </Button>
                                            {contactMutation.isSuccess && (
                                                <Alert>
                                                    <AlertDescription>
                                                        Your request has been submitted. A representative will contact
                                                        you within 24 hours.
                                                    </AlertDescription>
                                                </Alert>
                                            )}
                                        </div>
                                    </DialogContent>
                                </Dialog>
                                <Button variant='outline'>
                                    View Details
                                    <ChevronRight className='h-4 w-4 ml-2' />
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};
