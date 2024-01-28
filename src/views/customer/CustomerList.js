import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// material-ui
import { useTheme } from '@mui/material/styles';
import {
    CardContent,
    Grid,
    IconButton,
    InputAdornment,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TextField,
    TableSortLabel,
    Tooltip,
    Fab,
    Menu,
    Stack,
    Chip,
    Typography,
    Button,
    FormControlLabel,
    Switch
} from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { IconAdjustmentsHorizontal } from '@tabler/icons';

// assets
import SearchIcon from '@mui/icons-material/Search';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import useListing from 'hooks/useListing';
// ==============================|| CUSTOMER LIST ||============================== //

const CustomerList = () => {
    const theme = useTheme();
    const listing = useListing('/api/customers');

    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event?.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const customMap = (arr, Component) =>
        arr.map((data, index) => (
            <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                <TableCell>{index + 1}</TableCell>
                {Component(data)}
                <TableCell>
                    <FormControlLabel
                        control={<Switch checked={data.status === 'Active'} onChange={(e) => listing.changeStatus(e, data.id)} />}
                    />
                </TableCell>
                <TableCell align="center">
                    <IconButton size="large" color="primary" component={Link} to={`/customers/${data.id}/edit`}>
                        <EditTwoToneIcon />
                    </IconButton>
                    <IconButton size="large" color="primary" component={Link} to={`/customers/${data.id}`}>
                        <VisibilityTwoToneIcon />
                    </IconButton>
                    <IconButton size="large" color="error" onClick={(e) => listing.deleteRow(e, data.id)}>
                        <DeleteTwoToneIcon />
                    </IconButton>
                </TableCell>
            </TableRow>
        ));

    return (
        <MainCard
            title={<Typography variant="h3">Customer List</Typography>}
            content={false}
            secondary={
                <Button variant="contained" component={Link} to="/customers/update-customer/1">
                    Add Customer
                </Button>
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
                            onChange={(e) => listing.setSearchStr(e.target.value)}
                            placeholder="Search Customer"
                            value={listing.searchStr}
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ textAlign: 'right' }}>
                        <Tooltip title="Filter" onClick={handleClick}>
                            <Fab color="primary" size="small" sx={{ boxShadow: 'none', ml: 1, width: 32, height: 32, minHeight: 32 }}>
                                <IconAdjustmentsHorizontal fontSize="small" />
                            </Fab>
                        </Tooltip>
                        <Menu
                            id="menu-user-details-card"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            variant="selectedMenu"
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right'
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                        >
                            <Typography variant="subtitle1" sx={{ p: 1, pb: 0 }}>
                                Status
                            </Typography>
                            <Stack direction="row" spacing={1} sx={{ p: 1 }}>
                                <Chip
                                    label="Active"
                                    style={{ color: theme.palette.primary.dark, backgroundColor: theme.palette.primary.light }}
                                    onClick={handleClose}
                                />
                                <Chip label="Inactive" onClick={handleClose} />
                            </Stack>
                        </Menu>
                    </Grid>
                </Grid>
            </CardContent>

            {/* table */}
            <TableContainer>
                <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>
                                <TableSortLabel>Name</TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel>User Id</TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel>Email</TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel>Phone</TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel>Status</TableSortLabel>
                            </TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listing.listingData.length > 0 &&
                            customMap(listing.listingData, (data) => (
                                <>
                                    <TableCell>
                                        {data.first_name} {data.last_name}
                                    </TableCell>
                                    <TableCell>{data.user_id}</TableCell>
                                    <TableCell>{data.email_address}</TableCell>
                                    <TableCell>{data.phone_number}</TableCell>
                                </>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* table pagination */}
            <TablePagination
                rowsPerPageOptions={[listing.recordPerPage]}
                component="div"
                count={listing.total}
                rowsPerPage={listing.recordPerPage}
                page={listing.currentPage - 1}
                onPageChange={listing.setpage}
                // onRowsPerPageChange=""
            />
        </MainCard>
    );
};

export default CustomerList;
