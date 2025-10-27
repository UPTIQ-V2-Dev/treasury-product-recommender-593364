import { api } from '@/lib/api';
import { mockApiDelay, buildQueryParams } from '@/lib/utils';
import { mockSupportedFormats, mockBankStatement, mockAnalysisStatus, mockAnalysisHistory } from '@/data/mockData';
import { emitter } from '@/agentSdk';
import type {
    BankStatement,
    AnalysisResult,
    AnalysisStatus,
    SupportedFormat,
    CreateUploadInput,
    AnalysisHistoryItem,
    HistorySearchParams
} from '@/types/treasury';
import type { PaginatedResponse } from '@/types/api';

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

    // Get treasury recommendations using agent
    getTreasuryRecommendations: async (statementId: string, bankStatementData?: any): Promise<any> => {
        try {
            const response = await emitter.emit({
                agentId: '37cff143-f7d2-4204-878f-020620e7697e',
                event: 'Bank-Statement-Uploaded',
                payload: {
                    statementId,
                    ...bankStatementData
                }
            });
            return response;
        } catch (error) {
            console.error('Failed to get treasury recommendations from agent:', error);
            throw error;
        }
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

    // Get analysis result using agent sync call
    getAnalysisResult: async (
        statementId: string,
        bankStatementData: BankStatement,
        documents?: Array<{ signedUrl: string; fileName?: string; mimeType?: string }>
    ): Promise<AnalysisResult> => {
        // Use agent sync event for treasury recommendations
        const agentResponse = await emitter.emit({
            agentId: '37cff143-f7d2-4204-878f-020620e7697e',
            event: 'Bank-Statement-Uploaded',
            payload: {
                statementId,
                filename: bankStatementData.filename,
                bankName: bankStatementData.bankName,
                accountType: bankStatementData.accountType,
                statementPeriod: bankStatementData.statementPeriod
            },
            documents:
                documents ||
                (bankStatementData.signedUrl
                    ? [
                          {
                              signedUrl: bankStatementData.signedUrl,
                              fileName: bankStatementData.filename,
                              mimeType: 'application/pdf' // Default fallback
                          }
                      ]
                    : [])
        });

        // Transform agent response to match AnalysisResult type
        const recommendations = agentResponse.recommendations.map((rec: any) => ({
            id: rec.id,
            productId: rec.id,
            product: {
                id: rec.id,
                name: rec.name,
                category: 'INVESTMENT' as const,
                description: rec.description,
                minInvestment: rec.minimumInvestment,
                expectedReturn: rec.expectedReturn,
                riskLevel: rec.riskLevel.toUpperCase() as 'LOW' | 'MEDIUM' | 'HIGH',
                tenure: '12 months', // Default value
                features: rec.features,
                eligibility: ['Eligible for corporate clients'],
                documents: ['Statement of Account', 'KYC Documents']
            },
            score: rec.suitabilityScore,
            reasoning: `Recommended based on your financial profile and ${rec.riskLevel} risk tolerance`,
            suitabilityAnalysis: `This ${rec.type} product aligns with your financial goals`,
            riskAssessment: `Risk level: ${rec.riskLevel}`,
            expectedBenefit: `Expected return: ${rec.expectedReturn}%`,
            recommendedAmount: rec.minimumInvestment
        }));

        return {
            id: statementId,
            statementId: statementId,
            analysisDate: new Date().toISOString(),
            financialInsights: [
                {
                    id: 'insight-1',
                    type: 'CASH_FLOW' as const,
                    title: 'Cash Flow Analysis',
                    description: `Average monthly inflow: $${agentResponse.insights.averageMonthlyInflow}`,
                    value: agentResponse.insights.cashFlowPattern,
                    trend: 'STABLE' as const,
                    impact: 'POSITIVE' as const
                },
                {
                    id: 'insight-2',
                    type: 'BALANCE_TREND' as const,
                    title: 'Balance Overview',
                    description: `Total balance: $${agentResponse.insights.totalBalance}`,
                    value: `$${agentResponse.insights.totalBalance}`,
                    trend: 'UP' as const,
                    impact: 'POSITIVE' as const
                }
            ],
            recommendations,
            riskProfile: agentResponse.insights.riskProfile.toUpperCase() as 'LOW' | 'MEDIUM' | 'HIGH',
            liquidityCoverage: 85, // Default value
            averageBalance: agentResponse.insights.totalBalance,
            cashFlowVolatility: 15 // Default value
        };
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
    },

    // Get analysis history
    getAnalysisHistory: async (params?: HistorySearchParams): Promise<PaginatedResponse<AnalysisHistoryItem>> => {
        if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
            console.log('--- MOCK API: getAnalysisHistory ---', params);
            await mockApiDelay();

            let filteredHistory = [...mockAnalysisHistory];

            // Apply search filter
            if (params?.search) {
                const searchLower = params.search.toLowerCase();
                filteredHistory = filteredHistory.filter(
                    item =>
                        item.filename.toLowerCase().includes(searchLower) ||
                        item.bankName.toLowerCase().includes(searchLower)
                );
            }

            // Apply status filter
            if (params?.filters?.status) {
                filteredHistory = filteredHistory.filter(item => item.status === params.filters?.status);
            }

            // Apply bank name filter
            if (params?.filters?.bankName) {
                filteredHistory = filteredHistory.filter(item => item.bankName === params.filters?.bankName);
            }

            // Apply risk profile filter
            if (params?.filters?.riskProfile) {
                filteredHistory = filteredHistory.filter(item => item.riskProfile === params.filters?.riskProfile);
            }

            // Apply date range filter
            if (params?.filters?.dateRange) {
                const startDate = new Date(params.filters.dateRange.startDate);
                const endDate = new Date(params.filters.dateRange.endDate);
                filteredHistory = filteredHistory.filter(item => {
                    const itemDate = new Date(item.analysisDate);
                    return itemDate >= startDate && itemDate <= endDate;
                });
            }

            // Apply sorting
            if (params?.sortBy) {
                filteredHistory.sort((a, b) => {
                    const aValue = a[params.sortBy!];
                    const bValue = b[params.sortBy!];
                    const direction = params.sortOrder === 'desc' ? -1 : 1;

                    if (typeof aValue === 'string' && typeof bValue === 'string') {
                        return aValue.localeCompare(bValue) * direction;
                    }
                    if (typeof aValue === 'number' && typeof bValue === 'number') {
                        return (aValue - bValue) * direction;
                    }
                    return 0;
                });
            } else {
                // Default sort by analysis date descending
                filteredHistory.sort((a, b) => new Date(b.analysisDate).getTime() - new Date(a.analysisDate).getTime());
            }

            // Apply pagination
            const page = params?.page || 1;
            const limit = params?.limit || 10;
            const startIndex = (page - 1) * limit;
            const endIndex = startIndex + limit;
            const paginatedResults = filteredHistory.slice(startIndex, endIndex);

            return {
                results: paginatedResults,
                page,
                limit,
                totalPages: Math.ceil(filteredHistory.length / limit),
                totalResults: filteredHistory.length
            };
        }

        const queryParams = buildQueryParams(params);
        const response = await api.get(`/analysis/history${queryParams}`);
        return response.data;
    },

    // Export analysis to PDF/Excel
    exportAnalysis: async (analysisId: string, format: 'pdf' | 'excel' = 'pdf'): Promise<Blob> => {
        if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
            console.log('--- MOCK API: exportAnalysis ---', analysisId, format);
            await mockApiDelay();
            // Return a mock blob for demo purposes
            const mockContent =
                format === 'pdf' ? 'Mock PDF content for analysis export' : 'Mock Excel content for analysis export';
            return new Blob([mockContent], {
                type:
                    format === 'pdf'
                        ? 'application/pdf'
                        : 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            });
        }

        const response = await api.get(`/analysis/${analysisId}/export`, {
            params: { format },
            responseType: 'blob'
        });
        return response.data;
    },

    // Delete analysis from history
    deleteAnalysis: async (analysisId: string): Promise<{ success: boolean; message: string }> => {
        if (import.meta.env.VITE_USE_MOCK_DATA === 'true') {
            console.log('--- MOCK API: deleteAnalysis ---', analysisId);
            await mockApiDelay();
            return {
                success: true,
                message: 'Analysis deleted successfully'
            };
        }

        const response = await api.delete(`/analysis/${analysisId}`);
        return response.data;
    }
};
