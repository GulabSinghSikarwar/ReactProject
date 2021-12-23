import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './components/users';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
function App() {
  const [users,setUsers]=useState([]);
  const fetchApiHandeler=()=>{
   


    fetch('https://reqres.in/api/users').then((response)=>{
      return response.json()
    }).then((jsonData)=>{
      
      const simpleData=jsonData.data.map((user)=>{
      
        
        return {
         id:user.id,
         email:user.email,
         fname:user.first_name,
         lname:user.last_name


        };

      })

      setUsers(simpleData);
      
    })
  }

  return (
   <header className='App-header'>
     <h1>
       Hello World

     </h1>
     <Button> Get Users</Button>
     
     <Users USersList={users}/>
   </header>
  );
}

export default App;
