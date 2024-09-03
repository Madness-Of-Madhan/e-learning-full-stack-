import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import { AuthContext } from './AuthContext'; // Import the custom hook for authentication context
import '../Assets/Plan.css';

const plans = [
  {
    name: 'Basic Plan',
    price: '$10/month',
    features: [
      'Feature 1',
      'Feature 2',
      'Feature 3'
    ]
  },
  {
    name: 'Standard Plan',
    price: '$20/month',
    features: [
      'Feature A',
      'Feature B',
      'Feature C'
    ]
  },
  {
    name: 'Premium Plan',
    price: '$30/month',
    features: [
      'Feature X',
      'Feature Y',
      'Feature Z'
    ]
  }
];

const Header = () => (
  <header className="header">
    <h1>Our Plans</h1>
  </header>
);

const Plan = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext); // Get the current user from AuthContext

  const handlePurchase = (plan) => {
    if (user) {
      navigate('/pay', { state: { plan } });
    } else {
      toast.error('Please register and login first');
      navigate('/login'); // Navigate to the register page
    }
  };

  return (
    <>
      <Header />
      <Toaster position="top-center" reverseOrder={false} />
      <div className="plan-details-container">
        <div className="plan-grid">
          {plans.map((plan, index) => (
            <div key={index} className="plan-card">
              <div className="plan-card-inner">
                <div className="plan-card-front">
                  <h2>{plan.name}</h2>
                  <p className="price">{plan.price}</p>
                </div>
                <div className="plan-card-back">
                  <h3>Features</h3>
                  <ul>
                    {plan.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <button onClick={() => handlePurchase(plan)} className="purchase-button">
                Purchase
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Plan;
