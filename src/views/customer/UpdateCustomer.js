import * as React from 'react';
import { useNavigate } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, Grid, TextField, Stack } from '@mui/material';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';

// project imports
import MainCard from 'ui-component/cards/MainCard';

import * as yup from 'yup';
import useHandleForm from 'hooks/useHandleForm';
// assets

// ==============================|| CUSTOMER LIST ||============================== //
const validationSchema = yup.object({
    // first_name: yup.string().required('First name is required.'),
    // last_name: yup.mixed().required('Last name is required.'),
    // email_address: yup.mixed().required('Email is required.'),
    // phone_number: yup.mixed().required('Phone number is required.'),
    // user_password: yup.mixed().required('Password is required.')
});

const UpdateCustomer = ({ pageBehaviour }) => {
    const theme = useTheme();
    const navigate = useNavigate();

    const formikInitialValues = {
        first_name: '',
        last_name: '',
        email_address: '',
        phone_number: '',
        user_password: ''
    };

    const [formik] = useHandleForm('/api/customers', pageBehaviour, formikInitialValues, validationSchema);

    return (
        <MainCard
            title={`${pageBehaviour} Customer`}
            content={false}
            secondary={
                <Button variant="contained" onClick={() => navigate(-1)}>
                    Back
                </Button>
            }
        >
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={gridSpacing} sx={{ p: 3 }}>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <TextField
                            label="First Name*"
                            id="first_name"
                            name="first_name"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            value={formik.values.first_name}
                            style={{ minWidth: '300px' }}
                            onChange={formik.handleChange}
                            error={formik.touched.first_name && Boolean(formik.errors.first_name)}
                            helperText={formik.touched.first_name && formik.errors.first_name}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <TextField
                            label="Last Name*"
                            id="last_name"
                            name="last_name"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            value={formik.values.last_name}
                            style={{ minWidth: '300px' }}
                            onChange={formik.handleChange}
                            error={formik.touched.last_name && Boolean(formik.errors.last_name)}
                            helperText={formik.touched.last_name && formik.errors.last_name}
                        />{' '}
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <TextField
                            label="Email*"
                            id="email_address"
                            name="email_address"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            value={formik.values.email_address}
                            style={{ minWidth: '300px' }}
                            onChange={formik.handleChange}
                            error={formik.touched.email_address && Boolean(formik.errors.email_address)}
                            helperText={formik.touched.email_address && formik.errors.email_address}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <TextField
                            label="Phone Number *"
                            id="phone_number"
                            name="phone_number"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            value={formik.values.phone_number}
                            style={{ minWidth: '300px' }}
                            onChange={formik.handleChange}
                            error={formik.touched.phone_number && Boolean(formik.errors.phone_number)}
                            helperText={formik.touched.phone_number && formik.errors.phone_number}
                        />{' '}
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={4}>
                        <TextField
                            label="Password*"
                            id="user_password"
                            name="user_password"
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            value={formik.values.user_password}
                            style={{ minWidth: '300px' }}
                            onChange={formik.handleChange}
                            error={formik.touched.user_password && Boolean(formik.errors.user_password)}
                            helperText={formik.touched.user_password && formik.errors.user_password}
                        />
                    </Grid>

                    {/* <Grid item xs={12} sm={6} md={6} lg={4}>
                        <TextField
                            id="cpassword"
                            name="cpassword"
                            type="password"
                            defaultValue="123456"
                            fullWidth
                            label="Confirm Password"
                        />
                    </Grid> */}
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
            </form>
        </MainCard>
    );
};

export default UpdateCustomer;
