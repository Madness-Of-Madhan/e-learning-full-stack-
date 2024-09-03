import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, RadioGroup, FormControlLabel, Radio, Grid, Typography, Paper, Box } from '@mui/material';
import { styled } from '@mui/system';
import toast, { Toaster } from 'react-hot-toast';
import pay from '../img/Ac/pay.jpg';
import { PaymentContext } from './PaymentContext';

const PaymentPageContainer = styled(Paper)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(4),
  maxWidth: '800px',
  margin: 'auto',
  position: 'relative',
  overflow: 'hidden',
  backgroundSize: '50% 100%',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right',
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  flexShrink: 0,
  marginRight: theme.spacing(4),
  transition: 'transform 0.5s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const CenterContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  padding: theme.spacing(2),
}));

const PaymentPage = () => {
  const location = useLocation();
  const { plan } = location.state || {}; // Get the plan details from location state

  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [upiId, setUpiId] = useState('');
  const [username, setUsername] = useState('');
  const { updatePaymentInfo } = useContext(PaymentContext);

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };
const handlePurchase = async () => {
  let isValid = true;
  let errorMessage = '';

  if (paymentMethod === 'card') {
    if (!validateCardNumber(cardNumber)) {
      isValid = false;
      errorMessage += 'Card number must be 16 digits.\n';
    }
    if (!validateCvv(cvv)) {
      isValid = false;
      errorMessage += 'CVV must be 3 digits.\n';
    }
    if (!validateCardHolderName(cardHolderName)) {
      isValid = false;
      errorMessage += 'Card holder name must be in "First Last" format.\n';
    }
    if (!expiryDate) {
      isValid = false;
      errorMessage += 'Expiry date is required.\n';
    }
  } else if (paymentMethod === 'upi') {
    if (!upiId || !username) {
      isValid = false;
      errorMessage += 'UPI ID and Username are required.\n';
    }
  }

  if (isValid) {
    const paymentInfo = {
      planName: plan.name,
      planAmount: plan.price,
      method: paymentMethod,
    };

    try {
      const response = await axios.post('http://localhost:8080/pay/post', paymentInfo);
      if (response.status === 200) {
        updatePaymentInfo(paymentInfo);
        toast.success(`Purchase successful! Amount paid: ${plan.price}`);
      } else {
        toast.error('Payment failed. Please try again.');
      }
    } catch (error) {
      console.error('Error posting payment:', error);
      toast.error('An error occurred during payment. Please try again.');
    }
  } else {
    toast.error(errorMessage);
  }
};

  const validateCardNumber = (number) => number.length === 16;
  const validateCvv = (cvv) => cvv.length === 3;
  const validateCardHolderName = (name) => {
    const parts = name.split(' ');
    return parts.length === 2 && parts[0].length > 0 && parts[1].length > 0;
  };

  const renderCardFields = () => (
    <>
      <TextField
        label="Card Number"
        variant="outlined"
        fullWidth
        margin="normal"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        type="number"
      />
      <TextField
        label="Expiry Date"
        variant="outlined"
        fullWidth
        margin="normal"
        value={expiryDate}
        onChange={(e) => setExpiryDate(e.target.value)}
      />
      <TextField
        label="CVV Code"
        variant="outlined"
        fullWidth
        margin="normal"
        value={cvv}
        onChange={(e) => setCvv(e.target.value)}
        type="number"
      />
      <TextField
        label="Card Holder Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={cardHolderName}
        onChange={(e) => setCardHolderName(e.target.value)}
      />
    </>
  );

  const renderUPIFields = () => (
    <>
      <TextField
        label="UPI ID"
        variant="outlined"
        fullWidth
        margin="normal"
        value={upiId}
        onChange={(e) => setUpiId(e.target.value)}
      />
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </>
  );

  return (
    <CenterContainer>
      <Toaster position="top-center" />
      <PaymentPageContainer elevation={3}>
        <ImageContainer>
          <img src={pay} alt="Payment" style={{ width: '300px', height: '400px' }} />
        </ImageContainer>
        <Box flexGrow={1}>
          <Typography variant="h4" gutterBottom>
            Payment Page
          </Typography>
          {plan && (
            <Typography variant="h6" gutterBottom>
              {plan.name} - {plan.price}
            </Typography>
          )}
          <RadioGroup value={paymentMethod} onChange={handlePaymentMethodChange}>
            <FormControlLabel value="card" control={<Radio />} label="Card" />
            <FormControlLabel value="upi" control={<Radio />} label="UPI" />
          </RadioGroup>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {paymentMethod === 'card' ? renderCardFields() : renderUPIFields()}
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handlePurchase}
              >
                Pay Now {plan ? `- ${plan.price}` : ''}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </PaymentPageContainer>
    </CenterContainer>
  );
};

export default PaymentPage;
