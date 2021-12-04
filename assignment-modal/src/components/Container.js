import {React,useState,Fragment}  from "react";
import InputForm from "./InputForm/inputForm";
import ModalForBlankData from "./modals/modalForBlankData";
import NegativeDataModal from './modals/modalForNegativeData'
import Users from "./users/users";


const Container=()=>{
    var id=0;

     const [isBlank,setIsBlank]=useState(false)
      const [isNeg,setIsNeg] =useState(false)
    const users=[];

     const [newUsers,setNewUsers]=useState(users)

     const dataHandeler=(data)=>{

         console.log("We are in container and supposing that we have got data ");
         console.log(data)


     //    now we will change the state  of blank data
     if (data.Name.trim().length===0||isNaN(data.Age))
     {
         console.log("Data is Blank!!")
         setIsBlank(true);
         console.log("State Updated and your blank state is :")
         console.log("")
         return;
     }
     if(data.Age<0)
     {
         console.log("Age is Negative!!")
         setIsNeg(true);
         console.log("State Updated")
         return;
     }
        if(isBlank===false && isNeg===false)
        {
            console.log(`
            isBlank : ${isBlank}
            isNeg : ${isBlank}

            `)
            setNewUsers((prev)=>{
                return[...prev,data]
            })
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
    const deleteCard=(index)=>{
        var afterDeletionUsers=newUsers.filter((value)=>{
            return value.Age!=newUsers[index].Age
        })
        setNewUsers(afterDeletionUsers)

        console.log(afterDeletionUsers)
    }
return(
   <Fragment>

       <ModalForBlankData isBlankState={isBlank} clearState={onClearingBlankState}/>
       <NegativeDataModal isNegState={isNeg} clearState={onClearingNegState}/>

       <InputForm onRecieveData={dataHandeler}/>


       {


           newUsers.map((user)=>{
               return  <Users Name={user.Name}
                              id={id++}
                              deleteCard={deleteCard}
                              Age={user.Age}
                              key={parseInt((Math.random()*100000000000000000)).toString()}/>

           })}
   </Fragment>
)
}
export default Container;
