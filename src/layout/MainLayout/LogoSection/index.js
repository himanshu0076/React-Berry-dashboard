import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Link } from '@mui/material';

// project imports
import { DASHBOARD_PATH } from 'config';
import MainLogo from '../../../assets/images/Pur_Ele_Logo_2_02.png';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (
    <Link component={RouterLink} to={DASHBOARD_PATH}>
        <img src={MainLogo} alt="Pure Element" width="100%" height="100%" className="sidebar-logo" />
    </Link>
);

export default LogoSection;
