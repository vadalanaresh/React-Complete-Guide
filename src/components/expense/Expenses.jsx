import { useState } from "react";
import Card from "../ui/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";
import ExpensesList from "./ExpenssesList";
import ExpensesChart from "./ExpensesChart";

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
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
