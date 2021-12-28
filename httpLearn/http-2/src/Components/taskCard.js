import React from "react";
import './taskCard.css'
const TaskCard=(props)=>{
    return (
        <div className="card">
            {
               props.task.taskData
            }

        </div>
    )
}
export default TaskCard;
