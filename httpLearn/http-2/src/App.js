import { React, useState } from 'react'
import AddData from './Components/Form';
import './App.css'
import { Button } from 'react-bootstrap';
import TaskCard from './Components/taskCard';


const App = () => {
  const [task, setTask] = useState([]);


  const sendData = async (data) => {

    const respons = await
      fetch('https://http-learning-b11d7-default-rtdb.firebaseio.com/Task.json',
        {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json'
          }
        })

    const responseJsonData = await respons.json()
    if (respons.ok) {
      alert('Form Submit')
      console.log(data);

    }





  }
  const getData = async () => {
    const response = await fetch('https://http-learning-b11d7-default-rtdb.firebaseio.com/Task.json')


    const jsonData = await response.json();

    const data = [];

    for (const key in jsonData) {
      data.push(
        {
          id: key,
          taskData: jsonData[key].task
        }
      )
    }
    if (response.ok) {
      alert("Data Retrieval successfull")
      console.log(data);
      setTask(data);

    }
  }

  return (
    <div>
      <header>
        <h1>
          Hello world
        </h1>
        <AddData sendData={sendData} />

        <div className='cardContainer'>

          <Button onClick={getData} style={{
            marginTop: '20px',
            alignItems: 'center',
            fontSize: '15px',
            fontWeight: 'bold',
            borderRadius: '10px'

          }} >Get Data</Button>
            <ul>


{
  
  task.map((singleTask) => {
    console.log( " Current singleTask :",singleTask);
    return <li> <TaskCard id={singleTask.id} task={singleTask}/></li>

  })
}   
  </ul>
        </div>
      


      </header>

    </div>
  )
}
export default App;