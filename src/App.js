import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputRow from './Component/InputRow';
import ToDoList from './Component/ToDoList';

class App extends Component {

  state = {input:'', toDoList:new Array(0).fill(0)}

  appendToDoList = (todo) => {
    var list=this.state.toDoList
    list.push(todo)
    this.setState({input:todo, toDoList:list})
  }

  render() {
    return (
      <div className="App">
        <InputRow onAdd={this.appendToDoList}/>
        {this.state.toDoList.map(
          each => <ToDoList onShowToDoList = {each}/> 
          )}
      </div>
    );
  }
}

export default App;
