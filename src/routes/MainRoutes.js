import { lazy } from 'react';
// project imports
import AuthGuard from 'utils/route-guard/AuthGuard';
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import UpdateProfile from 'views/profile/UpdateProfile';
import UpdateSecurity from 'views/profile/UpdateSecurity';

// dashboard routing
const Dashboard = Loadable(lazy(() => import('views/dashboard')));

// Profile Routing
const AppProfile = Loadable(lazy(() => import('views/profile/Profile')));

// Customer Routing
const AppCustomerList = Loadable(lazy(() => import('views/customer/CustomerList')));
const AppUpdateCustomer = Loadable(lazy(() => import('views/customer/UpdateCustomer')));

// User Routing
const AppUserList = Loadable(lazy(() => import('views/user/UserList')));
const AppUpdateUser = Loadable(lazy(() => import('views/user/UpdateUser')));

// Subscription Routing
const AppSubscriptionList = Loadable(lazy(() => import('views/subscription/SubscriptionList')));
const AppUpdateSubscriptionPackage = Loadable(lazy(() => import('views/subscription/UpdateSubscriptionPackage')));

// Reports Routing
const AppReports = Loadable(lazy(() => import('views/report/Reports')));

// Transactions Routing
const AppTransactionsList = Loadable(lazy(() => import('views/transaction/TransactionList')));

// Offers Routing
const AppOfferList = Loadable(lazy(() => import('views/offer/OffersList')));
const AppUpdateOffer = Loadable(lazy(() => import('views/offer/UpdateOffer')));

// Tickets Routing
const AppTickets = Loadable(lazy(() => import('views/ticket/SupportTickets')));

// FAQs Routing
const AppFaqs = Loadable(lazy(() => import('views/faqs/Faqs')));
const AppFaqUpdate = Loadable(lazy(() => import('views/faqs/UpdateFaq')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: (
        <AuthGuard>
            <MainLayout />
        </AuthGuard>
    ),
    children: [
        {
            path: '/',
            element: <Dashboard />
        },
        {
            path: '/dashboard',
            element: <Dashboard />
        },
        {
            path: '/customers',
            element: <AppCustomerList />
        },
        {
            path: '/customers/add',
            element: <AppUpdateCustomer pageBehaviour="Add" />
        },
        {
            path: '/customers/:CustomerID/edit',
            element: <AppUpdateCustomer pageBehaviour="Edit" />
        },
        {
            path: '/users',
            element: <AppUserList />
        },
        {
            path: '/users/add',
            element: <AppUpdateUser pageBehaviour="Add" />
        },
        {
            path: '/users/:UserID/edit',
            element: <AppUpdateUser pageBehaviour="Edit" />
        },
        {
            path: '/profile',
            element: <AppProfile />,
            children: [
                {
                    path: '/profile',
                    element: <UpdateProfile />
                },
                {
                    path: '/profile/update-profile',
                    element: <UpdateProfile />
                },
                {
                    path: '/profile/update-security',
                    element: <UpdateSecurity />
                }
            ]
        },
        {
            path: '/subscription',
            element: <AppSubscriptionList />
        },
        {
            path: '/subscription/update-subscription-package/:PackageID',
            element: <AppUpdateSubscriptionPackage />
        },
        {
            path: '/reports',
            element: <AppReports />
        },
        {
            path: '/transactions',
            element: <AppTransactionsList />
        },
        {
            path: '/offers',
            element: <AppOfferList />
        },
        {
            path: '/offers/update-offer/:OfferID',
            element: <AppUpdateOffer />
        },
        {
            path: '/support-tickets',
            element: <AppTickets />
        },
        {
            path: '/faqs',
            element: <AppFaqs />
        },
        {
            path: '/faqs/update-faq/:FaqID',
            element: <AppFaqUpdate />
        }
    ]
};

export default MainRoutes;
