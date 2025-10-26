import { api } from '@/lib/api';
import { mockApiDelay } from '@/lib/utils';
import { mockSupportedFormats, mockBankStatement, mockAnalysisResult, mockAnalysisStatus } from '@/data/mockData';
import type {
    BankStatement,
    AnalysisResult,
    AnalysisStatus,
    SupportedFormat,
    CreateUploadInput
} from '@/types/treasury';

export const treasuryService = {
    // Get supported file formats
    getSupportedFormats: async (): Promise<SupportedFormat[]> => {
        if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
            console.log('--- MOCK API: getSupportedFormats ---');
            await mockApiDelay();
            return mockSupportedFormats;
        }
        const response = await api.get('/statements/formats');
        return response.data;
    },

    // Upload bank statement
    uploadStatement: async (
        input: CreateUploadInput,
        onUploadProgress?: (progress: number) => void
    ): Promise<BankStatement> => {
        if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
            console.log('--- MOCK API: uploadStatement ---', input);
            await mockApiDelay(2000); // Simulate longer upload
            if (onUploadProgress) {
                // Simulate upload progress
                for (let i = 0; i <= 100; i += 10) {
                    setTimeout(() => onUploadProgress(i), (i / 100) * 1000);
                }
            }
            return mockBankStatement;
        }

        const formData = new FormData();
        formData.append('file', input.file);

        const response = await api.post('/statements/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress: progressEvent => {
                if (onUploadProgress && progressEvent.total) {
                    const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    onUploadProgress(progress);
                }
            }
        });
        return response.data;
    },

    // Get analysis status
    getAnalysisStatus: async (analysisId: string): Promise<AnalysisStatus> => {
        if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
            console.log('--- MOCK API: getAnalysisStatus ---', analysisId);
            await mockApiDelay();
            return mockAnalysisStatus;
        }
        const response = await api.get(`/analysis/${analysisId}/status`);
        return response.data;
    },

    // Get analysis result
    getAnalysisResult: async (analysisId: string): Promise<AnalysisResult> => {
        if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
            console.log('--- MOCK API: getAnalysisResult ---', analysisId);
            await mockApiDelay();
            return mockAnalysisResult;
        }
        const response = await api.get(`/analysis/${analysisId}`);
        return response.data;
    },

    // Retry failed analysis
    retryAnalysis: async (analysisId: string): Promise<AnalysisStatus> => {
        if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
            console.log('--- MOCK API: retryAnalysis ---', analysisId);
            await mockApiDelay();
            return { ...mockAnalysisStatus, status: 'PROCESSING', progress: 0 };
        }
        const response = await api.post(`/analysis/${analysisId}/retry`);
        return response.data;
    },

    // Contact for product
    contactForProduct: async (
        recommendationId: string,
        contactInfo: {
            message?: string;
            preferredContact: 'EMAIL' | 'PHONE';
        }
    ): Promise<{ success: boolean; message: string }> => {
        if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
            console.log('--- MOCK API: contactForProduct ---', recommendationId, contactInfo);
            await mockApiDelay();
            return {
                success: true,
                message: 'Your request has been submitted. A representative will contact you within 24 hours.'
            };
        }
        const response = await api.post(`/recommendations/${recommendationId}/contact`, contactInfo);
        return response.data;
    }
};
