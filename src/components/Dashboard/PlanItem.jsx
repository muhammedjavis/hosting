/* eslint-disable react/prop-types */
import { Button, Divider, Grid, Paper, Typography } from '@material-ui/core';

const PlanItem = ({ title, oldPrice, newPrice, features, buttonColour }) => {
  return (
    <Grid item xs={12} sm={4}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant='h4' fontWeight='bold' align='left'>
          {title}
        </Typography>
        <Typography variant='subtitle1' color='textSecondary'>
          <del style={{ color: 'red', fontSize: 'small' }}>{oldPrice}</del>
        </Typography>
        <Typography variant='h3'>{newPrice}</Typography>
        <Button variant='contained' style={{ backgroundColor: buttonColour }}>
          Get Started
        </Button>
        <Divider style={{ margin: '15px 0' }} />
        <Typography variant='body2' style={{ marginLeft: '5px' }}>
          What you will get:
        </Typography>
        <ul style={{ paddingLeft: '20px', marginBottom: '10px' }}>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <Typography variant='body2'>
          <a href='#'>EXPLORE FEATURES</a>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default PlanItem;
