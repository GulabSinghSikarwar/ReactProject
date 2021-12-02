import React from "react";
import styles from './user.module.css'


const Users=(props)=>{

    return(
        <div className={styles.card}>
            <div className={styles.heading}>
              <h1>
                  User Info
              </h1>
            </div>
           <h1>
             <div>  Name :{props.Name}</div>

               <div>  Age :{props.Age}</div>



           </h1>

        </div>
    )
}
export  default Users;
