import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, Navigate } from 'react-router-dom';
import { Eye, EyeOff, Building2, User, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { useAuth } from '@/hooks/use-auth';
import { signupSchema, type SignupFormData } from '@/lib/validations';

export const SignupPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { isAuthenticated, signup, isSigningUp } = useAuth();

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors }
    } = useForm<SignupFormData>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            clientType: 'INDIVIDUAL',
            agreeToTerms: false
        }
    });

    const clientType = watch('clientType');
    const agreeToTerms = watch('agreeToTerms');

    // Redirect if already authenticated
    if (isAuthenticated) {
        return (
            <Navigate
                to='/dashboard'
                replace
            />
        );
    }

    const onSubmit = (data: SignupFormData) => {
        signup(data);
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
                            Start Your Treasury Journey Today
                        </h2>
                        <p className='text-lg text-gray-600 dark:text-gray-300 leading-relaxed'>
                            Join thousands of businesses that trust our intelligent treasury platform to optimize their
                            financial strategies.
                        </p>
                    </div>

                    <div className='space-y-4'>
                        <div className='flex items-start space-x-3'>
                            <TrendingUp className='w-5 h-5 text-blue-600 mt-0.5' />
                            <div>
                                <h4 className='font-semibold text-gray-900 dark:text-white'>Personalized Analysis</h4>
                                <p className='text-sm text-gray-600 dark:text-gray-400'>
                                    Get insights tailored to your financial profile
                                </p>
                            </div>
                        </div>
                        <div className='flex items-start space-x-3'>
                            <Building2 className='w-5 h-5 text-blue-600 mt-0.5' />
                            <div>
                                <h4 className='font-semibold text-gray-900 dark:text-white'>Expert Recommendations</h4>
                                <p className='text-sm text-gray-600 dark:text-gray-400'>
                                    Access curated treasury products from top institutions
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side - Signup Form */}
                <div className='flex items-center justify-center'>
                    <Card className='w-full max-w-md'>
                        <CardHeader className='space-y-1'>
                            <CardTitle className='text-2xl font-bold text-center'>Create your account</CardTitle>
                            <CardDescription className='text-center'>
                                Get started with intelligent treasury recommendations
                            </CardDescription>
                        </CardHeader>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <CardContent className='space-y-4'>
                                {/* Client Type Selection */}
                                <div className='space-y-3'>
                                    <Label>Account Type</Label>
                                    <RadioGroup
                                        value={clientType}
                                        onValueChange={value =>
                                            setValue('clientType', value as 'INDIVIDUAL' | 'CORPORATE')
                                        }
                                        className='flex space-x-4'
                                    >
                                        <div className='flex items-center space-x-2'>
                                            <RadioGroupItem
                                                value='INDIVIDUAL'
                                                id='individual'
                                            />
                                            <Label
                                                htmlFor='individual'
                                                className='flex items-center space-x-2 cursor-pointer'
                                            >
                                                <User className='w-4 h-4' />
                                                <span>Individual</span>
                                            </Label>
                                        </div>
                                        <div className='flex items-center space-x-2'>
                                            <RadioGroupItem
                                                value='CORPORATE'
                                                id='corporate'
                                            />
                                            <Label
                                                htmlFor='corporate'
                                                className='flex items-center space-x-2 cursor-pointer'
                                            >
                                                <Building2 className='w-4 h-4' />
                                                <span>Corporate</span>
                                            </Label>
                                        </div>
                                    </RadioGroup>
                                    {errors.clientType && (
                                        <p className='text-sm text-red-500'>{errors.clientType.message}</p>
                                    )}
                                </div>

                                {/* Name Field */}
                                <div className='space-y-2'>
                                    <Label htmlFor='name'>
                                        {clientType === 'CORPORATE' ? 'Contact Name' : 'Full Name'}
                                    </Label>
                                    <Input
                                        {...register('name')}
                                        id='name'
                                        type='text'
                                        placeholder={`Enter your ${clientType === 'CORPORATE' ? 'contact name' : 'full name'}`}
                                        className={errors.name ? 'border-red-500' : ''}
                                    />
                                    {errors.name && <p className='text-sm text-red-500'>{errors.name.message}</p>}
                                </div>

                                {/* Company Name (Corporate Only) */}
                                {clientType === 'CORPORATE' && (
                                    <div className='space-y-2'>
                                        <Label htmlFor='companyName'>Company Name</Label>
                                        <Input
                                            {...register('companyName')}
                                            id='companyName'
                                            type='text'
                                            placeholder='Enter company name'
                                            className={errors.companyName ? 'border-red-500' : ''}
                                        />
                                        {errors.companyName && (
                                            <p className='text-sm text-red-500'>{errors.companyName.message}</p>
                                        )}
                                    </div>
                                )}

                                {/* Email Field */}
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

                                {/* Phone Field (Optional) */}
                                <div className='space-y-2'>
                                    <Label htmlFor='phone'>Phone Number (Optional)</Label>
                                    <Input
                                        {...register('phone')}
                                        id='phone'
                                        type='tel'
                                        placeholder='Enter your phone number'
                                        className={errors.phone ? 'border-red-500' : ''}
                                    />
                                    {errors.phone && <p className='text-sm text-red-500'>{errors.phone.message}</p>}
                                </div>

                                {/* Password Field */}
                                <div className='space-y-2'>
                                    <Label htmlFor='password'>Password</Label>
                                    <div className='relative'>
                                        <Input
                                            {...register('password')}
                                            id='password'
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder='Create a strong password'
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
                                    <div className='text-xs text-gray-600 dark:text-gray-400'>
                                        Password must contain at least 8 characters with uppercase, lowercase, and
                                        numbers.
                                    </div>
                                </div>

                                {/* Terms Agreement */}
                                <div className='space-y-2'>
                                    <div className='flex items-start space-x-2'>
                                        <Checkbox
                                            id='agreeToTerms'
                                            checked={agreeToTerms}
                                            onCheckedChange={checked => setValue('agreeToTerms', !!checked)}
                                            className={errors.agreeToTerms ? 'border-red-500' : ''}
                                        />
                                        <Label
                                            htmlFor='agreeToTerms'
                                            className='text-sm leading-5 cursor-pointer'
                                        >
                                            I agree to the{' '}
                                            <Link
                                                to='/terms'
                                                className='text-blue-600 hover:text-blue-500 dark:text-blue-400'
                                            >
                                                Terms of Service
                                            </Link>{' '}
                                            and{' '}
                                            <Link
                                                to='/privacy'
                                                className='text-blue-600 hover:text-blue-500 dark:text-blue-400'
                                            >
                                                Privacy Policy
                                            </Link>
                                        </Label>
                                    </div>
                                    {errors.agreeToTerms && (
                                        <p className='text-sm text-red-500'>{errors.agreeToTerms.message}</p>
                                    )}
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
                                    disabled={isSigningUp}
                                >
                                    {isSigningUp ? (
                                        <LoadingSpinner
                                            size='sm'
                                            className='mr-2'
                                        />
                                    ) : null}
                                    {isSigningUp ? 'Creating account...' : 'Create account'}
                                </Button>

                                <div className='text-center text-sm text-gray-600 dark:text-gray-400'>
                                    Already have an account?{' '}
                                    <Link
                                        to='/auth/login'
                                        className='font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300'
                                    >
                                        Sign in
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
