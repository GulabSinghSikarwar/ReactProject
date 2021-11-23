import  React from "react";
import "./ExpenseFIilter.css"
const  Filter=(props)=>{
    const fileSelectValueHandeler=(event)=>{
        props.selectValueChangeHandeler(event.target.value)


    }
    return (
        <div  className='expenses-filter'>
          <div className='expenses-filter__control'>
              <label>Select The Year </label>
              <select value={props.selectedValue} onChange={fileSelectValueHandeler}>
                  <option value={'2018'}>2018</option>
                  <option value={'2019'}>2019</option>
                  <option value={'2020'}>2020</option>
                  <option value={'2021'}>2021</option>
                  <option value={'2022'}>2022</option>


              </select>
          </div>
        </div>
    )

}
export default  Filter;
