import React from 'react';
import Balance from './Components/Balance';
import ExpenseForm from './Components/ExpenseForm';
import ExpenseList from './Components/ExpenseList';
import { ExpenseProvider } from './Context/Global';
import { Container, Typography } from '@mui/material';

const App = () => {
  return (
    <ExpenseProvider>
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>
          Expense Tracker
        </Typography>
        <Balance />
        <ExpenseForm />
        <Typography variant="h6" gutterBottom>
          History
        </Typography>
        <ExpenseList />
      </Container>
    </ExpenseProvider>
  );
};

export default App;
