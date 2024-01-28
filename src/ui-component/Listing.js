import * as React from 'react';
import { Link } from 'react-router-dom';
// material-ui
import {
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    TableSortLabel,
    FormControlLabel,
    Switch,
    Box
} from '@mui/material';

// project imports
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
// ==============================|| CUSTOMER LIST ||============================== //

const Listing = ({ id, TableComponent, listing, columns }) => {
    const customTableBody = (arr, Component) =>
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
                    <IconButton
                        size="large"
                        color="primary"
                        onClick={(e) => listing.setCurrentData(data)}
                        component={Link}
                        to={`/${id}/${data.id}/edit`}
                    >
                        <EditTwoToneIcon />
                    </IconButton>
                    <IconButton size="large" color="primary" component={Link} to={`/${id}/${data.id}`}>
                        <VisibilityTwoToneIcon />
                    </IconButton>
                    <IconButton size="large" color="error" onClick={(e) => listing.deleteRow(e, data.id)}>
                        <DeleteTwoToneIcon />
                    </IconButton>
                </TableCell>
            </TableRow>
        ));

    return (
        <>
            <TableContainer>
                <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
                    <TableHead>
                        <TableRow>
                            <TableSortLabel>
                                <TableCell onClick={(e) => listing.changeOrder('id')}>#</TableCell>
                            </TableSortLabel>
                            {columns.map(({ label, id }) => (
                                <TableCell key={id} sortDirection={listing.orderBy === id ? listing.orderBy : false}>
                                    <TableSortLabel
                                        active={listing.orderBy === id}
                                        direction={listing.orderBy === id ? listing.order : 'asc'}
                                        onClick={(e) => listing.changeOrder(id)}
                                    >
                                        {label}
                                        {/* {listing.orderBy === id ? (
                                            <Box component="span">
                                                {listing.order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                            </Box>
                                        ) : null} */}
                                    </TableSortLabel>
                                </TableCell>

                                // <TableCell>
                                //     <TableSortLabel onClick={(e) => listing.changeOrder(id)}>{label}</TableSortLabel>
                                // </TableCell>
                            ))}
                            <TableCell>
                                <TableSortLabel>Status</TableSortLabel>
                            </TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listing.listingData.length > 0 && customTableBody(listing.listingData, (data) => TableComponent(data))}
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
        </>
    );
};

export default Listing;
