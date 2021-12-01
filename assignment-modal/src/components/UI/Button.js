import React from "react";
import styles from './Button.module.css'

const Button=(props)=>{
     const onSubmitHandeler=(event)=>{

         event.preventDefault();
         props.onSubmit();



     }

return(
    <div>
     <form onSubmit={onSubmitHandeler}>
         <button type={"submit"} className={styles.button} >SUBMIT</button>
     </form>
    </div>
)
}
export default  Button;
