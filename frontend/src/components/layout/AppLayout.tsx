import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import { AppSidebar } from '@/components/layout/AppSidebar';
import { useLocation } from 'react-router-dom';

interface AppLayoutProps {
    children: React.ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
    const location = useLocation();

    const getBreadcrumbs = () => {
        const path = location.pathname;
        const segments = path.split('/').filter(Boolean);

        const breadcrumbs = [{ label: 'Dashboard', href: '/dashboard' }];

        if (segments.length > 1) {
            const currentPage = segments[segments.length - 1];
            switch (currentPage) {
                case 'upload':
                    breadcrumbs.push({ label: 'Upload Statement', href: '/dashboard/upload' });
                    break;
                case 'history':
                    breadcrumbs.push({ label: 'Analysis History', href: '/dashboard/history' });
                    break;
                case 'profile':
                    breadcrumbs.push({ label: 'Profile', href: '/dashboard/profile' });
                    break;
                case 'settings':
                    breadcrumbs.push({ label: 'Settings', href: '/dashboard/settings' });
                    break;
                default:
                    if (segments[1] === 'recommendations') {
                        breadcrumbs.push({ label: 'Recommendations', href: path });
                    } else if (segments[1] === 'analysis') {
                        breadcrumbs.push({ label: 'Analysis', href: path });
                    }
                    break;
            }
        }

        return breadcrumbs;
    };

    const breadcrumbs = getBreadcrumbs();

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className='flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12'>
                    <div className='flex items-center gap-2 px-4'>
                        <SidebarTrigger className='-ml-1' />
                        <Separator
                            orientation='vertical'
                            className='mr-2 h-4'
                        />
                        <Breadcrumb>
                            <BreadcrumbList>
                                {breadcrumbs.map((breadcrumb, index) => (
                                    <BreadcrumbItem key={breadcrumb.href}>
                                        {index === breadcrumbs.length - 1 ? (
                                            <BreadcrumbPage>{breadcrumb.label}</BreadcrumbPage>
                                        ) : (
                                            <>
                                                <BreadcrumbLink href={breadcrumb.href}>
                                                    {breadcrumb.label}
                                                </BreadcrumbLink>
                                                <BreadcrumbSeparator />
                                            </>
                                        )}
                                    </BreadcrumbItem>
                                ))}
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
                    <main className='flex-1'>{children}</main>
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
};
