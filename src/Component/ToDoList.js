import React, { Component } from 'react'
import ToDoListCSS from './ToDoList.css'

export default class ToDoList extends Component {

  
  checkStatus= (todo) => {
    let itemStatus = "notComplete"
    if (todo.status === "completed"){
        todo.status = "notComplete"
    } else {
      todo.status = "completed"
      itemStatus = "completed"
    }
    return itemStatus
  }

  render() {
    return (
      <div>
        {this.props.todos.map((todo) => 
        <li key={todo.id} class={this.checkStatus(todo)} onClick={ () => this.props.updateTodo(todo.id, this.checkStatus)}>{todo.content}</li>)}
      </div>
    )
  }

}
