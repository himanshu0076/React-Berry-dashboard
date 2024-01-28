import { useEffect, useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';
import AccountBalanceWalletTwoToneIcon from '@mui/icons-material/AccountBalanceWalletTwoTone';
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import InventoryTwoToneIcon from '@mui/icons-material/InventoryTwoTone';

// project imports
import { gridSpacing } from 'store/constant';
import RevenueCard from 'ui-component/cards/RevenueCard';
import RevenueChart from './RevenueChart';
import SubscriptionChart from './SubscriptionChart';
import CustomersChart from './CustomersChart';

// chart data
import revenueChartData from './chart-data/revenue-chart-report-data';
import subscriptionChartData from './chart-data/subscription-chart-report-data';
import customersChartData from './chart-data/customer-chart-data';
import PurchasedSubscriptionHistory from './PurchasedSubscriptionHistory';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Reports = () => {
    const theme = useTheme();
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} lg={4} md={12}>
                        <RevenueCard
                            primary="Total Revenue"
                            secondary="$42,562"
                            content="$50,032 Last Month"
                            iconPrimary={AccountBalanceWalletTwoToneIcon}
                            color={theme.palette.primary.dark}
                        />
                    </Grid>
                    <Grid item xs={12} lg={4} sm={6}>
                        <RevenueCard
                            primary="Total Subscription Packages"
                            secondary="486"
                            content="20% Increase"
                            iconPrimary={InventoryTwoToneIcon}
                            color={theme.palette.secondary.dark}
                        />
                    </Grid>
                    <Grid item xs={12} lg={4} sm={6}>
                        <RevenueCard
                            primary="Total Customers"
                            secondary="1641"
                            content="$1,055 Revenue Generated"
                            iconPrimary={PersonOutlineTwoToneIcon}
                            color={theme.palette.success.dark}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={gridSpacing} sx={{ mt: 1 }}>
                    <Grid item xs={12} md={6} lg={6}>
                        <RevenueChart chartData={revenueChartData} />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <SubscriptionChart chartData={subscriptionChartData} />
                    </Grid>
                </Grid>
                <Grid container spacing={gridSpacing} sx={{ mt: 1 }}>
                    <Grid item xs={12}>
                        <CustomersChart chartData={customersChartData} />
                    </Grid>
                </Grid>
                <Grid container spacing={gridSpacing} sx={{ mt: 1 }}>
                    <Grid item xs={12}>
                        <PurchasedSubscriptionHistory />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Reports;
