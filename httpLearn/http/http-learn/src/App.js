import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './components/users';
import { Button } from 'react-bootstrap';
import { useState, useEffect, useCallback } from 'react';

import Loading from './components/loading';
import AddForm from './components/AddForm';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getUserInformation =  async (UserInfo) => {
      const respone=await fetch('https://http-learning-b11d7-default-rtdb.firebaseio.com/AllUsers.json',
      {
        method: 'POST',
        body: JSON.stringify( UserInfo),
        headers:
        {
          'Content-Type':'application/json '
        }

      })
      const data = await respone.json();
      console.log(data);


  }



  /*const fetchApiHandeler=()=>{
   


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
  }*/

  const fetchApiHandeler = useCallback(async () => {
    setError(null)
    setIsLoading(true)
    try {

      // https://http-learning-b11d7-default-rtdb.firebaseio.com/AllUsers.json
      // const response = await fetch('https://reqres.in/api');
      const response = await fetch('https://http-learning-b11d7-default-rtdb.firebaseio.com/AllUsers.json');
      // if  response is not good 
      if (!response.ok) {

        throw new Error("Something Went Wrong !!!!")

      }

      const jsonData = await response.json();
      console.log(jsonData);
      const loadedData=[];
      for ( const key in jsonData)
      {
        loadedData.push({
          id:key,
          fname:jsonData[key].firstName,
          lname:jsonData[key].lastName,
          email:jsonData[key].email


        })
      }

      // const simpleData = jsonData.data.map((user) => {

      //   return {
      //     id: user.id,
      //     email: user.email,
      //     fname: user.first_name,
      //     lname: user.last_name


      //   };
      // })

      setIsLoading(false)
      // setUsers(simpleData);
      setUsers(loadedData);
      console.log(loadedData);

    } catch (error) {
      setError(error.message)
      setIsLoading(false)

    }




  }, [])
  useEffect(() => {
    fetchApiHandeler()
  }, [fetchApiHandeler])


  return (
    <header className='App-header'>
      <h1>
        Hello World


      </h1>
      <AddForm getUserInformation={getUserInformation} />
      <Button onClick={fetchApiHandeler}> Get Users</Button>
      {isLoading && <Loading />}
      {
        !(isLoading) && <h3> {error} </h3>
      }

      {
        (!isLoading) && <Users UserList={users} />
      }
    </header>
  );
}

export default App;
