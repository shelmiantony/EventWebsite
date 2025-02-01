import React from 'react';
import { useExpense } from '../Context/Global copy';

const Balance = () => {
  const { state } = useExpense;
  console.log('Expence>', state);
  return <div>Balance</div>;
};

export default Balance;
