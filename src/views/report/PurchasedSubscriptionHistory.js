import React from 'react';

import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Grid, TextField } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { useTheme } from '@mui/material/styles';

// ==========================|| PURCHASED SUBSCRIPTION HISTORY || =================
const PurchasedSubscriptionHistory = () => {
    const theme = useTheme();
    return (
        <MainCard
            content={false}
            title={<Typography variant="h4">Purchased Subscriptions</Typography>}
            secondary={
                <Grid container spacing={1} alignItems="center">
                    <Grid item>
                        <TextField
                            label="Start date*"
                            id="startDate"
                            name="startDate"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            value=""
                            onChange=""
                            error=""
                            helperText=""
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label="End date*"
                            id="endDate"
                            name="endDate"
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            value=""
                            onChange=""
                            error=""
                            helperText=""
                        />
                    </Grid>
                    <Grid item>
                        <Button variant="contained" size="large">
                            View All
                        </Button>
                    </Grid>
                </Grid>
            }
        >
            {/* table */}
            <TableContainer>
                <Table sx={{ minWidth: 350 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ pl: 3 }}>#</TableCell>
                            <TableCell align="center">Date</TableCell>
                            <TableCell align="center">Order ID</TableCell>
                            <TableCell align="center">Customer</TableCell>
                            <TableCell align="center">Package</TableCell>
                            <TableCell align="center" sx={{ pr: 3 }}>
                                Amount
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow hover>
                            <TableCell sx={{ pl: 3 }} component="th" scope="row">
                                1
                            </TableCell>
                            <TableCell align="center">18-03-22</TableCell>
                            <TableCell align="center">11224110</TableCell>
                            <TableCell align="center">John Doe</TableCell>
                            <TableCell align="center">Lorem Ipsum</TableCell>
                            <TableCell sx={{ pr: 3 }} align="center">
                                $125
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </MainCard>
    );
};

export default PurchasedSubscriptionHistory;
