import React  from "react";
import styles from './singnIn.module.css'
import { Button } from "react-bootstrap";
const SignIn=()=>{
    return (
        <div>
             <Button classname={styles.signIn} style={{
                 fontSize: "25px",
                 marginRight: '50px',
                 borderRadius: '10px',
                 padding: '5px 25px 5px 25px',
                 textTransform: 'uppercase',
                 fontWeight: 'bold'

                 }} variant="dark">Sign In</Button>
        </div>
    )

}
export default SignIn;