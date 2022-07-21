import { useState } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App() {

  const [tasks, setTasks]= useState([
    {
        id:1,
        text: 'Doctors Appointment',
        day: 'July 25 at 3:40pm',
        reminder: true,
    },
    {
        id:2,
        text: 'Grocery',
        day: 'July 26 at 1:40pm',
        reminder: true,
    },
    {
        id:3,
        text: 'Gym',
        day: 'July 26 at 6:40am',
        reminder: false,
    },

  ]) 

  // delete task

  const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
  }
  // toggle swap reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }



  return (
    <div className="container">
    <Header  />
    <AddTask />
    {tasks.length>0 ? (     
      <Tasks tasks = {tasks} onDelete={deleteTask} onToggle = {toggleReminder} />) : ( 'No tasks pending'
    )}
    
    </div>
    
  );
}


export default App;
