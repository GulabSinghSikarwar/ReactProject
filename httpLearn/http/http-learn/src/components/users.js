import React from 'react'
import User from './user'
const Users=(props)=>{
    const  user=
    <ul   style={{justifyContent:'space-around' ,width:'900px' }}>  
        {
            props.UserList.map((user)=>{
                console.log(user.id);
                return <li  style={{display:'inline-block',marginRight:'30px',justifyContent:'space-around' ,alignItems:'left'}}> 
                { <User key={user.id}  id ={user.id} email={user.email} fname={user.fname} lname={user.lname}  /> }</li>
            })
        }
    </ul>

    return (
        <h2>
            Users List
           {
               user
           }
        </h2>

    )
}
export default Users;
