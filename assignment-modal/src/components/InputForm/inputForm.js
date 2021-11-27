
import React  from "react";
import  './InputForm.css'

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

        </div>
    )
}
export default  InputForm;