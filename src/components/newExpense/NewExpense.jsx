import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const addExpenseHandler = (expenseData) => {
    var expense = {
      ...expenseData,
      id: Math.random(),
    };
    props.addExpense(expense);

  };
  return (
    <div className="new-expense">
      <ExpenseForm addExpense={addExpenseHandler} />
    </div>
  );
};

export default NewExpense;
