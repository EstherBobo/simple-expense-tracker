import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMYEXPENSES = [
  { id: "e2", 
    title: "Rent", 
    amount: 8000, 
    date: new Date(2022, 6, 12) },
  {
    id: "e3",
    title: "Matress",
    amount: 6999.99,
    date: new Date(2022, 7, 28),
  },
  {
    id: "e4",
    title: "Bed",
    amount: 8000,
    date: new Date(2022, 8, 12),
  },
  { id: "e5", 
    title: "Shopping", 
    amount: 3000, 
    date: new Date(2022, 9, 12) },

  { id: "e6", 
    title: "Electricty", 
    amount: 400.00, 
    date: new Date(2022, 10, 12) },
];

const App = () => {
  const [expenses, setExpense] = useState(DUMMYEXPENSES);

  const addExpenseHandler = (expense) => {
    setExpense((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
