import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);

  return (
    <ul className="list-group">
      {expenses.map((expense) => {
        const { id, name, cost } = expense;
        return <ExpenseItem id={id} name={name} cost={cost} />;
      })}
    </ul>
  );
};

export default ExpenseList;
