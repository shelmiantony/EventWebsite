import React from 'react';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useExpense } from '../Context/Global';

const ExpenseList = () => {
  const { state, dispatch } = useExpense();

  const handleRemoveTransaction = (id) => {
    dispatch({ type: 'REMOVE_TRANSACTION', payload: id });
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Transaction History
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {state.transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.text}</TableCell>
              <TableCell
                align="right"
                style={{
                  color: transaction.amount > 0 ? 'green' : 'red',
                }}>
                {transaction.amount > 0 ? '+' : '-'}$
                {Math.abs(transaction.amount).toFixed(2)}
              </TableCell>
              <TableCell align="right">
                <IconButton
                  onClick={() => handleRemoveTransaction(transaction.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default ExpenseList;
