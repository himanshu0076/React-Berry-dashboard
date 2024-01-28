import React from 'react';

import {
    CardContent,
    InputAdornment,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Grid,
    TextField
} from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import { useTheme } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import pdfIcon from '../../assets/images/pdfIcon.png';
import excelIcon from '../../assets/images/excelIcon.png';

// ========================== || TRANSACTION LIST || ==========================

const TransactionList = () => {
    const theme = useTheme();
    return (
        <MainCard
            content={false}
            title={<Typography variant="h3">Transaction List</Typography>}
            secondary={
                <Grid container spacing={1} alignItems="center">
                    <Grid item>
                        <img src={pdfIcon} alt="PDF Icon" height="40px" />
                    </Grid>
                    <Grid item>
                        <img src={excelIcon} alt="PDF Icon" height="40px" />
                    </Grid>
                </Grid>
            }
        >
            <CardContent>
                <Grid container justifyContent="space-between" alignItems="center" spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon fontSize="small" />
                                    </InputAdornment>
                                )
                            }}
                            onChange=""
                            placeholder="Search Transaction"
                            value=""
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Grid container spacing={2} justifyContent="flex-end">
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
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
            {/* table */}
            <TableContainer>
                <Table sx={{ minWidth: 350 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ pl: 3 }}>#</TableCell>
                            <TableCell align="center">Transaction ID</TableCell>
                            <TableCell align="center">Customer</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Package</TableCell>
                            <TableCell align="center">Payment Mode</TableCell>
                            <TableCell align="center">Amount Paid</TableCell>
                            <TableCell align="center">Subscription Date</TableCell>
                            <TableCell align="center" sx={{ pr: 3 }}>
                                Expiry Date
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow hover>
                            <TableCell sx={{ pl: 3 }} component="th" scope="row">
                                1
                            </TableCell>
                            <TableCell align="center">5562962</TableCell>
                            <TableCell align="center">John Doe</TableCell>
                            <TableCell align="center">Johndoe@mail.com</TableCell>
                            <TableCell align="center">Lorem Ipsum</TableCell>
                            <TableCell align="center">Paypal</TableCell>
                            <TableCell align="center">$125</TableCell>
                            <TableCell align="center">19-07-22</TableCell>
                            <TableCell sx={{ pr: 3 }} align="center">
                                13-12-22
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </MainCard>
    );
};

export default TransactionList;
