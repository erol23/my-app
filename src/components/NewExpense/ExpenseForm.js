import React, { useState } from 'react';

import './ExpenseFrom.css';

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const changeHandler = (e) => {
        console.log(setEnteredTitle)
        console.log(setEnteredAmount)
        console.log(setEnteredDate)
        setEnteredTitle(e.target.value);
        setEnteredAmount(e.target.value);
        setEnteredDate(e.target.value);
    }

  return (
    <form>
        <div className='new-expense__control'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text"/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type="number" min='0.01' step='0.01'/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" min='2019-01-01' max='2022-12-31'/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type="submit" onChange={changeHandler}>Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm