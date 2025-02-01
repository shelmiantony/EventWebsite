import React, { useContext } from 'react';
import { Typography, Box } from '@mui/material';
import { useExpense } from '../Context/Global';

const Balance = () => {
  const { state } = useExpense();

  const amounts = state.transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2);
  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => acc + item, 0) * -1
  ).toFixed(2);

  return (
    <Box>
      <Typography variant="h6">Your Balance</Typography>
      <Typography variant="h4">${total}</Typography>
      <Box display="flex" justifyContent="space-between" mt={2}>
        <Box>
          <Typography variant="subtitle1">Income</Typography>
          <Typography variant="body1" color="green">
            +${income}
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle1">Expense</Typography>
          <Typography variant="body1" color="red">
            -${expense}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Balance;
