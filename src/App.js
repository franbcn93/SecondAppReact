import "./App.css";
import React, { Component } from "react";
import tasks from "./sample/tasks.json";
import Tasks from "./components/Tasks";
import TaskForm from "./components/TaskForm";
import Posts from "./components/Posts";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  state = {
    tasks: tasks,
  };

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length,
    };
    this.setState({
      tasks: [...this.state.tasks, newTask],
    });
  };

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter((task) => task.id !== id);
    this.setState({ tasks: newTasks });
  };

  checkDone = (id) => {
    const newTasks = this.state.tasks.map((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    this.setState({ tasks: newTasks });
  };

  render() {
    return (
      <div>
        <Router>
          <Link to="/">Home</Link>
          <br />
          <Link to="/posts">Posts</Link>
          <h1 className="titulo">Práctica con React:</h1>
          <li>
            Lo que hacemos aquí es si escribes una tarea - descripción y pulsas
            enviar... añadirá un párrafo al final de los tres ya pintados
          </li>
          <br />
          <li>
            Si pulsas encima del checkbox... cambiará el estilo del párrafo
          </li>
          <br />
          <li>
            Si pulsas encima del botón X, lo que hace será eliminar el contenido
            del párrafo
          </li>
          <br />
          <li>
            Y si pulsas encima de Home, se irá a esta página o si pulsas encima
            de Posts, irá a una donde recoge unos datos posts de un json y
            devuelve una cadena de titulos y su cuerpo
          </li>
          <br />

          <Route
            exact
            path="/"
            render={() => {
              return (
                <div>
                  <TaskForm addTask={this.addTask} />
                  <h1>Tareas:</h1>
                  <Tasks
                    tasks={this.state.tasks}
                    deleteTask={this.deleteTask}
                    checkDone={this.checkDone}
                  />
                </div>
              );
            }}
          ></Route>
          <Route path="/posts" component={Posts} />
        </Router>
      </div>
    );
  }
}

export default App;
