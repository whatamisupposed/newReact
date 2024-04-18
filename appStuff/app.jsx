import React from 'react';
import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';
import ExpenseTrackerProvider from './ExpenseTrackerProvider';

const App = () => {
  return (
    <ExpenseTrackerProvider>
      <div>
        <h1>Expense Tracker</h1>
        <TransactionList />
        <TransactionForm />
      </div>
    </ExpenseTrackerProvider>
  );
};
export default App;