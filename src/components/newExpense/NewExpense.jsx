import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const onAddExpenseHandler = () => {
    setIsEditing(true);
  };

  const addExpenseHandler = (expenseData) => {
    var expense = {
      ...expenseData,
      id: Math.random(),
    };
    props.addExpense(expense);
  };

  const onCancelExpenseHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button type="button" onClick={onAddExpenseHandler}>
          Add Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          cancelExpenseHandler={onCancelExpenseHandler}
          addExpense={addExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
