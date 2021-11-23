import React  ,{useState} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';


const ExpenseItems = ( props) => {
     const [ title,setTitle] =useState(props.title)
    const updateHandler=()=>{
        /*alert("Hey This Is a Update ")*/
        setTitle(" !!!!Update")
       

    }
    return (
        <div>
            hello items
            <Card style={{ width: '18rem' ,color:"black"}}>
               
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      
                     <div>
                     Title:  {title}

                     </div>
                      
                      
                     <div>
                     Price :  {props.price}

                     </div>
                      
                     <div>
                     Date :  {props.date}

                     </div>
                      
                     
                    </Card.Text>
                    <Button variant="primary" onClick={updateHandler}>Update </Button>
                </Card.Body>
            </Card>
        </div>
    )
}
export default ExpenseItems;
