import React, { useState, useEffect } from "react";

const Task = props => {
  return (
    <div >
      <p style={{ textDecoration: props.done ? "line-through" : "none" }}>
        {" "}
        {props.title} ||{" "}
        <input
          checked={props.done}
          onChange={e => props.onComplete(props.id)}
          type="checkbox"
        />
        <span
          style={{ background: "red" }}
          onClick={e => props.onDelete(props.id)}
        >
          X
        </span>
      </p>
    </div>
  );
};

function TodoApp() {
    const [title, setTitle] = useState("");

    useEffect(()=> {
        setTitle(prev => "Hooks & Effects")
    });

    const [actionMessage, updateActionMessage] = useState({show: false, txt: ""});

    const [todos, updateTodos] = useState([]);

    useEffect((a, b, c)=> {
        console.log(todos)

    },[todos])

    const addToDo = e => {
        e.preventDefault();
        const newToDo = { title: e.target[0].value, done: false, id: Date.now() };
        updateTodos(prevTodos => [...prevTodos, newToDo])
        
    }

    const onCompleteTask = id => {
        const newTodos = todos.map(task => {
                  if (task.id === id) {
                    task.done = !task.done;
                  }
                  return task;
                });
        updateTodos(prevTodos => newTodos)
    }


    const onRemoveTask = id => {
        updateTodos(prevTodos => prevTodos.filter(task => task.id !== id))

    }




    
    return (
      <div className="form">
        <h5>
          {title}
          {actionMessage.show && (
            <span>{actionMessage.txt}</span>
          )}
        </h5>
        <form onSubmit={addToDo}>
          <input type="text" />
          <button type="submit">ADD</button>
        </form>

        <div>
          {todos.map(task => (
            <Task key={task.id}
              {...task}
              onComplete={onCompleteTask}
              onDelete={onRemoveTask}
            />
          ))}
        </div>
      </div>
    );
  }

export default TodoApp;
