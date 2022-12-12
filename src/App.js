import './App.css';
import React, { useState } from 'react';
import AddTask from './components/AddTask/AddTask';
import TaskList from './components/TaskList/TaskList';
import {tasks} from './components/data'
import Header from './components/Header';
import Search from './components/Search/Search';
// functional comp

function App() {
const [search, setSearch] = useState("")
const [newList, setNewList] = useState(tasks)
const addTask=(desc,user)=>{
console.log({description:desc,user,isDone:false});
setNewList([...newList,{description:desc,user,isDone:false,id:newList.length+1}])
  }
  function deleteTask(idDelete){
    setNewList(newList.filter((el)=>el.id!==idDelete))
  }
  function statusTask(id){
    setNewList(newList.map(el=>el.id!==id?el:{...el,isDone:!el.isDone}))
  }
  return (
    <div className="App">
      <Header/>
      <AddTask addTask={addTask} />
      <TaskList statusTask={statusTask} deleteTask={deleteTask} tasks={newList.filter((el)=>el.description.toLocaleLowerCase().includes(search.toLocaleLowerCase().trim()))} />
      <Search setSearch={setSearch}/>
    </div>
  );
}

export default App;