import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Construction, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface ComingSoonPageProps {
    title?: string;
    description?: string;
}

export const ComingSoonPage = ({
    title = 'Coming Soon',
    description = 'This feature is currently under development and will be available soon.'
}: ComingSoonPageProps) => {
    const navigate = useNavigate();

    return (
        <div className='flex items-center justify-center min-h-[60vh]'>
            <Card className='w-full max-w-md text-center'>
                <CardHeader>
                    <div className='mx-auto w-16 h-16 bg-orange-100 dark:bg-orange-900/20 rounded-full flex items-center justify-center mb-4'>
                        <Construction className='w-8 h-8 text-orange-600 dark:text-orange-400' />
                    </div>
                    <CardTitle className='text-2xl'>{title}</CardTitle>
                    <CardDescription className='text-base'>{description}</CardDescription>
                </CardHeader>
                <CardContent className='space-y-4'>
                    <p className='text-sm text-gray-600 dark:text-gray-400'>
                        We're working hard to bring you this feature. Stay tuned for updates!
                    </p>
                    <div className='flex gap-2 justify-center'>
                        <Button
                            onClick={() => navigate(-1)}
                            variant='outline'
                        >
                            <ArrowLeft className='w-4 h-4 mr-2' />
                            Go Back
                        </Button>
                        <Button asChild>
                            <Link to='/dashboard'>Dashboard</Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};
