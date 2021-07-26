import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import crwnImage from '../../assets/favicon.ico';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IsruTAf5D9mxr02PIJJnHqjMPgh8C2mQoeMyGqc5Q3b4kvnsxpfgSu75kqUCur6562vgcaILuENBAPWYioht8ZE00X1fhB91p';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
    .then(response => {
      alert('Payment Successful');
    })
    .catch(error => {
      console.log('Payment error: ', error);
      alert('There was an issue with your payment! Please make sure you use the provided credit card.');
    });
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='CRWN-Clothing Ltd.'
      image={crwnImage}
      description={`Your total is $${price}`}
      panelLabel='Pay Now'
      amount={priceForStripe}
      shippingAddress
      billingAddress
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;