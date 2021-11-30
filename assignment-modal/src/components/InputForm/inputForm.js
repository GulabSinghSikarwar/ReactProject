
import {React,useState}  from "react";
import  './InputForm.css'
import  Button from '../UI/Button'

const  InputForm=()=>{
    



    return(
        <div className="form-control">
            <div className="form-control-elements">
                <label>Name :</label>
                <input type="text" name={"Name"}/>


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