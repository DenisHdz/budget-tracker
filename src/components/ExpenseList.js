import React, { useState, useEffect, useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);
  const [filteredExpenses, setFilteredExpenses] = useState(expenses || []);

  useEffect(() => {
    setFilteredExpenses(expenses);
  }, [expenses]);

  const handleSearchExpense = (event) => {
    const results = expenses.filter((expense) =>
      expense.name.toLowerCase().includes(event.target.value.toLowerCase())
    );

    setFilteredExpenses(results);
  };

  return (
    <>
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Type to search..."
        onChange={handleSearchExpense}
      />
      <ul className="list-group">
        {filteredExpenses.map((expense) => {
          const { id, name, cost } = expense;
          return <ExpenseItem key={id} id={id} name={name} cost={cost} />;
        })}
      </ul>
    </>
  );
};

export default ExpenseList;
