import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expense.css";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("");
  const selectFilterChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        onSelectFilterChange={selectFilterChangeHandler}
      ></ExpensesFilter>
      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
