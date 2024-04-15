import React from 'react';

function IndianRupeeAmount({ amount }) {
  
  const formattedAmount = typeof amount === 'number' ? amount : parseFloat(amount);


  const formattedIndianRupeeAmount = formattedAmount.toLocaleString('en-IN', {
    style: 'currency',
    currency: 'INR',
  });

  return (
    <div>
      {formattedIndianRupeeAmount}
    </div>
  );
}

export default IndianRupeeAmount;