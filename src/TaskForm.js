import { useState } from "react";

export default function TaskForm({onAdd}) {
    const [task, setTaskName] = useState('');
    function handleSubmit(ev) {
        ev.preventDefault();
        onAdd(task);
        setTaskName('');
    }
    return(
        <form onSubmit={handleSubmit}>
        <button class="bg-sky-500 hover:bg-sky-700 ...">+</button>
        <input
        type='text'
         value={task} 
         onChange={ev => setTaskName(ev.target.value)}
         placeholder="input text..."></input>
       </form>
       
    );
}