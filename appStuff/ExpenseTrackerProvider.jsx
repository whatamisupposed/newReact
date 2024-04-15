import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Define initial state
const initialState = {
  transactions: [],
};

// Define actions
const ADD_TRANSACTION = 'ADD_TRANSACTION';

// Define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default: 
      return state;
  }
};

// Create context
const ExpenseTrackerContext = createContext();

// Create provider component
const ExpenseTrackerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Load transactions from local storage on component mount
  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem('transactions'));
    if (storedTransactions) {
      dispatch({ type: ADD_TRANSACTION, payload: storedTransactions });
    }
  }, []);

  // Save transactions to local storage whenever state.transactions change
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(state.transactions));
  }, [state.transactions]);

  // Define addTransaction function
  const addTransaction = (transaction) => {
    dispatch({ type: ADD_TRANSACTION, payload: transaction });
  };

  return (
    <ExpenseTrackerContext.Provider value={{ transactions: state.transactions, addTransaction }}>
      {children}
    </ExpenseTrackerContext.Provider>
  );
};

// Custom hook for accessing context
const useExpenseTracker = () => {
  const context = useContext(ExpenseTrackerContext);
  if (!context) {
    throw new Error('useExpenseTracker must be used within an ExpenseTrackerProvider');
  }
  return context;
};

export { ExpenseTrackerProvider, useExpenseTracker };
