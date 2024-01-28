import React from 'react';
import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Grid, Typography, useMediaQuery, TextField, MenuItem } from '@mui/material';

// third party
import Chart from 'react-apexcharts';

// project imports
import MainCard from 'ui-component/cards/MainCard';

const status = [
    {
        value: 'today',
        label: 'Today'
    },
    {
        value: 'month',
        label: 'This Month'
    },
    {
        value: 'year',
        label: 'This Year'
    }
];

// ===========================|| CUSTOMERS CHART CARD ||=========================== //

const CustomersChart = ({ chartData }) => {
    const theme = useTheme();
    const [value, setValue] = React.useState('today');
    const matchDownMd = useMediaQuery(theme.breakpoints.down('md'));
    const matchDownXs = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <MainCard
            title={<Typography variant="h4">Total Customers</Typography>}
            secondary={
                <TextField
                    id="standard-select-currency"
                    select
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    style={{ width: '120px' }}
                >
                    {status.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            }
        >
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={8}>
                            <Chart {...chartData} />
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <Grid item container justifyContent="space-between" direction="column" spacing={2}>
                                <Grid item sm={4}>
                                    <Grid container direction="row" justifyContent="space-between" align-items="center">
                                        <Typography variant="h5">Country 1</Typography>
                                        <Typography variant="subtitle1" style={{ color: theme.palette.secondary.dark }}>
                                            + 16.85%
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item sm={4}>
                                    <Grid container direction="row" justifyContent="space-between" align-items="center">
                                        <Typography variant="h5">Country 2</Typography>
                                        <Box sx={{ color: theme.palette.success.dark }}>
                                            <Typography variant="subtitle1" color="inherit">
                                                +45.36%
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Grid item sm={4}>
                                    <Grid container direction="row" justifyContent="space-between" align-items="center">
                                        <Typography variant="h5">Country 3</Typography>
                                        <Typography variant="subtitle1" style={{ color: theme.palette.warning.dark }}>
                                            - 50.69%
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item sm={4}>
                                    <Grid container direction="row" justifyContent="space-between" align-items="center">
                                        <Typography variant="h5">Country 4</Typography>
                                        <Typography variant="subtitle1" style={{ color: theme.palette.error.main }}>
                                            - 50.69%
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item sm={4}>
                                    <Grid container direction="row" justifyContent="space-between" align-items="center">
                                        <Typography variant="h5">Country 5</Typography>
                                        <Typography variant="subtitle1" style={{ color: theme.palette.wallet.dark }}>
                                            - 50.69%
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </MainCard>
    );
};

CustomersChart.propTypes = {
    chartData: PropTypes.object
};

export default CustomersChart;
