import * as React from 'react';
import { useNavigate } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, Grid, TextField, Stack, FormHelperText } from '@mui/material';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';
import MenuItem from '@mui/material/MenuItem';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import InputLabel from 'ui-component/extended/Form/InputLabel';

// assets

// ==============================|| CUSTOMER LIST ||============================== //

const UpdateOffer = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    return (
        <MainCard
            title="Edit Offer Details"
            content={false}
            secondary={
                <Button variant="contained" onClick={() => navigate(-1)}>
                    Back
                </Button>
            }
        >
            <Grid container spacing={gridSpacing} sx={{ p: 3 }}>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <TextField id="offerTitle" name="offerTitle" defaultValue="Offer Title" fullWidth label="Offer Title*" />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <TextField id="discount" name="discount" defaultValue="40%" fullWidth label="Discount*" />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <TextField
                        label="Offer Banner*"
                        id="banner"
                        name="banner"
                        type="file"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        value=""
                        onChange=""
                        error=""
                        helperText=""
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <TextField
                        label="Start date*"
                        id="startDate"
                        name="startDate"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        value=""
                        onChange=""
                        error=""
                        helperText=""
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <TextField
                        label="End date*"
                        id="endDate"
                        name="endDate"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        value=""
                        onChange=""
                        error=""
                        helperText=""
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <TextField
                        label="Status*"
                        id="status"
                        name="status"
                        select
                        InputLabelProps={{ shrink: true }}
                        fullWidth
                        value=""
                        onChange=""
                        error=""
                        helperText=""
                    >
                        <MenuItem value={1} defaultChecked="true">
                            Active
                        </MenuItem>
                        <MenuItem value={0}>Inactive</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <Stack direction="row">
                        <AnimateButton>
                            <Button variant="contained" type="submit" size="large">
                                Save
                            </Button>
                        </AnimateButton>
                    </Stack>
                </Grid>
            </Grid>
        </MainCard>
    );
};

export default UpdateOffer;
