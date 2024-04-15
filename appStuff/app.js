import React from 'react';
import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';
import ExpenseTrackerProvider from './ExpenseTrackerProvider';
const App = () => {
  return /*#__PURE__*/React.createElement(ExpenseTrackerProvider, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Expense Tracker"), /*#__PURE__*/React.createElement(TransactionList, null), /*#__PURE__*/React.createElement(TransactionForm, null)));
};
export default App;
