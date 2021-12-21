import "./ExpenseItem.css";

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>20 Dec 2021</div>
            <div className="expense-item__description">
                <h2>Watch</h2>
                <div className="expense-item__price"> $299.00</div>
            </div>
        </div>
    );
}

export default ExpenseItem;