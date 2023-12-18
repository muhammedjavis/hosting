import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import styles from './Header.module.css';
import { Button } from '@material-ui/core';
import BusinessIcon from '@material-ui/icons/Business';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png'
            alt='Random Logo'
          />
        </div>
      </div>
      <div className={styles.activeCompany}>
        <Button
          variant='contained'
          className={styles.whiteButton}
          style={{ margin: '10px' }}
        >
          <BusinessIcon className={styles.companyLogoIcon} />
          XYZ Enterprises Pvt Ltd
        </Button>
        <Button variant='contained' className={styles.whiteButton}>
          <ArrowDropDownIcon className={styles.arrowIcon} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
