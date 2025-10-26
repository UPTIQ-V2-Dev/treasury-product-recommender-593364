import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from '@/pages/LoginPage';
import { SignupPage } from '@/pages/SignupPage';
import { DashboardPage } from '@/pages/DashboardPage';
import { ComingSoonPage } from '@/pages/ComingSoonPage';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { AppLayout } from '@/components/layout/AppLayout';

export const App = () => {
    return (
        <Routes>
            {/* Public routes */}
            <Route
                path='/'
                element={
                    <Navigate
                        to='/auth/login'
                        replace
                    />
                }
            />
            <Route
                path='/auth/login'
                element={<LoginPage />}
            />
            <Route
                path='/auth/signup'
                element={<SignupPage />}
            />

            {/* Protected routes */}
            <Route
                path='/dashboard'
                element={
                    <ProtectedRoute>
                        <AppLayout>
                            <DashboardPage />
                        </AppLayout>
                    </ProtectedRoute>
                }
            />

            {/* Coming soon pages */}
            <Route
                path='/dashboard/upload'
                element={
                    <ProtectedRoute>
                        <AppLayout>
                            <ComingSoonPage
                                title='Upload Statement'
                                description='Bank statement upload and analysis feature is coming soon.'
                            />
                        </AppLayout>
                    </ProtectedRoute>
                }
            />
            <Route
                path='/dashboard/history'
                element={
                    <ProtectedRoute>
                        <AppLayout>
                            <ComingSoonPage
                                title='Analysis History'
                                description='View your past analyses and recommendations here.'
                            />
                        </AppLayout>
                    </ProtectedRoute>
                }
            />
            <Route
                path='/dashboard/profile'
                element={
                    <ProtectedRoute>
                        <AppLayout>
                            <ComingSoonPage
                                title='Profile'
                                description='Manage your profile settings and preferences.'
                            />
                        </AppLayout>
                    </ProtectedRoute>
                }
            />
            <Route
                path='/dashboard/settings'
                element={
                    <ProtectedRoute>
                        <AppLayout>
                            <ComingSoonPage
                                title='Settings'
                                description='Configure your account settings and preferences.'
                            />
                        </AppLayout>
                    </ProtectedRoute>
                }
            />

            {/* Catch all route */}
            <Route
                path='*'
                element={
                    <Navigate
                        to='/dashboard'
                        replace
                    />
                }
            />
        </Routes>
    );
};
