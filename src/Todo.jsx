import React, { Component } from "react";

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

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      title: "",
      actionMessage: {
        show: false,
        txt: ""
      }
    };
  }

  componentDidMount() {
    this.setState({ title: "No Hooks no  Effects" });
  }

  componentDidUpdate(prevProps, prevState) {
    const { todos } = this.state;

    if (prevState.todos.length < todos.length) {
      this.setState({ actionMessage: { show: true, txt: "Task Added" } });

      setTimeout(
        () => this.setState({ actionMessage: { show: false, txt: "" } }),
        1000
      );
    }

    if (prevState.todos.length > todos.length) {
      this.setState({ actionMessage: { show: true, txt: "Task Removed" } });

      setTimeout(
        () => this.setState({ actionMessage: { show: false, txt: "" } }),
        1000
      );
    }
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
      <div className="form">
        <h5>
          {this.state.title}{" "}
          {this.state.actionMessage.show && (
            <span>{this.state.actionMessage.txt}</span>
          )}
        </h5>
        <form onSubmit={this.addToDo}>
          <input type="text" />
          <button type="submit">ADD</button>
        </form>

        <div>
          {this.state.todos.map(task => (
            <Task key={task.id}
              {...task}
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
