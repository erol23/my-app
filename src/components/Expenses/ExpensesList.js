import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
    console.log(props)
  return (
    <ul className="expenses-list">
      {props.items.length ? (
        props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      ) : (
        <h2 className="expenses-list__fallback">Found no expenses</h2>
      )}
    </ul>
  );
};

export default ExpensesList;
