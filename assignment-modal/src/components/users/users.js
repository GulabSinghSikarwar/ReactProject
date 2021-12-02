import React from "react";
import styles from './user.module.css'


const Users=(props)=>{
    const deleteCard=()=>{
        props.deleteCard(props.id)
    }

    return(
        <div className={styles.card} onClick={deleteCard}>
            <div className={styles.heading}>
              <h1>
                  User Info
              </h1>
            </div>
           <h1>
             <div>  Name :{props.Name}</div>

               <div>  Age :{props.Age}</div>
               <div>  Id :{props.id}</div>



           </h1>

        </div>
    )
}
export  default Users;
