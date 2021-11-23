import logo from './logo.svg';
import {useState} from 'react';

import './App.css';
import ExpenseItems  from './ExpenseItems/ExpenseItems';
import ExpenseForm  from './ExpenseItems/expenseForm/expenseForm';

function App() {
 
   const [title,setTitle]=useState()
   const [date ,setDate]=useState()
   const [price ,setPrice]=useState()

   const  expense=[
    {title:"MacBook pro ", price:"$2500",date:"30 march 2021"},
    {title:"Investing  pro ", price:"$22500",date:"25 July 2021"},
    {title:" I Phone", price:"$12500",date:"10 April 2021"},
    {title:" I Pad ", price:"$2500",date:"20 march 2021"}
  ]
    const [expenses ,setExpenses]=useState(expense)

    const saveChangeHandeler=(data)=>{
      console.log("Inside APP JS and Data is ")
      console.log(data);
      setExpenses((prevExpenses)=>{
        return [...prevExpenses,data]
      })
  
    
    }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Branch Change Checker 
        </a>
    
        <ExpenseForm onSaveChanges={saveChangeHandeler}/>
        {expenses.map((expense)=>{
          return <ExpenseItems title={expense.title} price={expense.price} date={expense.date}/>
        })}
        {/* <ExpenseItems title ={expense[0].title} price={expense[0].price} date={expense[0].date} />
        <ExpenseItems title ={expense[1].title} price={expense[1].price} date={expense[1].date} />
        <ExpenseItems title ={expense[2].title} price={expense[2].price} date={expense[2].date} />
        */}

 </header>
    </div>
  );
}

export default App;
