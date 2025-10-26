import { Home, Upload, History, User, Settings, LogOut, Building2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useAuth } from '@/hooks/use-auth';

// Menu items.
const menuItems = [
    {
        title: 'Dashboard',
        url: '/dashboard',
        icon: Home
    },
    {
        title: 'Upload Statement',
        url: '/dashboard/upload',
        icon: Upload
    },
    {
        title: 'Analysis History',
        url: '/dashboard/history',
        icon: History
    }
];

const accountItems = [
    {
        title: 'Profile',
        url: '/dashboard/profile',
        icon: User
    },
    {
        title: 'Settings',
        url: '/dashboard/settings',
        icon: Settings
    }
];

export const AppSidebar = () => {
    const location = useLocation();
    const { user, logout } = useAuth();

    const getInitials = (name?: string, email?: string) => {
        if (name) {
            return name
                .split(' ')
                .map(n => n[0])
                .join('')
                .toUpperCase()
                .slice(0, 2);
        }
        if (email) {
            return email.slice(0, 2).toUpperCase();
        }
        return 'U';
    };

    return (
        <Sidebar variant='inset'>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <Link to='/dashboard'>
                            <SidebarMenuButton size='lg'>
                                <div className='flex aspect-square size-8 items-center justify-center rounded-lg bg-blue-600 text-white'>
                                    <Building2 className='size-4' />
                                </div>
                                <div className='grid flex-1 text-left text-sm leading-tight'>
                                    <span className='truncate font-semibold'>Treasury Pro</span>
                                    <span className='truncate text-xs text-muted-foreground'>
                                        Smart Treasury Solutions
                                    </span>
                                </div>
                            </SidebarMenuButton>
                        </Link>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Treasury Tools</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems.map(item => (
                                <SidebarMenuItem key={item.title}>
                                    <Link to={item.url}>
                                        <SidebarMenuButton isActive={location.pathname === item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </SidebarMenuButton>
                                    </Link>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Account</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {accountItems.map(item => (
                                <SidebarMenuItem key={item.title}>
                                    <Link to={item.url}>
                                        <SidebarMenuButton isActive={location.pathname === item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </SidebarMenuButton>
                                    </Link>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <div className='flex items-center gap-2 px-2 py-1.5'>
                            <Avatar className='h-8 w-8'>
                                <AvatarFallback>{getInitials(user?.name, user?.email)}</AvatarFallback>
                            </Avatar>
                            <div className='grid flex-1 text-left text-sm leading-tight'>
                                <span className='truncate font-semibold'>{user?.name || 'User'}</span>
                                <span className='truncate text-xs text-muted-foreground'>{user?.email}</span>
                            </div>
                            <Button
                                variant='ghost'
                                size='icon'
                                onClick={() => logout()}
                                className='ml-auto h-7 w-7'
                                title='Sign out'
                            >
                                <LogOut className='h-4 w-4' />
                            </Button>
                        </div>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
};
