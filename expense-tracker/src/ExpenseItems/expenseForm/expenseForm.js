import { React, useState } from "react"

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Form } from 'react-bootstrap';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("")
  const [enteredPrice, setEnteredPrice] = useState("")
  const [enteredDate, setenteredDate] = useState("")
  
  const submitHandeler = (event) => {
    event.preventDefault()
    const newExpenses={
      title:enteredTitle,
      price:enteredPrice,
      date:new Date(enteredDate)
    }
    console.log(`Inside Form ${newExpenses}`)
    console.log(newExpenses);
    props.onSaveChanges(newExpenses)




  }
  const titleChangeHandeler=(event)=>{
    setEnteredTitle(event.target.value)
    console.log(enteredTitle );

  }
  const priceChangeHandeler=(event)=>{
    setEnteredPrice(event.target.value)
    console.log(enteredPrice );

  }
  const dateChangeHandeler=(event)=>{
    setenteredDate(event.target.value)
console.log(enteredDate);
  }

  return (
    <div>

      <Form onSubmit={submitHandeler} style={{ backgroundColor: "white", color: "black", padding: "25px", borderRadius: "5%" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title </Form.Label>
          <Form.Control type="text" onChange={titleChangeHandeler} placeholder="Enter Title " />
          <Form.Text className="text-muted">
            Please Enter the title of expenses
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price </Form.Label>
          <Form.Control type="number" onChange={priceChangeHandeler} placeholder="Enter Price " />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Date </Form.Label>
          <Form.Control type="date"  onChange={dateChangeHandeler} placeholder="Enter Price " />
        </Form.Group>


        <Button variant="primary" type="submit" onSubmit={submitHandeler}>
          Submit
        </Button>
      </Form>
    </div>
  )
}
export default ExpenseForm;
