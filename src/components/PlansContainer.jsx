import { Grid } from '@material-ui/core';
import PlanItem from './PlanItem';

const PlansGridContainer = () => {
  const plansNormal = [
    {
      title: 'Basic',
      oldPrice: '$ 89.99/mo',
      newPrice: '$ 9.99/mo',
      features: ['Upto 25 Users', 'Upto 25gb storage', 'Email Support'],
      buttonColour: 'lightyellow',
    },
    {
      title: 'Standard',
      oldPrice: '$ 189.99/mo',
      newPrice: '$ 99.99/mo',
      features: ['Upto 50 Users', 'Upto 60gb storage', 'Email+Chat Support'],
      buttonColour: 'lightred',
    },
    {
      title: 'Premium',
      oldPrice: '$ 389.99/mo',
      newPrice: '$ 199.99/mo',
      features: [
        'Upto 75 Users',
        'Upto 100gb storage',
        'Email+Chat+Whatsapp Support',
      ],
      buttonColour: 'lightpink',
    },
  ];

  return (
    <Grid container spacing={6}>
      {plansNormal.map((plan, index) => (
        <PlanItem
          key={index}
          title={plan.title}
          oldPrice={plan.oldPrice}
          newPrice={plan.newPrice}
          features={plan.features}
          buttonColour={plan.buttonColour}
        />
      ))}
    </Grid>
  );
};

export default PlansGridContainer;
