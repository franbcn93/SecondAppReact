import React, { Component } from "react";

export default class Task extends Component {
  state = {
    title: "",
    description: "",
  };
  //   addTask = (title, description) => {
  //     console.log(title, description);
  //   };
  onSubmit = (e) => {
    this.props.addTask(this.state.title, this.state.description);
    e.preventDefault();
  };
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    // this.props.addTask("title one", "description one");
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Formulario de tareas:</h1>
        <input
          type="text"
          name="title"
          placeholder="Escribe una tarea"
          onChange={this.onChange}
          value={this.state.title}
        ></input>
        <br />
        <br />
        <textarea
          name="description"
          placeholder="Escribe una descripción"
          onChange={this.onChange}
          value={this.state.description}
        ></textarea>
        <br />
        <input type="submit" />
      </form>
    );
  }
}
