import Paper from '@mui/material/Paper';

import Typography from '@mui/material/Typography';
import { useState } from 'react';
import classes from './Dashboard.module.css';
import PlansGridContainer from './PlansContainer';
import { Grid } from '@material-ui/core';

import PlanItemVariant from './PlanItemVariant';

const Dashboard = () => {
  const [activeButton, setActiveButton] = useState('monthly');

  const handleButtonClick = (type) => {
    setActiveButton(type);
  };

  return (
    <div style={{ marginLeft: '230px' }}>
      <Paper elevation={3} style={{ padding: '20px', width: '100%' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '100px',
          }}
        >
          <Typography variant='h4' fontWeight='bold' style={{ flex: '1' }}>
            Choose a plan that is just right for you!
          </Typography>
          <div className={classes.togglebuttons}>
            <button
              className={activeButton === 'monthly' ? classes.active : ''}
              onClick={() => handleButtonClick('monthly')}
            >
              Monthly
            </button>
            <button
              className={activeButton === 'annual' ? classes.active : ''}
              onClick={() => handleButtonClick('annual')}
            >
              Annually<sup>-10%</sup>
            </button>
          </div>
        </div>
        <PlansGridContainer activeButton={activeButton} />
        <Grid container spacing={2}>
          <PlanItemVariant
            title='Free Starter'
            subheading='The quickest and easiest way to try Protocols with basic functionalities.'
            features={[
              'Upto 8 Users',
              'Upto 3gb storage',
              'Email Support',
              'Basics of Documents,Task Flow, Voting, Accounting,Banking',
            ]}
            buttonColour='lightgreen'
            buttonText='Get Started'
            highlightText='Free Forever'
          />
          <PlanItemVariant
            title='Enterprise'
            subheading='The most powerful Protocols plan for large organizations.'
            features={[
              'More than 75 Users',
              'Customization of all other features',
            ]}
            buttonColour='lightblue'
            buttonText='Contact Us'
            highlightText='Let"s Connect'
          />
        </Grid>
        <Typography
          variant='body2'
          style={{
            textAlign: 'right',
            color: 'blue',
            marginTop: '20px',
          }}
        >
          *Some unique features are provided as add-ons with individual plans
          for each feature.
        </Typography>
      </Paper>
    </div>
  );
};

export default Dashboard;
