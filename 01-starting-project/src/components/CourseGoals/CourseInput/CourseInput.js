import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

// just check test 

// just check which is root and which is local

const CourseInput = props => {

  const [enteredValue, setEnteredValue] = useState('');
   const [isValid,setIsValid]=useState(true)

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    if(event.target.value.trim().length>0)
    {
        setIsValid(true)
    }


  };

  const formSubmitHandler = event => {
    event.preventDefault();

      if(enteredValue.trim().length===0){
          setIsValid(false)
          return
      }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid?'invalid':''}`}>
        <label
            style={{color:isValid?"black":"maroon"}}>Course Goal</label>
        <input type="text"

               onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
