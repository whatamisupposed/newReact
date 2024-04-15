import React from 'react';
import { useExpenseTracker } from './ExpenseTrackerProvider';

const TransactionList = () => {
  const { transactions } = useExpenseTracker();

  return (
    <div>
      <h2>Transactions</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            <span>{transaction.name}</span>
            <span>{transaction.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
