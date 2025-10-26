import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/use-auth';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { isAuthenticated, isLoading } = useAuth();
    const location = useLocation();

    if (isLoading) {
        return (
            <div className='flex items-center justify-center min-h-screen'>
                <LoadingSpinner />
            </div>
        );
    }

    if (!isAuthenticated) {
        return (
            <Navigate
                to='/auth/login'
                state={{ from: location }}
                replace
            />
        );
    }

    return <>{children}</>;
};
