
import {React,useState}  from "react";
import  './InputForm.css'
import  Button from '../UI/Button'

const  InputForm=(props)=>{
    
 const [name,setName]=useState('')
 const [age,setAge]=useState('')
    let data={
     Name:name,
     Age:parseInt(age)
    }
    const nameChangeHandeler=(event)=>{

     setName(event.target.value)
   console.log(name);
    }
    const ageChangeHandeler=(event)=>{
     setAge(parseInt(event.target.value))


    }

    const onSubmitHandeler=()=>{

        console.log(data)

        // now We are suppose to pass this data to container
        props.onRecieveData(data);



    }




    return(
       <div>

               <div className="form-control">
                   <div className="form-control-elements">
                       <label>Name :</label>
                       <input type="text" name={"Name"} onChange={nameChangeHandeler}/>


                   </div>
                   <div className="form-control-elements">
                       <label>Age:</label>
                       <input type={"number"} name={"Age"}  onChange={ageChangeHandeler}/>


                   </div>
                   <div className={"form-control-elements"}>
                       <Button onSubmit={onSubmitHandeler}/>

                   </div>

               </div>

       </div>
    )
}
export default  InputForm;