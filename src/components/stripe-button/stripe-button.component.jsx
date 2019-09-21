import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_wJk9tNthm613JkUd2X0Z4rv600lY9dRsaT';
    const onToken = token => {
        console.log(token);
        alert('Payent Success')
    }
    return (
        <StripeCheckout
            label="Pay Now"
            name="reactEcom.com"
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;