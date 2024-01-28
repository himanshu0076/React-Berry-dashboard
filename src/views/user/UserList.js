import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    CardContent,
    Grid,
    InputAdornment,
    TableCell,
    TextField,
    Tooltip,
    Fab,
    Menu,
    Button,
    Stack,
    Chip,
    Typography
} from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import { IconAdjustmentsHorizontal } from '@tabler/icons';

// assets
import SearchIcon from '@mui/icons-material/Search';
import useListing from 'hooks/useListing';
import Listing from 'ui-component/Listing';
// ==============================|| USERS LIST ||============================== //

const UserList = () => {
    const theme = useTheme();
    const listing = useListing('/api/users');

    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event?.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const columns = [
        { label: 'Name', id: 'first_name' },
        { label: 'UserID', id: 'user_id' },
        { label: 'Email', id: 'email_address' },
        { label: 'Phone Number', id: 'phone_number' }
    ];

    const TableComponent = ({ first_name, last_name, user_id, email_address, phone_number }) => (
        <>
            <TableCell>
                {first_name} {last_name}
            </TableCell>
            <TableCell>{user_id}</TableCell>
            <TableCell>{email_address}</TableCell>
            <TableCell>{phone_number}</TableCell>
        </>
    );

    return (
        <MainCard
            title={<Typography variant="h3">User List</Typography>}
            content={false}
            secondary={
                <Button variant="contained" component={Link} to="/users/add">
                    Add User
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
                            onChange=""
                            placeholder="Search User"
                            value=""
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

            <Listing id="users" listing={listing} columns={columns} TableComponent={TableComponent} />
        </MainCard>
    );
};

export default UserList;
