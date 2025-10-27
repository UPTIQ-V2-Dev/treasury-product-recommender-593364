export type ClientType = 'INDIVIDUAL' | 'CORPORATE';

export type RiskLevel = 'LOW' | 'MEDIUM' | 'HIGH' | 'VERY_HIGH';

export type ProductCategory = 'SAVINGS' | 'INVESTMENT' | 'CASH_MANAGEMENT' | 'LENDING' | 'RISK_MANAGEMENT';

export interface TreasuryProduct {
    id: string;
    name: string;
    category: ProductCategory;
    description: string;
    minInvestment: number;
    expectedReturn: number;
    riskLevel: RiskLevel;
    tenure: string;
    features: string[];
    eligibility: string[];
    documents: string[];
}

export interface Recommendation {
    id: string;
    productId: string;
    product: TreasuryProduct;
    score: number;
    reasoning: string;
    suitabilityAnalysis: string;
    riskAssessment: string;
    expectedBenefit: string;
    recommendedAmount?: number;
}

export interface FinancialInsight {
    id: string;
    type: 'CASH_FLOW' | 'BALANCE_TREND' | 'SPENDING_PATTERN' | 'INCOME_SOURCE';
    title: string;
    description: string;
    value: string;
    trend: 'UP' | 'DOWN' | 'STABLE';
    impact: 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL';
}

export interface BankStatement {
    id: string;
    filename: string;
    uploadedAt: string;
    fileSize: number;
    bankName?: string;
    accountType?: string;
    statementPeriod: {
        startDate: string;
        endDate: string;
    };
    processingStatus: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED';
    signedUrl?: string; // Cloud storage URL for document access
}

export interface AnalysisResult {
    id: string;
    statementId: string;
    analysisDate: string;
    financialInsights: FinancialInsight[];
    recommendations: Recommendation[];
    riskProfile: RiskLevel;
    liquidityCoverage: number;
    averageBalance: number;
    cashFlowVolatility: number;
}

export interface CreateUploadInput {
    file: File;
}

export interface UploadProgress {
    loaded: number;
    total: number;
    percentage: number;
}

export interface SupportedFormat {
    extension: string;
    mimeType: string;
    description: string;
}

export interface AnalysisStatus {
    id: string;
    status: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED';
    progress: number;
    currentStep?: string;
    error?: string;
}

export interface ProcessingStep {
    id: string;
    name: string;
    status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'FAILED';
    description: string;
}

export interface AnalysisHistoryItem {
    id: string;
    statementId: string;
    filename: string;
    bankName: string;
    analysisDate: string;
    status: 'COMPLETED' | 'FAILED' | 'PROCESSING';
    recommendationCount: number;
    riskProfile: RiskLevel;
    averageBalance: number;
    topRecommendation?: {
        productName: string;
        expectedReturn: number;
    };
}

export interface HistoryFilter {
    status?: 'COMPLETED' | 'FAILED' | 'PROCESSING';
    bankName?: string;
    riskProfile?: RiskLevel;
    dateRange?: {
        startDate: string;
        endDate: string;
    };
}

export interface HistorySearchParams {
    search?: string;
    filters?: HistoryFilter;
    sortBy?: 'analysisDate' | 'filename' | 'bankName' | 'averageBalance';
    sortOrder?: 'asc' | 'desc';
    page?: number;
    limit?: number;
}
