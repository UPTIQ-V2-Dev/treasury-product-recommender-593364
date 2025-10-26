import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, Navigate } from 'react-router-dom';
import { Eye, EyeOff, Building2, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { useAuth } from '@/hooks/use-auth';
import { loginSchema, type LoginFormData } from '@/lib/validations';

export const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { isAuthenticated, login, isLoggingIn } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema)
    });

    // Redirect if already authenticated
    if (isAuthenticated) {
        return (
            <Navigate
                to='/dashboard'
                replace
            />
        );
    }

    const onSubmit = (data: LoginFormData) => {
        login(data);
    };

    return (
        <div className='min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4'>
            <div className='w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center'>
                {/* Left Side - Branding */}
                <div className='hidden lg:flex flex-col justify-center space-y-8 px-8'>
                    <div className='space-y-4'>
                        <div className='flex items-center space-x-3'>
                            <div className='w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center'>
                                <Building2 className='w-6 h-6 text-white' />
                            </div>
                            <div>
                                <h1 className='text-2xl font-bold text-gray-900 dark:text-white'>Treasury Pro</h1>
                                <p className='text-sm text-gray-600 dark:text-gray-400'>Smart Treasury Solutions</p>
                            </div>
                        </div>
                    </div>

                    <div className='space-y-6'>
                        <h2 className='text-3xl font-bold text-gray-900 dark:text-white leading-tight'>
                            Intelligent Treasury Product Recommendations
                        </h2>
                        <p className='text-lg text-gray-600 dark:text-gray-300 leading-relaxed'>
                            Upload your bank statements and get personalized treasury product recommendations powered by
                            advanced financial analysis.
                        </p>
                    </div>

                    <div className='space-y-4'>
                        <div className='flex items-start space-x-3'>
                            <TrendingUp className='w-5 h-5 text-blue-600 mt-0.5' />
                            <div>
                                <h4 className='font-semibold text-gray-900 dark:text-white'>Smart Analysis</h4>
                                <p className='text-sm text-gray-600 dark:text-gray-400'>
                                    AI-powered analysis of your financial patterns
                                </p>
                            </div>
                        </div>
                        <div className='flex items-start space-x-3'>
                            <Building2 className='w-5 h-5 text-blue-600 mt-0.5' />
                            <div>
                                <h4 className='font-semibold text-gray-900 dark:text-white'>
                                    Tailored Recommendations
                                </h4>
                                <p className='text-sm text-gray-600 dark:text-gray-400'>
                                    Products matched to your specific financial profile
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Login Form */}
                <div className='flex items-center justify-center'>
                    <Card className='w-full max-w-md'>
                        <CardHeader className='space-y-1'>
                            <CardTitle className='text-2xl font-bold text-center'>Welcome back</CardTitle>
                            <CardDescription className='text-center'>Sign in to your treasury account</CardDescription>
                        </CardHeader>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <CardContent className='space-y-4'>
                                <div className='space-y-2'>
                                    <Label htmlFor='email'>Email address</Label>
                                    <Input
                                        {...register('email')}
                                        id='email'
                                        type='email'
                                        placeholder='Enter your email'
                                        className={errors.email ? 'border-red-500' : ''}
                                    />
                                    {errors.email && <p className='text-sm text-red-500'>{errors.email.message}</p>}
                                </div>

                                <div className='space-y-2'>
                                    <Label htmlFor='password'>Password</Label>
                                    <div className='relative'>
                                        <Input
                                            {...register('password')}
                                            id='password'
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder='Enter your password'
                                            className={errors.password ? 'border-red-500 pr-10' : 'pr-10'}
                                        />
                                        <Button
                                            type='button'
                                            variant='ghost'
                                            size='sm'
                                            className='absolute right-0 top-0 h-full px-3 hover:bg-transparent'
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? (
                                                <EyeOff className='w-4 h-4 text-gray-500' />
                                            ) : (
                                                <Eye className='w-4 h-4 text-gray-500' />
                                            )}
                                        </Button>
                                    </div>
                                    {errors.password && (
                                        <p className='text-sm text-red-500'>{errors.password.message}</p>
                                    )}
                                </div>

                                <div className='flex justify-end'>
                                    <Link
                                        to='/auth/reset-password'
                                        className='text-sm text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300'
                                    >
                                        Forgot your password?
                                    </Link>
                                </div>

                                {Object.keys(errors).length > 0 && (
                                    <Alert variant='destructive'>
                                        <AlertDescription>
                                            Please correct the errors above and try again.
                                        </AlertDescription>
                                    </Alert>
                                )}
                            </CardContent>
                            <CardFooter className='flex flex-col space-y-4'>
                                <Button
                                    type='submit'
                                    className='w-full'
                                    disabled={isLoggingIn}
                                >
                                    {isLoggingIn ? (
                                        <LoadingSpinner
                                            size='sm'
                                            className='mr-2'
                                        />
                                    ) : null}
                                    {isLoggingIn ? 'Signing in...' : 'Sign in'}
                                </Button>

                                <div className='text-center text-sm text-gray-600 dark:text-gray-400'>
                                    Don't have an account?{' '}
                                    <Link
                                        to='/auth/signup'
                                        className='font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300'
                                    >
                                        Create account
                                    </Link>
                                </div>
                            </CardFooter>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    );
};
