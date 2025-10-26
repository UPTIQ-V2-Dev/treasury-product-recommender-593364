import { z } from 'zod';

export const loginSchema = z.object({
    email: z.string().email('Please enter a valid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters long')
});

export const signupSchema = z
    .object({
        name: z.string().min(2, 'Name must be at least 2 characters long'),
        email: z.string().email('Please enter a valid email address'),
        password: z
            .string()
            .min(8, 'Password must be at least 8 characters long')
            .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
            .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
            .regex(/[0-9]/, 'Password must contain at least one number'),
        clientType: z.enum(['INDIVIDUAL', 'CORPORATE'], {
            message: 'Please select a client type'
        }),
        companyName: z.string().optional(),
        phone: z.string().optional(),
        agreeToTerms: z.boolean().refine(val => val === true, {
            message: 'You must agree to the terms and conditions'
        })
    })
    .refine(
        data => {
            if (data.clientType === 'CORPORATE') {
                return data.companyName && data.companyName.trim().length > 0;
            }
            return true;
        },
        {
            message: 'Company name is required for corporate clients',
            path: ['companyName']
        }
    );

export const resetPasswordSchema = z.object({
    email: z.string().email('Please enter a valid email address')
});

export const newPasswordSchema = z
    .object({
        password: z
            .string()
            .min(8, 'Password must be at least 8 characters long')
            .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
            .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
            .regex(/[0-9]/, 'Password must contain at least one number'),
        confirmPassword: z.string()
    })
    .refine(data => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ['confirmPassword']
    });

export type LoginFormData = z.infer<typeof loginSchema>;
export type SignupFormData = z.infer<typeof signupSchema>;
export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;
export type NewPasswordFormData = z.infer<typeof newPasswordSchema>;
