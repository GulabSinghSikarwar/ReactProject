import {React,useRef} from 'react'
import { Form, Row, Button } from 'react-bootstrap'
import './Form.css'

const AddData = (props) => {

    const  task=useRef('');

    const submitFormHandeler=(event)=>{

        event.preventDefault();
        const data={
            task:task.current.value
        }
        // console.log(data);
        props.sendData(data)


    }


     

    return (
        <div className='form'>
            <Form style={{ width: '35rem' }} onSubmit={submitFormHandeler} >
                <Row className="mb-3">
                   
                    <Form.Group style={{ marginTop: '50px' }} md="4" controlId="validationCustom02">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                              ref={task}
                            placeholder="Last name"
                            defaultValue=""
                        />

                    </Form.Group>

                </Row>
           
                <Button style={{ marginTop: '50px', alignItems: 'center' }} type="submit">Submit form</Button>
            </Form>
        </div>
    )

}
export default AddData