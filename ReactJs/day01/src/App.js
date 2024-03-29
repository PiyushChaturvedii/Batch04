import ExpenseItem from "./components/ExpenseItem";

const expenses = [
  { id: 'e1', title: 'Milk', amount: 100, date: new Date(2023, 10, 25) },
  { id: 'e2', title: 'Tea', amount: 200, date: new Date(2023, 11, 26) },
  { id: 'e3', title: 'Water', amount: 50, date: new Date(2023, 12, 27) },
  { id: 'e4', title: 'Sugar', amount: 400, date: new Date(2023, 13, 28) }
]


function App() {
  
  return (
    <div>
      <h2>Let's get started</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
      
    </div>
  );
}

export default App;
