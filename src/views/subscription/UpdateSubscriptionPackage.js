import { useNavigate } from 'react-router-dom';

// material-ui
import { Button, Grid, TextField, Stack } from '@mui/material';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import InputLabel from 'ui-component/extended/Form/InputLabel';

// assets

// ==============================|| CUSTOMER LIST ||============================== //

const UpdateSubscriptionPackage = () => {
    const navigate = useNavigate();

    return (
        <MainCard
            title="Edit Package Details"
            content={false}
            secondary={
                <Button variant="contained" onClick={() => navigate(-1)}>
                    Back
                </Button>
            }
        >
            <Grid container spacing={gridSpacing} sx={{ p: 3 }}>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <TextField id="packageName" name="packageName" defaultValue="Package Name" fullWidth label="Package Name" />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <TextField id="price" name="price" defaultValue="$ 1253" fullWidth label="Price" />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <TextField id="duration" name="duration" defaultValue="2 Years" fullWidth label="Duration" />
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing} alignItems="center">
                        <Grid item xs={8} sm={4} md={4} lg={4}>
                            <InputLabel>Number of Users:</InputLabel>
                        </Grid>
                        <Grid item xs={4} sm={2} md={2}>
                            <TextField id="users" name="users" defaultValue="350" fullWidth label="Users" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing} alignItems="center">
                        <Grid item xs={8} sm={4} md={4} lg={4}>
                            <InputLabel>Number of Projects:</InputLabel>
                        </Grid>
                        <Grid item xs={4} sm={2} md={2}>
                            <TextField id="projects" name="projects" defaultValue="350" fullWidth label="Projects" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={gridSpacing} alignItems="center">
                        <Grid item xs={8} sm={4} md={4} lg={4}>
                            <InputLabel>Number of Suppliers:</InputLabel>
                        </Grid>
                        <Grid item xs={4} sm={2} md={2}>
                            <TextField id="suppliers" name="suppliers" defaultValue="350" fullWidth label="Suppliers" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="packageDetails"
                        name="packageDetails"
                        defaultValue="Item 1"
                        multiline
                        rows={5}
                        fullWidth
                        label="Package Details"
                    />
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

export default UpdateSubscriptionPackage;
