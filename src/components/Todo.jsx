import React, {useState} from 'react';
import "../assets/TodoStyle.css"


const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('')
    const generateId = () => Math.floor(Math.random() * 1000);
    const handleOnInputChange = (e) => {
        setInput(e.target.value)
    }
    const handleOnSubmitClick = () => {
        setTodos(todos => {
            return [...todos, {
                id: generateId(),
                todo: input
            }]
        })
        setInput('')
    }
    const handleOnCloseClick = (id) => {
        setTodos(todos => {
            return todos.filter(todo => todo.id !== id)
        })
    }
    return (
        <div className={'container'}>
            <ul className={"todo-list"}>
                {
                    todos.map(({id, todo}) => {
                        return <li className={"todo"} key={id}>
                            <span>{todo}</span>
                            <button className={"close"} onClick={() => handleOnCloseClick(id)}>X</button>
                        </li>
                    })
                }
            </ul>
            <input className={"input"} type={"text"} value={input} placeholder={"type your todo"}
                   onChange={handleOnInputChange}/>
            <button className={"button"} onClick={handleOnSubmitClick}>Submit</button>
        </div>
    );
};

export default Todo;