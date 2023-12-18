import { Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import classes from './Navigation.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ExtensionIcon from '@mui/icons-material/Extension';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import RedeemIcon from '@mui/icons-material/Redeem';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Navigation = () => {
  const location = useLocation();

  const navigationItems = [
    { label: 'Dashboard', url: '/dashboard', icon: <DashboardIcon /> },
    { label: 'Perks', url: '#', icon: <RedeemIcon /> },
    { label: 'Addons', url: '#', icon: <ExtensionIcon /> },
    { label: 'FAQ', url: '#', icon: <QuestionAnswerIcon /> },
    { label: 'Support', url: '#', icon: <SupportAgentIcon /> },
  ];

  return (
    <div className={classes.navigation}>
      <div className={classes.userBox}>
        <Avatar alt='User Image' src='' className={classes.userImage} />
        <div className={classes.userName}>
          User Name
          <NavLink to='#'>
            <ArrowForwardIosIcon fontSize='small' />
          </NavLink>
        </div>
        <div className={classes.userEmail}>user@test.com</div>
      </div>
      {navigationItems.map((item, index) => (
        <NavLink
          key={index}
          to={item.url}
          style={{
            width: '100%',
            height: '50px',
            textAlign: 'left',
            borderRadius: '0 10px 10px 0',
            marginTop: '10px',
            marginLeft: '0',
            marginRight: '40px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            backgroundColor:
              location.pathname === item.url ? 'lightblue' : 'transparent',
          }}
        >
          <Button
            variant='outlined'
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '0 10px 10px 0',
            }}
            startIcon={item.icon}
          >
            {item.label}
          </Button>
        </NavLink>
      ))}
      <NavLink
        to='#'
        style={{
          marginTop: '10px',
          marginLeft: '0',

          width: '100%',
        }}
      >
        <Button
          variant='text'
          color='primary'
          style={{
            width: '100%',
            height: '50px',
            textAlign: 'left',
            borderRadius: '0 10px 10px 0',

            marginLeft: '0',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          Logout
        </Button>
      </NavLink>
    </div>
  );
};

export default Navigation;
