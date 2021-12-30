import { React, useState, useEffect, useCallback } from 'react'
import AddData from './Components/Form';
import './App.css'
import { Button } from 'react-bootstrap';
import TaskCard from './Components/taskCard';
import Img from './Components/assets/Infinity-1s-200px.gif'
import useHttp from './Components/customHooks/http-hook';


const App = () => {
  const [task, setTask] = useState([]);
  const [loading, setLoading] = useState(true)
  const url = 'https://http-learning-b11d7-default-rtdb.firebaseio.com/Task.json';

  
  const  fetchRequest=useHttp()


 
  const sendData = async (data) => {

    const values = {
      url: url,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: data
    }

    // const {sendRequest: addData} = UseHttp();
    //  calling the 
    // const {sendRequest:fetchRequest} =
    



    fetchRequest(values)

    // console.log(output);


    // output.sendRequest(values);

    // const { sendRequest: getData } = UseHttp()
    // output.sendRequest({
    //   url: url
    // })




  }
  useEffect(() => {
    getData()

  }, [])
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
      setLoading(false)
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
            {/*  loading iumg of data  */}
            {
              loading && <div>
                <img src={Img} />
                <h2>
                  Loading....
                </h2>
              </div>


            }
            {/* here we will add loading image  */}

            {

              task.map((singleTask) => {
                console.log(" Current singleTask :", singleTask);
                return <li> <TaskCard id={singleTask.id} task={singleTask} /></li>

              })
            }
          </ul>
        </div>



      </header>

    </div>
  )
}
export default App;