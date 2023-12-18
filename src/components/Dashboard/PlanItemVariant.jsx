/* eslint-disable react/prop-types */
import { Button, Grid, Paper, Typography } from '@material-ui/core';

const PlanItemVariant = ({
  title,
  subheading,
  features,
  buttonColour,
  buttonText,
  highlightText,
}) => {
  return (
    <Paper
      elevation={3}
      style={{
        padding: '20px',
        width: '40%',
        margin: '20px',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <div
            style={{
              backgroundColor: buttonColour,
              padding: '5px',
              borderRadius: '5px',
              width: '110px',
            }}
          >
            <Typography variant='body2' style={{ fontWeight: 'bold' }}>
              {highlightText}
            </Typography>
          </div>
          <Typography variant='h4' fontWeight='bold' align='left'>
            {title}
          </Typography>
          <Typography variant='subtitle1' color='textSecondary'>
            {subheading}
          </Typography>
          <Button variant='contained' style={{ backgroundColor: buttonColour }}>
            {buttonText}
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '20px',
            }}
          >
            <Typography variant='body2'>What you will get:</Typography>
          </div>
          <ul style={{ marginBottom: '10px' }}>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PlanItemVariant;
