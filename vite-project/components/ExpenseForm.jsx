import React from 'react'
import { useForm } from "react-hook-form"

const ExpenseForm = ( {addExpense}) => {

    const { register, handleSubmit, reset, formState: { errors} } = useForm()

  return (
    <form action="" className="mb-3" onSubmit = {handleSubmit( (data) => {
        addExpense;
        reset(data)
  })}>

<div className="mb-3">
    <label htmlFor="description" className="form-label">Description </label>
    <input id="description" type="text" className="form-control" { ...register("description"), {minLength:6, required:true}}/>
    {error.description?.type == "required" && <p className="text-danger">The field is required</p>}
    {error.description?.type == "minLength" &&  <p className="text-danger">This field requires at least 6 characters</p>}
</div>

<div className="mb-3">
    <label htmlFor="amount" className="form-label">Amount </label>
    <input id="amount" type="text" className="form-control" { ...register("amount",{required:true})}/>
    {error.amount?.type == "required" && <p className="text-danger">The field is required</p>}
</div>

<div className="mb-3">
    <label htmlFor="description" className="form-label">Category </label>

    <select name="" id="" className="form-select" { ...register("category"), {required:true}}>
       <option value=""></option>
        <option value="utilities">Utilities</option>
        <option value="entertainment">Entertainment</option>
        <option value="groceries">Groceries</option>
    </select>

    {error.category?.type == "required" && <p className="text-danger">The field is required</p>}
</div>

<button className="btn btn-primary">Submit</button>

    </form>
  )
}

export default ExpenseForm