import React from 'react';
import { useLocation } from 'react-router-dom';

const Product = () => {
  const location = useLocation();

  // Get the query string parameters from the URL
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get('category');  // Extract "category" from query string

  return (
    <div>
      <h1>Product Page</h1>
      <p>Showing products in category: {category}</p>
    </div>
  );
};

export default Product;
