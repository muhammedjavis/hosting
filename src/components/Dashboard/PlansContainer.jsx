/* eslint-disable react/prop-types */
import { Grid } from '@material-ui/core';
import PlanItem from './PlanItem';

const PlansGridContainer = ({ activeButton }) => {
  const plansNormal = [
    {
      title: 'Basic',
      oldPrice: '$ 89.99/mo',
      newPrice: '$ 9.99/mo',
      annualOldPrice: '$ 119.99/yr',
      annualPrice: '$ 107.99/yr',
      features: ['Upto 25 Users', 'Upto 25gb storage', 'Email Support'],
      buttonColour: 'lightyellow',
    },
    {
      title: 'Standard',
      oldPrice: '$ 189.99/mo',
      newPrice: '$ 99.99/mo',
      annualOldPrice: '$ 119.99/yr',
      annualPrice: '$ 2280/yr',
      features: ['Upto 50 Users', 'Upto 60gb storage', 'Email+Chat Support'],
      buttonColour: '#FFB6C1',
    },
    {
      title: 'Premium',
      oldPrice: '$ 389.99/mo',
      newPrice: '$ 199.99/mo',
      annualOldPrice: '$ 4669.99/yr',
      annualPrice: '$ 2399.99/yr',
      features: [
        'Upto 75 Users',
        'Upto 100gb storage',
        'Email+Chat+Whatsapp Support',
      ],
      buttonColour: '#DCD0FF',
    },
  ];

  return (
    <Grid container spacing={6}>
      {plansNormal.map((plan, index) => (
        <PlanItem
          key={index}
          title={plan.title}
          oldPrice={
            activeButton === 'annual' ? plan.annualOldPrice : plan.oldPrice
          }
          newPrice={
            activeButton === 'annual' ? plan.annualPrice : plan.newPrice
          }
          features={plan.features}
          buttonColour={plan.buttonColour}
        />
      ))}
    </Grid>
  );
};

export default PlansGridContainer;
