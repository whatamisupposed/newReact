import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [expenses, setExpenses] = useState([ 
{id:1, description:"2 packs of sugar", amount:50, category:"groceries"},
{id:2, description:"2 packs of biscuit", amount:100, category:"groceries"},
{id:3, description:"2 packs of sweet", amount:60, category:"groceries"},
{id:4, description:"1 spotify subscription", amount:30, category:"entertainment"},
{id:5, description:"Electricity bill", amount:30, category:"utilities"}
]);
  
const addItem = (data) =>{
  console.log(data)
  setExpenses(() => [ ...expenses, data])
}

const deleteItem = (id) =>{
  setExpenses(expenses.filter(expense => expense.id !== id))
}

const filterItem = (cat) => {
  setExpenses(expenses.filter(expense => expense.category == cat))
}

  return (
    <>
    <ExpenseForm addExpense = {addItem} />
    <ExpenseFilter filterItem = {filterItem}/>
    <ExpenseList items = {expenses} deleteItem = {deleteItem} />
    
    </>
  )
}

export default App
