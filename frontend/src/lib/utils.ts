import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const mockApiDelay = (ms: number = 500) => new Promise(resolve => setTimeout(resolve, ms));

export const buildQueryParams = (params?: Record<string, any>): string => {
    if (!params) return '';

    const searchParams = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
            if (typeof value === 'object' && !Array.isArray(value)) {
                // Handle nested objects like filters
                Object.entries(value).forEach(([nestedKey, nestedValue]) => {
                    if (nestedValue !== undefined && nestedValue !== null && nestedValue !== '') {
                        if (typeof nestedValue === 'object') {
                            // Handle date ranges and other nested objects
                            Object.entries(nestedValue).forEach(([deepKey, deepValue]) => {
                                if (deepValue !== undefined && deepValue !== null && deepValue !== '') {
                                    searchParams.append(`${key}.${nestedKey}.${deepKey}`, String(deepValue));
                                }
                            });
                        } else {
                            searchParams.append(`${key}.${nestedKey}`, String(nestedValue));
                        }
                    }
                });
            } else if (Array.isArray(value)) {
                // Handle arrays
                value.forEach(item => {
                    searchParams.append(`${key}[]`, String(item));
                });
            } else {
                searchParams.append(key, String(value));
            }
        }
    });

    const queryString = searchParams.toString();
    return queryString ? `?${queryString}` : '';
};
