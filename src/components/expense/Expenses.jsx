import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";
import ExpensesList from "./ExpenssesList";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2022");
  const selectFilterChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };
  var filteredExpenses = props.expenses.filter(
    (e) => e.date.getFullYear().toString() === selectedYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        defaultYear={selectedYear}
        onSelectFilterChange={selectFilterChangeHandler}
      ></ExpensesFilter>
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
