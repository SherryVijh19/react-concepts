import { useState } from "react";

function ToDoList() {

const [task,setTask]=useState('');
const [todos,setTodos]=useState([]);

const handleAdd=()=>{

    if(!task.trim()) return  alert('Please enter a task');
    setTodos([...todos,{text:task,completed:false}]);
    setTask('');

}

const handleDelete=(index)=>{

    const updated=todos.filter((_,i)=>i!=index);
    setTodos(updated);

}

const toggleComplete=(index)=>{

    const updated=[...todos];
    updated[index].completed=!updated[index].completed;
    setTodos(updated);

}

return(
    <div className="max-w-md mx-auto p-6">
        <h1 className="text-sm mb-4 font-bold"> TO-DO-LIST </h1>
        <div className="flex gap-2 mb-4">
            <input type="text" name="task" value={task} onChange={e=>setTask(e.target.value)} placeholder="Enter a task" className="border p-2 w-full" />
        <button onClick={handleAdd} className="bg-green-500 text-white px-3 py-2 rounded">Add</button>
        </div>

        <ul className="space-y-2">
            {todos.map((todo,index)=>(
                <li key={index} className="flex justify-between items-center border p-2 rounded">
                <span onClick={()=>toggleComplete(index)} className={`cursor-pointer ${todo.completed? 'line-through text-gray-500' :''}`}>
                    {todo.text}
                </span>
                <button onClick={()=>handleDelete(index)} className="text-red-500 hover:text-red-700">Delete</button>
                </li>
            ))}
        </ul>
    </div>
);
}

export default ToDoList;