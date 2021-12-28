import {React,useRef} from "react";
import { Form, Button ,Row} from 'react-bootstrap'
import './addForm.css'

const AddForm = (props) => {
    const firstName=useRef('')
    const lastName=useRef('')
    const email =useRef('')

    const formSubmitHandeler=(event)=>{
        event.preventDefault();
        console.log("submit");

        const userInfo={
            firstName:firstName.current.value,
            lastName:lastName.current.value,
            email:email.current.value
        }
        // console.log(userInfo);
        props.getUserInformation(userInfo)


    }
    

    
    return (

        <div className="FormContainer">
          


            <Form  onSubmit={formSubmitHandeler}>
      <Row className="mb-3">
        <Form.Group style={{marginTop:'45px'}}  md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            ref={firstName}
            placeholder="First name"
            defaultValue=""
           
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group style={{marginTop:'45px'}} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            ref={lastName}
            placeholder="Last name"
            defaultValue=""
          />
       
        </Form.Group>
        
      </Row>
      <Form.Group style={{marginTop:'45px'}} md="4" controlId="validationCustom02">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            required
            type="text"
            ref={email}
            placeholder="E-mail"
            defaultValue=""
          />
       
        </Form.Group>
      <Button  style={{marginTop:'45px',alignItems:'center',marginLeft:'105px'}} type="submit">Submit form</Button>
    </Form>
        </div>
    )
}
export default AddForm;
