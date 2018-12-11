import React, { Component } from "react";

const Task = props => {
  return (
    <div key={props.id}>
      <p style={{ textDecoration: props.done ? "line-through" : "none" }}>
        {" "}
        {props.title} ||{" "}
        <input
          checked={props.done}
          onChange={e => props.onComplete(props.id)}
          type="checkbox"
        />
                <span style={{background: "red"}}  onClick={e => props.onDelete(props.id)}
          
        >
          X
        </span>

      </p>
    </div>
  );
};

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  addToDo = e => {
    e.preventDefault();
    const toDo = { title: e.target[0].value, done: false, id: Date.now() };
    e.target.reset();
    this.setState(() => ({ todos: [...this.state.todos, toDo] }));
  };

  completeTask = id => {
    const newTodos = this.state.todos.map(task => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });

    this.setState(() => ({ todos: newTodos }));
  };

  removeTask = id => {
    this.setState(state => ({
      todos: state.todos.filter(task => task.id !== id)
    }));
  };

  render() {
    return (
      <div onSubmit={this.addToDo} className="form">
        <form on>
          <input type="text" />
          <button type="submit">ADD</button>
        </form>

        <div>
          {this.state.todos.map(e => (
            <Task
              {...e}
              onComplete={this.completeTask}
              onDelete={this.removeTask}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default TodoApp;
