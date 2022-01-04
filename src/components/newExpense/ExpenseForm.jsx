import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const [enteredAmount, setEnteredAmount] = useState("");
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const [enteredDate, setEnteredDate] = useState("");
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    props.addExpense(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls" id="divExpensesControl">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="1-1-2019"
            max="12-31-2022"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div>
        <button
          type="button"
          onClick={props.cancelExpenseHandler}
          className="new-expense__actions"
        >
          Cancel
        </button>
        <button type="submit" className="new-expense__actions">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
