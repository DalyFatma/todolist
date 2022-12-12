import React from 'react'

function Task({el,deleteTask,statusTask}) {
  return (
    <div>
        <h1>
          {el.description}
        </h1>
        <h2>
          {el.user}
          </h2>
          <i className='fa-solid fa-trash' onClick={()=>deleteTask(el.id)}></i>
          <input checked={el.isDone}  onClick={()=>statusTask(el.id)}></input>
    </div>
  )
}

export default Task