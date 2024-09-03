import React, { createContext, useState } from 'react';

const PaymentContext = createContext();

const PaymentProvider = ({ children }) => {
  const [paymentInfo, setPaymentInfo] = useState({ amount: null, method: null }); // Initialize with default values
  const [courses, setCourses] = useState({
    inProgress: [],
    learned: [],
    enrolled: [],
    planned: [],
  });

  // Function to update payment information
  const updatePaymentInfo = (info) => {
    setPaymentInfo(info);
  };

  // Function to update courses
  const updateCourses = (courseType, newCourses) => {
    setCourses(prevCourses => ({
      ...prevCourses,
      [courseType]: newCourses
    }));
  };

  return (
    <PaymentContext.Provider value={{ paymentInfo, updatePaymentInfo, courses, updateCourses }}>
      {children}
    </PaymentContext.Provider>
  );
};

export { PaymentContext, PaymentProvider };
