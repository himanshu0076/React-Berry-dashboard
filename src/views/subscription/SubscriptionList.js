import * as React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import {
    IconButton,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TableSortLabel,
    Typography
} from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// assets
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

// ==============================|| CUSTOMER LIST ||============================== //

const SubscriptionList = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [rows, setRows] = React.useState([]);

    return (
        <MainCard
            title={<Typography variant="h3">Subscription Package</Typography>}
            content={false}
            secondary={
                <Button variant="contained" component={Link} to="/subscription/update-subscription-package/1">
                    Add Subscription Package
                </Button>
            }
        >
            {/* table */}
            <TableContainer>
                <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>
                                <TableSortLabel>Package Name</TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel>Price</TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel>Duration</TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel>Users</TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel>Projects</TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel>Created On</TableSortLabel>
                            </TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow hover role="checkbox" tabIndex={-1} key="">
                            <TableCell>1</TableCell>
                            <TableCell>
                                <Typography sx={{ color: 'primary' }}>Diamond</Typography>
                            </TableCell>
                            <TableCell>$2099</TableCell>
                            <TableCell>4 Months</TableCell>
                            <TableCell>85</TableCell>
                            <TableCell>35</TableCell>
                            <TableCell>02-07-22</TableCell>
                            <TableCell align="center">
                                <IconButton size="large" color="primary" component={Link} to="/subscription/update-subscription-package/1">
                                    <EditTwoToneIcon />
                                </IconButton>
                                <IconButton size="large" color="error">
                                    <DeleteTwoToneIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                        <TableRow hover role="checkbox" tabIndex={-1} key="">
                            <TableCell>2</TableCell>
                            <TableCell>Silver</TableCell>
                            <TableCell>$1899</TableCell>
                            <TableCell>3 Months</TableCell>
                            <TableCell>50</TableCell>
                            <TableCell>25</TableCell>
                            <TableCell>20-06-2022</TableCell>
                            <TableCell align="center">
                                <IconButton size="large" color="primary" component={Link} to="/subscription/update-subscription-package/2">
                                    <EditTwoToneIcon />
                                </IconButton>
                                <IconButton size="large" color="error">
                                    <DeleteTwoToneIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            {/* table pagination */}
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange=""
                onRowsPerPageChange=""
            />
        </MainCard>
    );
};

export default SubscriptionList;
