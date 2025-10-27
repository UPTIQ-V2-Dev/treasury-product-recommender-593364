# Treasury Product Recommender App - Frontend Implementation Plan

## Tech Stack

- React 19 with Vite
- Shadcn/UI Components
- Tailwind CSS v4
- TypeScript
- React Router DOM
- React Hook Form + Zod validation
- TanStack Query for API state management
- Axios for API calls

## Application Flow

User Journey: Landing → Login/Signup → Dashboard → Upload Statement → Analysis → Recommendations → Profile

## Page-by-Page Implementation Plan

### 1. Landing Page (`/`)

**Components:**

- `LandingPage` - Main page component
- `HeroSection` - Hero banner with CTA
- `FeatureSection` - App features overview
- `TestimonialSection` - Client testimonials

**Utils/Hooks:**

- `useTheme` - Theme switching
- `useScrollAnimation` - Scroll animations

**API Endpoints:**

- None required

### 2. Authentication Pages (`/auth/*`)

#### Login Page (`/auth/login`)

**Components:**

- `LoginForm` - Login form with validation
- `SocialLogin` - Optional social login buttons
- `ForgotPasswordLink` - Link to password reset

**Utils/Hooks:**

- `useAuth` - Authentication state management
- `useLoginForm` - Form state and validation

**Types:**

- `LoginFormData` - Login form schema
- `AuthResponse` - API response type

**API Endpoints:**

- `POST /api/auth/login` - User authentication

#### Signup Page (`/auth/signup`)

**Components:**

- `SignupForm` - Multi-step registration form
- `ClientTypeSelector` - Individual/Corporate selection
- `TermsAgreement` - Terms and conditions checkbox

**Utils/Hooks:**

- `useSignupForm` - Multi-step form management
- `useClientTypeValidation` - Client type specific validation

**Types:**

- `SignupFormData` - Registration form schema
- `ClientType` - Client type enum

**API Endpoints:**

- `POST /api/auth/signup` - User registration
- `POST /api/auth/verify-email` - Email verification

#### Password Reset (`/auth/reset-password`)

**Components:**

- `PasswordResetForm` - Password reset request
- `NewPasswordForm` - Set new password

**API Endpoints:**

- `POST /api/auth/reset-password` - Password reset request
- `POST /api/auth/confirm-reset` - Password reset confirmation

### 3. Dashboard Layout

**Components:**

- `AppLayout` - Main application layout
- `AppSidebar` - Navigation sidebar
- `AppHeader` - Top navigation bar
- `AppBreadcrumb` - Breadcrumb navigation
- `UserMenu` - User profile dropdown

**Utils/Hooks:**

- `useSidebar` - Sidebar state management
- `useNavigation` - Route navigation helpers

### 4. Dashboard Home (`/dashboard`)

**Components:**

- `DashboardOverview` - Main dashboard view
- `QuickActions` - Upload statement button
- `RecentAnalyses` - Previous analyses list
- `AccountSummary` - User account summary
- `NotificationBanner` - Important notifications

**Utils/Hooks:**

- `useDashboardData` - Fetch dashboard data
- `useNotifications` - Notification management

**Types:**

- `DashboardData` - Dashboard overview data
- `AnalysisHistory` - Previous analyses type

**API Endpoints:**

- `GET /api/dashboard/overview` - Dashboard data
- `GET /api/analyses/recent` - Recent analyses

### 5. Bank Statement Upload (`/dashboard/upload`)

**Components:**

- `StatementUpload` - File upload component
- `FileDropzone` - Drag and drop zone
- `FilePreview` - Preview uploaded files
- `UploadProgress` - Upload progress indicator
- `FormatGuide` - Supported formats info

**Utils/Hooks:**

- `useFileUpload` - File upload management
- `useFileValidation` - File format validation
- `useUploadProgress` - Upload progress tracking

**Types:**

- `UploadedFile` - File metadata type
- `UploadProgress` - Progress tracking type
- `SupportedFormat` - File format enum

**API Endpoints:**

- `POST /api/statements/upload` - Upload bank statement
- `GET /api/statements/formats` - Supported formats

### 6. Analysis Processing (`/dashboard/analysis/:id`)

**Components:**

- `AnalysisProcessor` - Processing status page
- `AnalysisProgress` - Progress indicator
- `ProcessingSteps` - Step-by-step progress
- `ErrorDisplay` - Error handling

**Utils/Hooks:**

- `useAnalysisStatus` - Real-time status updates
- `usePolling` - Status polling utility

**Types:**

- `AnalysisStatus` - Processing status enum
- `ProcessingStep` - Analysis steps type

**API Endpoints:**

- `GET /api/analysis/:id/status` - Analysis status
- `POST /api/analysis/:id/retry` - Retry failed analysis

### 7. Recommendations Page (`/dashboard/recommendations/:id`)

**Components:**

- `RecommendationsView` - Main recommendations display
- `ProductCard` - Individual product recommendation
- `ProductComparison` - Side-by-side comparison
- `RiskAssessment` - Risk level indicator
- `ActionButtons` - Contact/Apply buttons
- `FinancialInsights` - Analysis insights

**Utils/Hooks:**

- `useRecommendations` - Fetch recommendations
- `useProductComparison` - Compare products
- `useRiskCalculation` - Risk assessment logic

**Types:**

- `TreasuryProduct` - Product details type
- `Recommendation` - Recommendation data
- `RiskLevel` - Risk assessment enum
- `FinancialInsight` - Analysis insight type

**API Endpoints:**

- `GET /api/recommendations/:id` - Get recommendations
- `POST /api/recommendations/:id/contact` - Contact for product
- `GET /api/products/:id/details` - Product details

### 8. Analysis History (`/dashboard/history`)

**Components:**

- `AnalysisHistory` - Historical analyses list
- `AnalysisCard` - Individual analysis summary
- `FilterControls` - Date/status filters
- `SearchBar` - Search functionality
- `ExportButton` - Export to PDF/Excel

**Utils/Hooks:**

- `useAnalysisHistory` - Fetch analysis history
- `useHistoryFilters` - Filter functionality
- `useExport` - Export utilities

**Types:**

- `AnalysisHistoryItem` - History item type
- `HistoryFilter` - Filter options type

**API Endpoints:**

- `GET /api/analyses/history` - Analysis history
- `GET /api/analyses/:id/export` - Export analysis

### 9. User Profile (`/dashboard/profile`)

**Components:**

- `ProfileView` - Profile information display
- `ProfileEditForm` - Profile editing form
- `PasswordChangeForm` - Password change
- `NotificationSettings` - Notification preferences
- `AccountSettings` - Account configuration

**Utils/Hooks:**

- `useProfile` - Profile data management
- `useProfileUpdate` - Profile update logic
- `useNotificationPrefs` - Notification settings

**Types:**

- `UserProfile` - Complete profile type
- `ProfileUpdateData` - Update payload type
- `NotificationPreference` - Notification settings

**API Endpoints:**

- `GET /api/user/profile` - Get profile
- `PUT /api/user/profile` - Update profile
- `POST /api/user/change-password` - Change password

### 10. Settings (`/dashboard/settings`)

**Components:**

- `SettingsPage` - Settings overview
- `AccountSettings` - Account configuration
- `SecuritySettings` - Security preferences
- `IntegrationSettings` - Bank integrations
- `ExportSettings` - Data export preferences

**API Endpoints:**

- `GET /api/settings` - Get user settings
- `PUT /api/settings` - Update settings

## Common Components & Utilities

### Shared Components

- `LoadingSpinner` - Loading indicator
- `ErrorBoundary` - Error boundary wrapper
- `ConfirmDialog` - Confirmation dialogs
- `Toast` - Toast notifications (Sonner)
- `DataTable` - Reusable data tables
- `EmptyState` - Empty state displays
- `ProtectedRoute` - Route protection

### Common Hooks

- `useAuth` - Global authentication state
- `useToast` - Toast notification management
- `useLocalStorage` - Local storage utilities
- `useDebounce` - Debounced values
- `useAsync` - Async operation handling

### Utilities

- `api.ts` - Axios configuration and interceptors
- `constants.ts` - App constants and configs
- `utils.ts` - General utility functions
- `validation.ts` - Zod schemas for forms
- `formatting.ts` - Data formatting utilities
- `download.ts` - File download utilities

### Types (Global)

- `user.ts` - User-related types
- `api.ts` - API response types
- `common.ts` - Common interface types
- `treasury.ts` - Treasury product types

## Route Structure

```
/                           - Landing page
/auth/login                 - Login
/auth/signup                - Registration
/auth/reset-password        - Password reset
/dashboard                  - Dashboard home
/dashboard/upload           - Upload statement
/dashboard/analysis/:id     - Analysis processing
/dashboard/recommendations/:id - View recommendations
/dashboard/history          - Analysis history
/dashboard/profile          - User profile
/dashboard/settings         - User settings
```

## Implementation Priority

1. **Phase 1:** Authentication system (login/signup)
2. **Phase 2:** Dashboard layout and navigation
3. **Phase 3:** File upload and processing
4. **Phase 4:** Analysis and recommendations display
5. **Phase 5:** User profile and settings
6. **Phase 6:** Polish and optimization
