import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { authService } from '@/services/auth';
import { getStoredUser } from '@/lib/api';
import type { LoginRequest, SignupRequest } from '@/types/user';

export const useAuth = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { data: user, isLoading } = useQuery({
        queryKey: ['auth', 'user'],
        queryFn: () => {
            const storedUser = getStoredUser();
            return storedUser ? Promise.resolve(storedUser) : Promise.resolve(null);
        },
        staleTime: 5 * 60 * 1000 // 5 minutes
    });

    const loginMutation = useMutation({
        mutationFn: (credentials: LoginRequest) => authService.login(credentials),
        onSuccess: data => {
            queryClient.setQueryData(['auth', 'user'], data.user);
            toast.success('Login successful! Welcome back.');
            navigate('/dashboard');
        },
        onError: (error: any) => {
            const message = error?.response?.data?.message || 'Login failed. Please try again.';
            toast.error(message);
        }
    });

    const signupMutation = useMutation({
        mutationFn: (userData: SignupRequest) => authService.register(userData),
        onSuccess: data => {
            queryClient.setQueryData(['auth', 'user'], data.user);
            toast.success('Account created successfully! Welcome aboard.');
            navigate('/dashboard');
        },
        onError: (error: any) => {
            const message = error?.response?.data?.message || 'Registration failed. Please try again.';
            toast.error(message);
        }
    });

    const logoutMutation = useMutation({
        mutationFn: () => authService.logout(),
        onSuccess: () => {
            queryClient.setQueryData(['auth', 'user'], null);
            queryClient.clear();
            toast.success('Logged out successfully.');
            navigate('/auth/login');
        },
        onError: (error: any) => {
            const message = error?.response?.data?.message || 'Logout failed. Please try again.';
            toast.error(message);
        }
    });

    const login = (credentials: LoginRequest) => {
        loginMutation.mutate(credentials);
    };

    const signup = (userData: SignupRequest) => {
        signupMutation.mutate(userData);
    };

    const logout = () => {
        logoutMutation.mutate();
    };

    return {
        user,
        isLoading,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
        isLoggingIn: loginMutation.isPending,
        isSigningUp: signupMutation.isPending,
        isLoggingOut: logoutMutation.isPending
    };
};
