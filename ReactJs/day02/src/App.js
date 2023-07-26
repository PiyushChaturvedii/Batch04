import React from 'react';
import Expenses from './components/Expenses/Expenses';

const App= () => {
 
  const expenses = [
    { id: 'e1', title: 'Milk', amount: 100, date: new Date(2030, 10, 20) },
    { id: 'e2', title: 'Tea', amount: 200, date: new Date(2033, 11, 20) },
    { id: 'e3', title: 'Water', amount: 50, date: new Date(2034, 12, 20) },
    { id: 'e4', title: 'Sugar', amount: 400, date: new Date(2035, 13, 20) }
  ];

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started !!!"),
  //   React.createElement(Expenses, { items: expenses })
  // );



  return (
    <div>
      <h2>Let's get started</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
