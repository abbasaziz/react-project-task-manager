import { useState } from 'react';
import Header from './components/Header'
import Tasks from './components/Tasks'


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

  return (
    <div className="container">
      <Header  />
      <Tasks tasks = {tasks} />
    </div>
    
  );
}


export default App;
