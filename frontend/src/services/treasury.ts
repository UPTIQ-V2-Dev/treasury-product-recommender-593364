import { api } from '@/lib/api';
import { mockApiDelay } from '@/lib/utils';
import { mockSupportedFormats, mockBankStatement, mockAnalysisResult, mockAnalysisStatus } from '@/data/mockData';
import { emitter } from '@/agentSdk';
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

            // Trigger agent event for bank statement analysis with mock data
            try {
                await emitter.emit({
                    agentId: '37cff143-f7d2-4204-878f-020620e7697e',
                    event: 'Bank-Statement-Uploaded',
                    payload: {
                        statementId: mockBankStatement.id,
                        filename: mockBankStatement.filename,
                        bankName: mockBankStatement.bankName,
                        accountType: mockBankStatement.accountType,
                        statementPeriod: mockBankStatement.statementPeriod
                    },
                    documents: [
                        {
                            signedUrl: mockBankStatement.signedUrl!,
                            fileName: mockBankStatement.filename,
                            mimeType: input.file.type
                        }
                    ]
                });
            } catch (error) {
                console.error('Failed to trigger treasury analysis agent (mock):', error);
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

        const bankStatement = response.data;

        // Validate that cloud storage upload was successful and signedUrl is present
        if (!bankStatement.signedUrl) {
            console.warn(
                'Warning: Bank statement uploaded but no signedUrl provided from backend. Agent processing may be limited.'
            );
        }

        // Trigger agent event for bank statement analysis
        try {
            await emitter.emit({
                agentId: '37cff143-f7d2-4204-878f-020620e7697e',
                event: 'Bank-Statement-Uploaded',
                payload: {
                    statementId: bankStatement.id,
                    filename: bankStatement.filename,
                    bankName: bankStatement.bankName,
                    accountType: bankStatement.accountType,
                    statementPeriod: bankStatement.statementPeriod
                },
                documents: bankStatement.signedUrl
                    ? [
                          {
                              signedUrl: bankStatement.signedUrl,
                              fileName: bankStatement.filename,
                              mimeType: input.file.type
                          }
                      ]
                    : []
            });
        } catch (error) {
            console.error('Failed to trigger treasury analysis agent:', error);
        }

        return bankStatement;
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

    // Get analysis result
    getAnalysisResult: async (analysisId: string): Promise<AnalysisResult> => {
        // Use agent sync event for treasury recommendations
        try {
            const agentResponse = await emitter.emit({
                agentId: '37cff143-f7d2-4204-878f-020620e7697e',
                event: 'Bank-Statement-Uploaded',
                payload: {
                    analysisId,
                    statementId: analysisId
                }
            });

            if (agentResponse) {
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
                    id: analysisId,
                    statementId: analysisId,
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
            }
        } catch (error) {
            console.error('Failed to get analysis result from agent:', error);
        }

        // Fallback to mock data or API call
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
