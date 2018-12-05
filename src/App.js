import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoInputContainer from './Container/ToDoInputContainer';


class App extends Component {

  
  render() {
    return (
      <div className="App">
        <ToDoInputContainer/>
      </div>
    );
  }
}

export default App;
