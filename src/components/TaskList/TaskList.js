import React from 'react'
import Task from '../Task/Task'

const TaskList = ({tasks, deleteTask,statusTask}) => {
  return (
    <div>
       {tasks.map(el=> <Task key={el.id} el={el} deleteTask={deleteTask} statusTask={statusTask}/>)}
    </div>
  )
}

export default TaskList