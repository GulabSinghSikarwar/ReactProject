import React from 'react'
import Img from './programmer.png'
import {Button, Card} from 'react-bootstrap'
const User=(props)=>{

    return (

        <Card style={{ width: '25rem' ,color:'black' }}>
  <Card.Img variant="top" src={Img} />
  <Card.Body>
    <Card.Title><h3> {props.email}</h3></Card.Title>
    <Card.Text >
<h3>User_Id: {props.id}</h3>
<h3> First Name:  {props.fname}</h3>
<h3> Last Name :{props.lname}</h3>

    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

    )
}
export default User;
