import { AnalysisStatus, PrismaClient } from '../generated/prisma/index.js';
import bcrypt from 'bcrypt';
const prisma = new PrismaClient();
async function main() {
    console.log('🌱 Starting database seeding...');
    // Create admin user
    const adminPassword = await bcrypt.hash('admin123', 12);
    const admin = await prisma.user.upsert({
        where: { email: 'admin@example.com' },
        update: {},
        create: {
            email: 'admin@example.com',
            name: 'Admin',
            password: adminPassword,
            role: 'ADMIN',
            isEmailVerified: true
        }
    });
    console.log('✅ Created admin user:', admin.email);
    // Create test user
    const testPassword = await bcrypt.hash('test123', 12);
    const testUser = await prisma.user.upsert({
        where: { email: 'test@example.com' },
        update: {},
        create: {
            email: 'test@example.com',
            name: 'Test User',
            password: testPassword,
            role: 'USER',
            isEmailVerified: true
        }
    });
    console.log('✅ Created test user:', testUser.email);
    // Create sample bank statement
    const bankStatement = await prisma.bankStatement.upsert({
        where: { id: 'stmt-test-123' },
        update: {},
        create: {
            id: 'stmt-test-123',
            filename: 'test-bank-statement.pdf',
            fileSize: 1024000,
            bankName: 'Test Bank',
            accountType: 'Business Checking',
            statementPeriod: {
                startDate: '2024-03-01',
                endDate: '2024-03-31'
            },
            processingStatus: 'COMPLETED',
            userId: testUser.id
        }
    });
    console.log('✅ Created sample bank statement:', bankStatement.id);
    // Create sample analysis results
    const completedAnalysis = await prisma.analysisResult.upsert({
        where: { id: 'analysis-completed-123' },
        update: {},
        create: {
            id: 'analysis-completed-123',
            statementId: bankStatement.id,
            userId: testUser.id,
            status: AnalysisStatus.COMPLETED,
            progress: 100,
            currentStep: null,
            error: null,
            financialInsights: [
                {
                    id: 'insight-1',
                    type: 'CASH_FLOW',
                    title: 'Strong Monthly Cash Flow',
                    description: 'Consistent positive cash flow throughout the period',
                    value: '$15,000',
                    trend: 'UP',
                    impact: 'POSITIVE'
                },
                {
                    id: 'insight-2',
                    type: 'BALANCE',
                    title: 'Stable Account Balance',
                    description: 'Account maintains healthy balance levels',
                    value: '$125,000',
                    trend: 'STABLE',
                    impact: 'POSITIVE'
                }
            ],
            recommendations: [
                {
                    id: 'rec-1',
                    productId: 'prod-1',
                    score: 92,
                    reasoning: 'Optimal liquidity management solution for your cash flow patterns',
                    recommendedAmount: 100000
                }
            ],
            riskProfile: 'LOW',
            liquidityCoverage: 85.5,
            averageBalance: 125000.0,
            cashFlowVolatility: 15.2
        }
    });
    console.log('✅ Created completed analysis:', completedAnalysis.id);
    // Create failed analysis for retry testing
    const failedAnalysis = await prisma.analysisResult.upsert({
        where: { id: 'analysis-failed-123' },
        update: {},
        create: {
            id: 'analysis-failed-123',
            statementId: bankStatement.id,
            userId: testUser.id,
            status: AnalysisStatus.FAILED,
            progress: 45,
            currentStep: 'Processing financial data',
            error: 'Failed to extract transaction data from PDF'
        }
    });
    console.log('✅ Created failed analysis:', failedAnalysis.id);
    // Create treasury product for recommendations
    const treasuryProduct = await prisma.treasuryProduct.upsert({
        where: { id: 'prod-1' },
        update: {},
        create: {
            id: 'prod-1',
            name: 'High-Yield Business Savings',
            category: 'SAVINGS',
            description: 'Earn competitive interest rates on your business savings with no monthly fees',
            minInvestment: 10000.0,
            expectedReturn: 4.5,
            riskLevel: 'LOW',
            tenure: 'No fixed term',
            features: ['No monthly fees', '24/7 online access', 'FDIC insured'],
            eligibility: ['Business account required', 'Minimum balance $10,000'],
            documents: ['Business license', 'Tax ID number']
        }
    });
    console.log('✅ Created treasury product:', treasuryProduct.id);
    // Create more sample treasury products for testing
    const treasuryProduct2 = await prisma.treasuryProduct.upsert({
        where: { id: 'prod-2' },
        update: {},
        create: {
            id: 'prod-2',
            name: 'Corporate Money Market',
            category: 'MONEY_MARKET',
            description: 'Flexible money market account with tiered interest rates for corporate clients',
            minInvestment: 50000.0,
            expectedReturn: 3.8,
            riskLevel: 'LOW',
            tenure: 'Flexible',
            features: ['Tiered interest rates', 'Check writing privileges', 'Online banking'],
            eligibility: ['Corporate account required', 'Minimum balance $50,000'],
            documents: ['Corporate resolution', 'Financial statements']
        }
    });
    console.log('✅ Created treasury product:', treasuryProduct2.id);
    const treasuryProduct3 = await prisma.treasuryProduct.upsert({
        where: { id: 'prod-3' },
        update: {},
        create: {
            id: 'prod-3',
            name: '90-Day Certificate of Deposit',
            category: 'CD',
            description: 'Short-term certificate of deposit with guaranteed returns',
            minInvestment: 25000.0,
            expectedReturn: 5.2,
            riskLevel: 'VERY_LOW',
            tenure: '90 days',
            features: ['Guaranteed returns', 'FDIC insured', 'Automatic renewal option'],
            eligibility: ['Any business account', 'Minimum deposit $25,000'],
            documents: ['Account verification', 'Business registration']
        }
    });
    console.log('✅ Created treasury product:', treasuryProduct3.id);
    const treasuryProduct4 = await prisma.treasuryProduct.upsert({
        where: { id: 'prod-4' },
        update: {},
        create: {
            id: 'prod-4',
            name: 'Treasury Bond Fund',
            category: 'INVESTMENT',
            description: 'Diversified treasury bond fund for conservative investors',
            minInvestment: 100000.0,
            expectedReturn: 6.1,
            riskLevel: 'MEDIUM',
            tenure: '1-5 years',
            features: ['Professional management', 'Monthly income', 'Liquidity options'],
            eligibility: ['Accredited investor status', 'Investment agreement required'],
            documents: ['Investment profile', 'Risk assessment', 'Legal documentation']
        }
    });
    console.log('✅ Created treasury product:', treasuryProduct4.id);
    // Create supported formats
    const supportedFormats = [
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
    for (const format of supportedFormats) {
        const supportedFormat = await prisma.supportedFormat.upsert({
            where: {
                extension_mimeType: {
                    extension: format.extension,
                    mimeType: format.mimeType
                }
            },
            update: {},
            create: format
        });
        console.log('✅ Created supported format:', supportedFormat.extension);
    }
}
main()
    .catch(e => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
