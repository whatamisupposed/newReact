import React, { useState } from 'react';
import { useExpenseTracker } from './ExpenseTrackerProvider';

const TransactionForm = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const { addTransaction } = useExpenseTracker();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount) return;
    addTransaction({ name, amount: +amount });
    setName('');
    setAmount('');
  };

  return (
    <div>
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TransactionForm;
