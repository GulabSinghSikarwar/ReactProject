import React  from "react";
import InputForm from "./InputForm/inputForm";
import ModalForBlankData from "./modals/modalForBlankData";
import NegativeDataModal from './modals/modalForNegativeData'

const Container=()=>{
return(
    <div >

<div>

    <div  style={{margin:"0px  0px 25px 0px" ,fontWeight:"bold",textTransform:"Uppercase"}}>

        WelCome Users
    </div>

    <ModalForBlankData/>
    <NegativeDataModal/>

    <InputForm/>
</div>
    </div>
)
}
export default Container;
