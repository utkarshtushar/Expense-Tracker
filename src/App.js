import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';


const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Laptop',
    amount: 40000.00,
    date: new Date(2019, 9, 14),
  },
  { id: 'e2', title: 'College Fee', amount: 79800.50, date: new Date(2019, 7, 12) },
  {
    id: 'e3',
    title: 'Room-Rent',
    amount: 18000.00,
    date: new Date(2019, 10, 1),
  },
  {
    id: 'e4',
    title: 'Room-Rent',
    amount: 60000.00,
    date: new Date(2020, 0, 1),
  },

  { id: 'e5', title: 'College Fee', amount: 120000.00, date: new Date(2020, 3, 12) },
  {
    id: 'e6',
    title: 'Tour',
    amount: 25000.00,
    date: new Date(2020, 9, 15),
  },
  {
    id: 'e7',
    title: 'Room-Rent',
    amount: 50000.00,
    date: new Date(2021, 1, 10),
  },
  { id: 'e8', title: 'College Fee', amount: 80000.00, date: new Date(2021, 4, 12) },
  {
    id: 'e9',
    title: 'Books',
    amount: 15000.00,
    date: new Date(2021, 7, 10),
  },
  {
    id: 'e10',
    title: 'Room-Rent',
    amount: 60000.00,
    date: new Date(2022, 0, 1),
  },

];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);


  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    // console.log('In App.js');
    // console.log(expense);
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;