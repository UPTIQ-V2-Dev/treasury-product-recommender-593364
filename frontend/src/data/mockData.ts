import type { PaginatedResponse } from '@/types/api';
import type { AuthResponse, User } from '@/types/user';

export const mockUser: User = {
    id: 1,
    email: 'john.doe@example.com',
    name: 'John Doe',
    role: 'USER',
    isEmailVerified: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
};

export const mockAdminUser: User = {
    id: 2,
    email: 'admin@example.com',
    name: 'Jane Smith',
    role: 'ADMIN',
    isEmailVerified: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
};

export const mockUsers: User[] = [mockUser, mockAdminUser];

export const mockAuthResponse: AuthResponse = {
    user: mockUser,
    tokens: {
        access: {
            token: 'mock-access-token',
            expires: new Date(Date.now() + 15 * 60 * 1000).toISOString()
        },
        refresh: {
            token: 'mock-refresh-token',
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
        }
    }
};

export const mockPaginatedUsers: PaginatedResponse<User> = {
    results: mockUsers,
    page: 1,
    limit: 10,
    totalPages: 1,
    totalResults: 2
};

// Treasury Mock Data
export const mockSupportedFormats = [
    {
        extension: '.pdf',
        mimeType: 'application/pdf',
        description: 'PDF Bank Statements'
    },
    {
        extension: '.csv',
        mimeType: 'text/csv',
        description: 'CSV Transaction Files'
    },
    {
        extension: '.xlsx',
        mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        description: 'Excel Bank Statements'
    }
];

export const mockBankStatement = {
    id: 'stmt-123',
    filename: 'bank-statement-march-2024.pdf',
    uploadedAt: new Date().toISOString(),
    fileSize: 1024000,
    bankName: 'Chase Bank',
    accountType: 'Business Checking',
    statementPeriod: {
        startDate: '2024-03-01',
        endDate: '2024-03-31'
    },
    processingStatus: 'COMPLETED' as const
};

export const mockTreasuryProducts = [
    {
        id: 'prod-1',
        name: 'High-Yield Business Savings',
        category: 'SAVINGS' as const,
        description: 'Earn competitive interest rates on your business savings with flexible access to funds.',
        minInvestment: 10000,
        expectedReturn: 4.5,
        riskLevel: 'LOW' as const,
        tenure: 'No fixed term',
        features: ['No monthly fees', '24/7 online access', 'FDIC insured up to $250,000'],
        eligibility: ['Business account required', 'Minimum balance $10,000'],
        documents: ['Business license', 'Tax ID number', 'Bank statements']
    },
    {
        id: 'prod-2',
        name: 'Corporate Bond Fund',
        category: 'INVESTMENT' as const,
        description: 'Diversified portfolio of investment-grade corporate bonds for stable returns.',
        minInvestment: 25000,
        expectedReturn: 6.2,
        riskLevel: 'MEDIUM' as const,
        tenure: '1-5 years',
        features: ['Professional management', 'Quarterly distributions', 'Diversified holdings'],
        eligibility: ['Corporate entity', 'Investment experience required'],
        documents: ['Corporate documents', 'Financial statements', 'Investment policy']
    }
];

export const mockRecommendations = [
    {
        id: 'rec-1',
        productId: 'prod-1',
        product: mockTreasuryProducts[0],
        score: 92,
        reasoning:
            'Based on your cash flow patterns and risk tolerance, this savings product offers optimal liquidity management.',
        suitabilityAnalysis: 'Your high cash reserves and need for liquidity make this an excellent match.',
        riskAssessment: 'Very low risk with FDIC insurance protection.',
        expectedBenefit: 'Earn $450 annually while maintaining full liquidity.',
        recommendedAmount: 100000
    },
    {
        id: 'rec-2',
        productId: 'prod-2',
        product: mockTreasuryProducts[1],
        score: 78,
        reasoning: 'Your stable cash flow indicates capacity for medium-term investments with higher returns.',
        suitabilityAnalysis: 'Suitable for diversification of your cash management strategy.',
        riskAssessment: 'Medium risk with investment-grade bond exposure.',
        expectedBenefit: 'Potential for $1,550 annual returns on recommended investment.',
        recommendedAmount: 25000
    }
];

export const mockFinancialInsights = [
    {
        id: 'insight-1',
        type: 'CASH_FLOW' as const,
        title: 'Strong Monthly Cash Flow',
        description: 'Your business maintains consistent positive cash flow with average monthly surplus of $15,000.',
        value: '$15,000',
        trend: 'UP' as const,
        impact: 'POSITIVE' as const
    },
    {
        id: 'insight-2',
        type: 'BALANCE_TREND' as const,
        title: 'Growing Balance Reserves',
        description: 'Account balance has grown by 25% over the past quarter, indicating strong financial health.',
        value: '25%',
        trend: 'UP' as const,
        impact: 'POSITIVE' as const
    }
];

export const mockAnalysisResult = {
    id: 'analysis-123',
    statementId: 'stmt-123',
    analysisDate: new Date().toISOString(),
    financialInsights: mockFinancialInsights,
    recommendations: mockRecommendations,
    riskProfile: 'LOW' as const,
    liquidityCoverage: 85,
    averageBalance: 125000,
    cashFlowVolatility: 15
};

export const mockAnalysisStatus = {
    id: 'analysis-123',
    status: 'COMPLETED' as const,
    progress: 100,
    currentStep: 'Analysis Complete'
};
