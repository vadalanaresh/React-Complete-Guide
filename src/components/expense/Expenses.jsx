import ExpenseItem from "./ExpenseItem";
import Card from "../ui/Card";
import "./Expense.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
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
