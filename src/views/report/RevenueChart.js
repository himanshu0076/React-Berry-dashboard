import React from 'react';
import PropTypes from 'prop-types';

// material-ui
import { Grid, Typography, TextField, MenuItem } from '@mui/material';

// third-party
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

// =========================|| REVENUE CHART CARD ||========================= //

const RevenueChart = ({ chartData }) => {
    const [value, setValue] = React.useState('today');
    return (
        <MainCard
            title={<Typography variant="h4">Revenue Report</Typography>}
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
            <Grid container direction="column" spacing={1}>
                <Grid item>
                    <Chart {...chartData} />
                </Grid>
            </Grid>
        </MainCard>
    );
};

RevenueChart.propTypes = {
    chartData: PropTypes.object
};

export default RevenueChart;
