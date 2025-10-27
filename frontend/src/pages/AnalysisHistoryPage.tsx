import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import {
    Search,
    Filter,
    Download,
    FileText,
    Calendar as CalendarIcon,
    ChevronLeft,
    ChevronRight,
    BarChart3,
    Clock,
    CheckCircle,
    AlertCircle,
    Trash2,
    SortAsc,
    SortDesc,
    Building2,
    DollarSign,
    TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { treasuryService } from '@/services/treasury';
import type { HistorySearchParams, HistoryFilter } from '@/types/treasury';

export const AnalysisHistoryPage = () => {
    const [searchParams, setSearchParams] = useState<HistorySearchParams>({
        page: 1,
        limit: 10,
        sortBy: 'analysisDate',
        sortOrder: 'desc'
    });

    const [searchTerm, setSearchTerm] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const [filters, setFilters] = useState<HistoryFilter>({});
    const [dateRange, setDateRange] = useState<{ from?: Date; to?: Date }>({});

    const {
        data: historyData,
        isLoading,
        isError,
        error,
        refetch
    } = useQuery({
        queryKey: ['analysisHistory', searchParams],
        queryFn: () => treasuryService.getAnalysisHistory(searchParams),
        staleTime: 5 * 60 * 1000 // 5 minutes
    });

    const handleSearch = () => {
        setSearchParams(prev => ({
            ...prev,
            search: searchTerm,
            filters: {
                ...filters,
                dateRange:
                    dateRange.from && dateRange.to
                        ? {
                              startDate: format(dateRange.from, 'yyyy-MM-dd'),
                              endDate: format(dateRange.to, 'yyyy-MM-dd')
                          }
                        : undefined
            },
            page: 1
        }));
    };

    const handleClearFilters = () => {
        setSearchTerm('');
        setFilters({});
        setDateRange({});
        setSearchParams({
            page: 1,
            limit: 10,
            sortBy: 'analysisDate',
            sortOrder: 'desc'
        });
    };

    const handleSort = (column: string) => {
        setSearchParams(prev => ({
            ...prev,
            sortBy: column as any,
            sortOrder: prev.sortBy === column && prev.sortOrder === 'asc' ? 'desc' : 'asc',
            page: 1
        }));
    };

    const handlePageChange = (newPage: number) => {
        setSearchParams(prev => ({ ...prev, page: newPage }));
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case 'COMPLETED':
                return <CheckCircle className='w-4 h-4 text-green-600' />;
            case 'PROCESSING':
                return <Clock className='w-4 h-4 text-yellow-600' />;
            case 'FAILED':
                return <AlertCircle className='w-4 h-4 text-red-600' />;
            default:
                return null;
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'COMPLETED':
                return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-900/50';
            case 'PROCESSING':
                return 'bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-900/50';
            case 'FAILED':
                return 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-900/50';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-900/20 dark:text-gray-400 dark:border-gray-900/50';
        }
    };

    const getRiskColor = (riskLevel: string) => {
        switch (riskLevel) {
            case 'LOW':
                return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
            case 'MEDIUM':
                return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
            case 'HIGH':
                return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
            case 'VERY_HIGH':
                return 'bg-red-200 text-red-900 dark:bg-red-900/40 dark:text-red-300';
            default:
                return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
        }
    };

    const handleExportAnalysis = async (analysisId: string, format: 'pdf' | 'excel') => {
        try {
            const blob = await treasuryService.exportAnalysis(analysisId, format);
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `analysis-${analysisId}.${format === 'pdf' ? 'pdf' : 'xlsx'}`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Export failed:', error);
        }
    };

    const handleDeleteAnalysis = async (analysisId: string) => {
        if (confirm('Are you sure you want to delete this analysis? This action cannot be undone.')) {
            try {
                await treasuryService.deleteAnalysis(analysisId);
                refetch();
            } catch (error) {
                console.error('Delete failed:', error);
            }
        }
    };

    const getSortIcon = (column: string) => {
        if (searchParams.sortBy !== column) return null;
        return searchParams.sortOrder === 'asc' ? (
            <SortAsc className='w-4 h-4 ml-1' />
        ) : (
            <SortDesc className='w-4 h-4 ml-1' />
        );
    };

    if (isLoading) {
        return (
            <div className='flex items-center justify-center min-h-[400px]'>
                <LoadingSpinner />
            </div>
        );
    }

    if (isError) {
        return (
            <div className='space-y-6'>
                <div className='space-y-2'>
                    <h1 className='text-3xl font-bold text-gray-900 dark:text-white'>Analysis History</h1>
                    <p className='text-gray-600 dark:text-gray-400'>
                        View and manage your historical bank statement analyses and recommendations.
                    </p>
                </div>
                <Alert variant='destructive'>
                    <AlertCircle className='h-4 w-4' />
                    <AlertDescription>
                        Failed to load analysis history.{' '}
                        {error instanceof Error ? error.message : 'Please try again later.'}
                    </AlertDescription>
                </Alert>
            </div>
        );
    }

    const analyses = historyData?.results || [];
    const totalPages = historyData?.totalPages || 1;
    const currentPage = historyData?.page || 1;
    const totalResults = historyData?.totalResults || 0;

    return (
        <div className='space-y-6'>
            {/* Header Section */}
            <div className='space-y-2'>
                <h1 className='text-3xl font-bold text-gray-900 dark:text-white'>Analysis History</h1>
                <p className='text-gray-600 dark:text-gray-400'>
                    View and manage your historical bank statement analyses and recommendations.
                </p>
            </div>

            {/* Search and Filters */}
            <Card>
                <CardHeader>
                    <div className='flex flex-col sm:flex-row gap-4'>
                        <div className='flex-1'>
                            <div className='relative'>
                                <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4' />
                                <Input
                                    placeholder='Search by filename or bank name...'
                                    value={searchTerm}
                                    onChange={e => setSearchTerm(e.target.value)}
                                    className='pl-10'
                                    onKeyDown={e => {
                                        if (e.key === 'Enter') {
                                            handleSearch();
                                        }
                                    }}
                                />
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <Button
                                variant='outline'
                                onClick={() => setShowFilters(!showFilters)}
                            >
                                <Filter className='w-4 h-4 mr-2' />
                                Filters
                            </Button>
                            <Button onClick={handleSearch}>Search</Button>
                        </div>
                    </div>
                </CardHeader>

                {showFilters && (
                    <CardContent className='border-t'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4'>
                            <div>
                                <label className='text-sm font-medium mb-2 block'>Status</label>
                                <Select
                                    value={filters.status || ''}
                                    onValueChange={value =>
                                        setFilters(prev => ({
                                            ...prev,
                                            status: (value as any) || undefined
                                        }))
                                    }
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder='All statuses' />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value=''>All statuses</SelectItem>
                                        <SelectItem value='COMPLETED'>Completed</SelectItem>
                                        <SelectItem value='PROCESSING'>Processing</SelectItem>
                                        <SelectItem value='FAILED'>Failed</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <label className='text-sm font-medium mb-2 block'>Risk Profile</label>
                                <Select
                                    value={filters.riskProfile || ''}
                                    onValueChange={value =>
                                        setFilters(prev => ({
                                            ...prev,
                                            riskProfile: (value as any) || undefined
                                        }))
                                    }
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder='All risk levels' />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value=''>All risk levels</SelectItem>
                                        <SelectItem value='LOW'>Low</SelectItem>
                                        <SelectItem value='MEDIUM'>Medium</SelectItem>
                                        <SelectItem value='HIGH'>High</SelectItem>
                                        <SelectItem value='VERY_HIGH'>Very High</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <label className='text-sm font-medium mb-2 block'>Date From</label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant='outline'
                                            className={cn(
                                                'w-full justify-start text-left font-normal',
                                                !dateRange.from && 'text-muted-foreground'
                                            )}
                                        >
                                            <CalendarIcon className='mr-2 h-4 w-4' />
                                            {dateRange.from ? format(dateRange.from, 'PPP') : 'Pick a date'}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent
                                        className='w-auto p-0'
                                        align='start'
                                    >
                                        <Calendar
                                            mode='single'
                                            selected={dateRange.from}
                                            onSelect={date => setDateRange(prev => ({ ...prev, from: date }))}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>

                            <div>
                                <label className='text-sm font-medium mb-2 block'>Date To</label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant='outline'
                                            className={cn(
                                                'w-full justify-start text-left font-normal',
                                                !dateRange.to && 'text-muted-foreground'
                                            )}
                                        >
                                            <CalendarIcon className='mr-2 h-4 w-4' />
                                            {dateRange.to ? format(dateRange.to, 'PPP') : 'Pick a date'}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent
                                        className='w-auto p-0'
                                        align='start'
                                    >
                                        <Calendar
                                            mode='single'
                                            selected={dateRange.to}
                                            onSelect={date => setDateRange(prev => ({ ...prev, to: date }))}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>

                        <div className='flex gap-2'>
                            <Button
                                variant='outline'
                                onClick={handleClearFilters}
                                size='sm'
                            >
                                Clear Filters
                            </Button>
                        </div>
                    </CardContent>
                )}
            </Card>

            {/* Results Summary */}
            {totalResults > 0 && (
                <div className='flex justify-between items-center text-sm text-gray-600 dark:text-gray-400'>
                    <span>
                        Showing {(currentPage - 1) * (searchParams.limit || 10) + 1}-
                        {Math.min(currentPage * (searchParams.limit || 10), totalResults)} of {totalResults} results
                    </span>
                </div>
            )}

            {/* Analysis History Table */}
            <Card>
                <CardContent className='p-0'>
                    {analyses.length > 0 ? (
                        <div className='overflow-x-auto'>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead
                                            className='cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800'
                                            onClick={() => handleSort('filename')}
                                        >
                                            <div className='flex items-center'>
                                                File Name
                                                {getSortIcon('filename')}
                                            </div>
                                        </TableHead>
                                        <TableHead
                                            className='cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800'
                                            onClick={() => handleSort('bankName')}
                                        >
                                            <div className='flex items-center'>
                                                Bank
                                                {getSortIcon('bankName')}
                                            </div>
                                        </TableHead>
                                        <TableHead
                                            className='cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800'
                                            onClick={() => handleSort('analysisDate')}
                                        >
                                            <div className='flex items-center'>
                                                Analysis Date
                                                {getSortIcon('analysisDate')}
                                            </div>
                                        </TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Risk Profile</TableHead>
                                        <TableHead
                                            className='cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800'
                                            onClick={() => handleSort('averageBalance')}
                                        >
                                            <div className='flex items-center'>
                                                Avg Balance
                                                {getSortIcon('averageBalance')}
                                            </div>
                                        </TableHead>
                                        <TableHead>Recommendations</TableHead>
                                        <TableHead>Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {analyses.map(analysis => (
                                        <TableRow key={analysis.id}>
                                            <TableCell>
                                                <div className='flex items-center space-x-2'>
                                                    <FileText className='w-4 h-4 text-blue-600' />
                                                    <span className='font-medium'>{analysis.filename}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className='flex items-center space-x-2'>
                                                    <Building2 className='w-4 h-4 text-gray-500' />
                                                    <span>{analysis.bankName}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>{format(new Date(analysis.analysisDate), 'PPP')}</TableCell>
                                            <TableCell>
                                                <div className='flex items-center space-x-2'>
                                                    {getStatusIcon(analysis.status)}
                                                    <Badge
                                                        variant='secondary'
                                                        className={getStatusColor(analysis.status)}
                                                    >
                                                        {analysis.status.toLowerCase()}
                                                    </Badge>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <Badge
                                                    variant='secondary'
                                                    className={getRiskColor(analysis.riskProfile)}
                                                >
                                                    {analysis.riskProfile}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                <div className='flex items-center space-x-1'>
                                                    <DollarSign className='w-3 h-3 text-green-600' />
                                                    <span className='font-medium'>
                                                        {analysis.averageBalance.toLocaleString()}
                                                    </span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className='space-y-1'>
                                                    <div className='flex items-center text-sm'>
                                                        <span className='font-medium'>
                                                            {analysis.recommendationCount}
                                                        </span>
                                                        <span className='text-gray-500 ml-1'>recommendations</span>
                                                    </div>
                                                    {analysis.topRecommendation && (
                                                        <div className='text-xs text-gray-600 dark:text-gray-400'>
                                                            <div className='flex items-center space-x-1'>
                                                                <TrendingUp className='w-3 h-3' />
                                                                <span>
                                                                    {analysis.topRecommendation.productName} (
                                                                    {analysis.topRecommendation.expectedReturn}%)
                                                                </span>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className='flex items-center space-x-2'>
                                                    {analysis.status === 'COMPLETED' && (
                                                        <>
                                                            <Button
                                                                variant='outline'
                                                                size='sm'
                                                                asChild
                                                            >
                                                                <Link to={`/dashboard/recommendations/${analysis.id}`}>
                                                                    <BarChart3 className='w-4 h-4 mr-1' />
                                                                    View
                                                                </Link>
                                                            </Button>
                                                            <Popover>
                                                                <PopoverTrigger asChild>
                                                                    <Button
                                                                        variant='outline'
                                                                        size='sm'
                                                                    >
                                                                        <Download className='w-4 h-4 mr-1' />
                                                                        Export
                                                                    </Button>
                                                                </PopoverTrigger>
                                                                <PopoverContent className='w-40'>
                                                                    <div className='space-y-2'>
                                                                        <Button
                                                                            variant='outline'
                                                                            size='sm'
                                                                            className='w-full'
                                                                            onClick={() =>
                                                                                handleExportAnalysis(analysis.id, 'pdf')
                                                                            }
                                                                        >
                                                                            Export PDF
                                                                        </Button>
                                                                        <Button
                                                                            variant='outline'
                                                                            size='sm'
                                                                            className='w-full'
                                                                            onClick={() =>
                                                                                handleExportAnalysis(
                                                                                    analysis.id,
                                                                                    'excel'
                                                                                )
                                                                            }
                                                                        >
                                                                            Export Excel
                                                                        </Button>
                                                                    </div>
                                                                </PopoverContent>
                                                            </Popover>
                                                        </>
                                                    )}
                                                    <Button
                                                        variant='outline'
                                                        size='sm'
                                                        onClick={() => handleDeleteAnalysis(analysis.id)}
                                                        className='text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20'
                                                    >
                                                        <Trash2 className='w-4 h-4' />
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    ) : (
                        <div className='text-center py-12'>
                            <FileText className='w-16 h-16 text-gray-400 mx-auto mb-4' />
                            <h3 className='text-lg font-medium text-gray-900 dark:text-white mb-2'>
                                No analyses found
                            </h3>
                            <p className='text-gray-600 dark:text-gray-400 mb-6'>
                                {searchTerm || Object.keys(filters).length > 0
                                    ? 'Try adjusting your search criteria or filters.'
                                    : 'Upload your first bank statement to get started with personalized recommendations.'}
                            </p>
                            {!searchTerm && Object.keys(filters).length === 0 && (
                                <Button asChild>
                                    <Link to='/dashboard/upload'>
                                        <FileText className='w-4 h-4 mr-2' />
                                        Upload Statement
                                    </Link>
                                </Button>
                            )}
                        </div>
                    )}
                </CardContent>
            </Card>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className='flex items-center justify-between'>
                    <Button
                        variant='outline'
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage <= 1}
                    >
                        <ChevronLeft className='w-4 h-4 mr-2' />
                        Previous
                    </Button>

                    <div className='flex items-center space-x-2'>
                        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                            let pageNumber;
                            if (totalPages <= 5) {
                                pageNumber = i + 1;
                            } else if (currentPage <= 3) {
                                pageNumber = i + 1;
                            } else if (currentPage >= totalPages - 2) {
                                pageNumber = totalPages - 4 + i;
                            } else {
                                pageNumber = currentPage - 2 + i;
                            }

                            return (
                                <Button
                                    key={pageNumber}
                                    variant={currentPage === pageNumber ? 'default' : 'outline'}
                                    size='sm'
                                    onClick={() => handlePageChange(pageNumber)}
                                >
                                    {pageNumber}
                                </Button>
                            );
                        })}
                    </div>

                    <Button
                        variant='outline'
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage >= totalPages}
                    >
                        Next
                        <ChevronRight className='w-4 h-4 ml-2' />
                    </Button>
                </div>
            )}
        </div>
    );
};
