import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Divider, Grid, Stack, Typography, useMediaQuery } from '@mui/material';

// project imports
import AuthWrapper1 from '../AuthWrapper1';
import AuthCardWrapper from '../AuthCardWrapper';
import AuthLogin from './auth-forms/AuthLogin';
// import Logo from 'ui-component/Logo';
import MainLogo from '../../../assets/images/Pur_Ele_Logo_2_02.png';
import AuthFooter from 'ui-component/cards/AuthFooter';
import useAuth from 'hooks/useAuth';
import MainCard from 'ui-component/cards/MainCard';
import { fontWeight } from '@mui/system';

// assets

// ================================|| AUTH3 - LOGIN ||================================ //

const Login = () => {
    const theme = useTheme();
    const { isLoggedIn } = useAuth();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <AuthWrapper1>
            <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
                        <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                            {/* <Grid container spacing={2} alignItems="center" justifyContent="center">
                                <Grid item sx={{ mb: 1 }}>
                                    <Typography variant="h2" style={{ fontSize: '32px', fontWeight: '500' }}>
                                        Welcome to Admin Panel
                                    </Typography>
                                </Grid>
                            </Grid> */}

                            <AuthCardWrapper style={{ zindex: 1 }}>
                                <Grid container spacing={0} alignItems="center" justifyContent="center">
                                    <Typography
                                        className="login-welcome-title"
                                        variant="h3"
                                        color={theme.palette.primary.main}
                                        style={{ fontSize: '22px' }}
                                        sx={{ mb: 2 }}
                                    >
                                        Welcome to Admin Panel
                                    </Typography>
                                </Grid>
                                <Grid container spacing={0} alignItems="center" justifyContent="center">
                                    <Link to="#">
                                        <img src={MainLogo} height="90px" alt="Pure Element" />
                                    </Link>
                                </Grid>
                            </AuthCardWrapper>
                            <AuthCardWrapper style={{ zindex: 0 }}>
                                <Grid container spacing={2} alignItems="center" justifyContent="center">
                                    <Grid item xs={12}>
                                        <AuthLogin />
                                    </Grid>
                                </Grid>
                            </AuthCardWrapper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
                    <AuthFooter />
                </Grid>
            </Grid>
        </AuthWrapper1>
    );
};

export default Login;
