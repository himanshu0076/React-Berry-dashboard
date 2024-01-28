// third-party
import { FormattedMessage } from 'react-intl';

// assets
import {
    IconBug,
    IconLayoutDashboard,
    IconUsers,
    IconUserCircle,
    IconChecklist,
    IconFileAnalytics,
    IconReceipt,
    IconShoppingCartDiscount,
    IconTicket,
    IconQuestionMark,
    IconSettings,
    IconBulb
} from '@tabler/icons';

// constant
const icons = {
    IconBug,
    IconLayoutDashboard,
    IconUsers,
    IconUserCircle,
    IconChecklist,
    IconFileAnalytics,
    IconReceipt,
    IconShoppingCartDiscount,
    IconTicket,
    IconQuestionMark,
    IconSettings,
    IconBulb
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
    id: 'pages',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: <FormattedMessage id="dashboard" />,
            type: 'item',
            icon: icons.IconLayoutDashboard,
            url: '/dashboard'
        },
        {
            id: 'profile',
            title: <FormattedMessage id="profile" />,
            type: 'item',
            icon: icons.IconUserCircle,
            url: '/profile'
        },
        {
            id: 'users',
            title: <FormattedMessage id="users" />,
            type: 'item',
            icon: icons.IconUsers,
            url: '/users'
        },
        {
            id: 'customers',
            title: <FormattedMessage id="customers" />,
            type: 'item',
            icon: icons.IconUsers,
            url: '/customers'
        },
        {
            id: 'subscription',
            title: <FormattedMessage id="subscription" />,
            type: 'item',
            icon: icons.IconChecklist,
            url: '/subscription'
        },
        {
            id: 'reports',
            title: <FormattedMessage id="reports" />,
            type: 'item',
            icon: icons.IconFileAnalytics,
            url: '/reports'
        },
        {
            id: 'transactions',
            title: <FormattedMessage id="transactions" />,
            type: 'item',
            icon: icons.IconReceipt,
            url: '/transactions'
        },
        {
            id: 'offers',
            title: <FormattedMessage id="offers" />,
            type: 'item',
            icon: icons.IconShoppingCartDiscount,
            url: '/offers'
        },
        {
            id: 'support-tickets',
            title: <FormattedMessage id="support-tickets" />,
            type: 'item',
            icon: icons.IconTicket,
            url: '/support-tickets'
        },
        {
            id: 'faqs',
            title: <FormattedMessage id="faqs" />,
            type: 'item',
            icon: icons.IconQuestionMark,
            url: '/faqs'
        },
        {
            id: 'knowledge-base',
            title: <FormattedMessage id="knowledge-base" />,
            type: 'item',
            icon: icons.IconBulb,
            url: '/knowledge-base'
        },
        {
            id: 'settings',
            title: <FormattedMessage id="settings" />,
            type: 'item',
            icon: icons.IconSettings,
            url: '/settings'
        }
    ]
};

export default pages;
