import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Brain, FileText, ChartBar, Sparkles, Clock, CheckCircle2 } from 'lucide-react';

interface AgentLoadingProps {
    agentName?: string;
    message?: string;
    estimatedTime?: string;
    className?: string;
}

const loadingSteps = [
    { icon: FileText, text: 'Processing your documents...', duration: 20 },
    { icon: Brain, text: 'AI analyzing financial patterns...', duration: 30 },
    { icon: ChartBar, text: 'Calculating risk assessments...', duration: 25 },
    { icon: Sparkles, text: 'Generating personalized recommendations...', duration: 25 }
];

export const AgentLoading = ({
    agentName = 'AI Assistant',
    message = 'Processing your request',
    estimatedTime = '1-2 minutes',
    className
}: AgentLoadingProps) => {
    const [progress, setProgress] = useState(0);
    const [currentStep, setCurrentStep] = useState(0);
    const [completedSteps, setCompletedSteps] = useState<number[]>([]);

    useEffect(() => {
        const totalDuration = loadingSteps.reduce((sum, step) => sum + step.duration, 0) * 1000;
        const interval = 100; // Update every 100ms
        const increment = (interval / totalDuration) * 100;

        const timer = setInterval(() => {
            setProgress(prev => {
                const newProgress = Math.min(prev + increment, 95); // Max 95% to show it's still processing

                // Calculate which step should be active
                let cumulativeDuration = 0;
                let activeStep = 0;

                for (let i = 0; i < loadingSteps.length; i++) {
                    cumulativeDuration += (loadingSteps[i].duration / 100) * 100;
                    if (newProgress < cumulativeDuration) {
                        activeStep = i;
                        break;
                    } else {
                        activeStep = i + 1;
                    }
                }

                setCurrentStep(Math.min(activeStep, loadingSteps.length - 1));

                // Update completed steps
                const newCompletedSteps: number[] = [];
                for (let i = 0; i < activeStep && i < loadingSteps.length; i++) {
                    newCompletedSteps.push(i);
                }
                setCompletedSteps(newCompletedSteps);

                return newProgress;
            });
        }, interval);

        return () => clearInterval(timer);
    }, []);

    return (
        <Card className={`w-full max-w-2xl mx-auto ${className}`}>
            <CardContent className='p-8'>
                <div className='text-center mb-6'>
                    <div className='relative mb-4'>
                        <div className='w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4'>
                            <Brain className='w-8 h-8 text-primary animate-pulse' />
                        </div>
                        <div className='absolute inset-0 w-16 h-16 mx-auto'>
                            <div className='w-full h-full border-2 border-primary/20 rounded-full animate-spin border-t-primary'></div>
                        </div>
                    </div>
                    <h3 className='text-lg font-semibold text-foreground mb-2'>
                        {agentName} is working on your request
                    </h3>
                    <p className='text-muted-foreground mb-2'>{message}</p>
                    <Badge
                        variant='secondary'
                        className='mb-4'
                    >
                        <Clock className='w-3 h-3 mr-1' />
                        Estimated time: {estimatedTime}
                    </Badge>
                </div>

                <div className='space-y-6'>
                    <div>
                        <div className='flex justify-between text-sm text-muted-foreground mb-2'>
                            <span>Progress</span>
                            <span>{Math.round(progress)}%</span>
                        </div>
                        <Progress
                            value={progress}
                            className='h-2'
                        />
                    </div>

                    <div className='space-y-4'>
                        {loadingSteps.map((step, index) => {
                            const isCompleted = completedSteps.includes(index);
                            const isActive = currentStep === index;
                            const Icon = step.icon;

                            return (
                                <div
                                    key={index}
                                    className={`flex items-center space-x-3 transition-all duration-500 ${
                                        isActive
                                            ? 'text-primary'
                                            : isCompleted
                                              ? 'text-green-600'
                                              : 'text-muted-foreground'
                                    }`}
                                >
                                    <div
                                        className={`p-2 rounded-full transition-all duration-500 ${
                                            isActive
                                                ? 'bg-primary/10 animate-pulse'
                                                : isCompleted
                                                  ? 'bg-green-100'
                                                  : 'bg-muted/30'
                                        }`}
                                    >
                                        {isCompleted ? (
                                            <CheckCircle2 className='w-4 h-4' />
                                        ) : (
                                            <Icon className={`w-4 h-4 ${isActive ? 'animate-pulse' : ''}`} />
                                        )}
                                    </div>
                                    <span
                                        className={`transition-all duration-500 ${
                                            isActive ? 'font-medium' : isCompleted ? 'line-through opacity-70' : ''
                                        }`}
                                    >
                                        {step.text}
                                    </span>
                                    {isActive && (
                                        <div className='flex space-x-1'>
                                            <div className='w-2 h-2 bg-primary rounded-full animate-bounce'></div>
                                            <div
                                                className='w-2 h-2 bg-primary rounded-full animate-bounce'
                                                style={{ animationDelay: '0.1s' }}
                                            ></div>
                                            <div
                                                className='w-2 h-2 bg-primary rounded-full animate-bounce'
                                                style={{ animationDelay: '0.2s' }}
                                            ></div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    <div className='pt-4 border-t'>
                        <p className='text-sm text-muted-foreground text-center'>
                            Please keep this page open. The AI is working hard to provide you with the best
                            recommendations.
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
