import logo from './logo.svg';
import './App.css';
import TaskForm from './TaskForm';
import TaskName from './TaskName';
import { useEffect, useState } from 'react';

function App() {
const [tasks, setTasks] = useState([]);

useEffect( () => {
  if (tasks.length === 0) { return; };
  localStorage.setItem('tasks', JSON.stringify(tasks));
  
}, [tasks]);
useEffect( () => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  setTasks(tasks)
}, []);
function addTasks(taskName) {
  setTasks(previousTasks => {
    return [...previousTasks, {name:taskName, done:false}];
  })
}

  return (
    <div>
       <TaskForm onAdd={addTasks}/>
       {tasks.map(task => (
          <TaskName {...task}/>
       ))}
       
    </div>
  );
}

export default App;
