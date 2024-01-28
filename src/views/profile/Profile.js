import React, { useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';

// Material ui
import { Tab, Tabs } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';

const Profile = () => {
    const [activeTab, setActiveTab] = React.useState('');
    useEffect(() => {
        setActiveTab(window.location.pathname);
    }, [window.location.pathname]);

    return (
        <MainCard>
            <div>
                <Tabs
                    indicatorColor="primary"
                    sx={{
                        mb: 3,
                        minHeight: 'auto',
                        '& button': {
                            minWidth: 100
                        },
                        '& a': {
                            minHeight: 'auto',
                            minWidth: 10,
                            py: 1.5,
                            px: 1,
                            mr: 2.25,
                            color: 'grey.600'
                        },
                        '& a.Mui-selected': {
                            color: 'primary.main'
                        }
                    }}
                    aria-label="Profile Tabs"
                    variant="scrollable"
                >
                    <Tab
                        className={activeTab === '/profile/update-profile' || activeTab === '/profile' ? 'Mui-selected' : ''}
                        component={Link}
                        to="/profile/update-profile"
                        icon={<AccountCircleOutlinedIcon sx={{ fontSize: '1.3rem' }} />}
                        label="Profile"
                    />
                    <Tab
                        className={activeTab === '/profile/update-security' ? 'Mui-selected' : ''}
                        component={Link}
                        to="/profile/update-security"
                        icon={<VpnKeyOutlinedIcon sx={{ fontSize: '1.3rem' }} />}
                        label="Security"
                    />
                </Tabs>
                <Outlet />
            </div>
        </MainCard>
    );
};

export default Profile;
