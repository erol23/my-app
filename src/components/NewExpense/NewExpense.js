import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHAndler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false)
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  return (
    <div className="new-expense">
      {isEditing ? (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHAndler} setIsEditing={setIsEditing}/>
      ) : (
        <button onClick={startEditingHandler}>Add New Expenses</button>
      )}
    </div>
  );
};

export default NewExpense;
