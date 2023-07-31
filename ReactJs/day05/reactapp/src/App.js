import React, {useState} from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  { id: 'e1', title: 'Milk', amount: 100, date: new Date(2020, 10, 20) },
  { id: 'e2', title: 'Tea', amount: 200, date: new Date(2020, 11, 20) },
  { id: 'e3', title: 'Water', amount: 50, date: new Date(2022, 12, 20) },
  { id: 'e4', title: 'Sugar', amount: 400, date: new Date(2022, 13, 20) }
];



const App= () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }
 
 
 
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started !!!"),
  //   React.createElement(Expenses, { items: expenses })
  // );



  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
