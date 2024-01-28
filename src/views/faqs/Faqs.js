import * as React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
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
    Typography,
    FormControlLabel,
    Switch
} from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// assets
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

// ==============================|| OFFERS LIST ||============================== //

const Faqs = () => {
    const theme = useTheme();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [rows, setRows] = React.useState([]);

    return (
        <MainCard
            title={<Typography variant="h3">All FAQs</Typography>}
            content={false}
            secondary={
                <Button variant="contained" component={Link} to="/faqs/update-faq/1">
                    Add FAQs
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
                                <TableSortLabel>Question</TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel>Answer</TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel>Status</TableSortLabel>
                            </TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow hover role="checkbox" tabIndex={-1} key="">
                            <TableCell>1</TableCell>
                            <TableCell>Lorem Ipsum</TableCell>
                            <TableCell>Lorem Ipsum</TableCell>
                            <TableCell>
                                <FormControlLabel control={<Switch defaultChecked />} />
                            </TableCell>
                            <TableCell align="center">
                                <IconButton size="large" color="primary" component={Link} to="/faqs/update-faq/1">
                                    <VisibilityTwoToneIcon />
                                </IconButton>
                                <IconButton size="large" color="primary" component={Link} to="/faqs/update-faq/1">
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

export default Faqs;
