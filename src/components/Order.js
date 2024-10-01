import React from 'react';
import { useLocation } from 'react-router-dom';

const Order = () => {
  const location = useLocation();
  const { orderId } = location.state || {};  // Get the passed state (orderId)

  return (
    <div>
      <h1>Order Page</h1>
      {orderId ? (
        <p>Viewing details for order ID: {orderId}</p>
      ) : (
        <p>No order ID provided.</p>
      )}
    </div>
  );
};

export default Order;
