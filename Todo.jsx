import { useState } from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";
import "./Todo.css";

export const Todo = () =>{
    const [inputValue, setInputValue] = useState("");
    const [task, setTask]  = useState([]);

    const handleInputChange = (value) => {
        setInputValue(value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if(!inputValue) return;

        if(task.includes(inputValue)) {
            setInputValue("");
            return;
        }; 

        setTask((prevTask) => [...prevTask, inputValue]);

        setInputValue("");

    };

    // todo handleDeleteTodo
    const handleDeleteTodo = (value) => {
        const updatedTask = task.filter((curTask) => curTask !== value);
        setTask(updatedTask);
    };

    // todo handleClearTodoData function
    const handleClearTodoData = () => {
        setTask([]);
    };

    return(
        <section className="todo-container">
            <header>
                <h1>Todo List</h1>
            </header>
            <section className="form">
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input type="text" className="todo-input" autoComplete="off" value={inputValue} 
                        onChange={(event) => handleInputChange(event.target.value) } />
                    </div>
                    <div>
                        <button type="submit" className="todo-btn" >Add Task</button>
                    </div>
                </form>
            </section>
            <section className="myUnOrdList">
                <ul>
                    {task.map((curTask, index) => {
                            return <li key={index} className="todo-item">
                                <span> {curTask} </span>
                                <button className="check-btn" >
                                    <MdCheck />
                                </button>
                                <button className="delete-btn" onClick={() => handleDeleteTodo(curTask)}>
                                    <MdDeleteForever />
                                </button>
                            </li>
                        })}
                </ul>
            </section>
            <section>
                <button className="clear-btn" onClick={handleClearTodoData}> Clear all</button>
            </section>
        </section>
    )
}