import {React,useState}  from "react";
import InputForm from "./InputForm/inputForm";
import ModalForBlankData from "./modals/modalForBlankData";
import NegativeDataModal from './modals/modalForNegativeData'

const Container=()=>{
     const [isBlank,setIsBlank]=useState(false)
      const [isNeg,setIsNeg] =useState(false)

     const dataHandeler=(data)=>{

         console.log("We are in container and supposing that we have got data ");
         console.log(data)

     //    now we will change the state  of blank data
     if (data.Name.trim().length===0||data.Age.toString().trim().length===0)
     {
         console.log("Data is Blank!!")
         setIsBlank(true);
         console.log("State Updated")
     }
     if(data.Age<0)
     {
         console.log("Age is Negative!!")
         setIsNeg(true);
         console.log("State Updated")
     }

     }
    const onClearingBlankState=()=>{
         setIsBlank(!isBlank);

        console.log(" state changes !!  all is clear ")


    }
    const onClearingNegState=()=>{
        setIsNeg(!isNeg)

        console.log(" state changes !!  all is clear ")
    }
return(
    <div >

<div>

    <div  style={{margin:"0px  0px 25px 0px" ,fontWeight:"bold",textTransform:"Uppercase"}}>

        WelCome Users
    </div>

    <ModalForBlankData isBlankState={isBlank} clearState={onClearingBlankState}/>
    <NegativeDataModal isNegState={isNeg} clearState={onClearingNegState}/>

    <InputForm onRecieveData={dataHandeler}/>
</div>
    </div>
)
}
export default Container;
