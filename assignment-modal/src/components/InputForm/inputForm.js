
import {React,useState}  from "react";
import  './InputForm.css'
import  Button from '../UI/Button'

const  InputForm=()=>{
    
 const [name,setName]=useState('')
 const [age,setAge]=useState('')
    let data={
     Name:name,
     Age:age
    }
    const nameChangeHandeler=(event)=>{
     setName(event.target.value)
    }




    return(
        <div className="form-control">
            <div className="form-control-elements">
                <label>Name :</label>
                <input type="text" name={"Name"} onChange={nameChangeHandeler}/>


            </div>
            <div className="form-control-elements">
                <label>Age:</label>
                <input type={"number"} name={"Age"}/>


            </div>
            <div className={"form-control-elements"}>
                <Button/>

            </div>

        </div>
    )
}
export default  InputForm;