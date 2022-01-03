import './ExpenseDate.css'
function ExpenseDate(props) {
    const day = props.date.toLocaleDateString("en-us", { day: "numeric" });
    const month = props.date.toLocaleDateString("en-us", { month: "long" });
    const year = props.date.getFullYear();
    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__date">{day}</div>
        </div>
    );
}

export default ExpenseDate;