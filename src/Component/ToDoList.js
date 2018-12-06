import React, { Component } from 'react'
import './ToDoList.css'

export default class ToDoList extends Component { 

  render() {
    return (
      <div>
        {this.props.todos.map((todo) => 
        <li key={todo.id} onClick= { () => {
          this.props.updateTodo(todo.id, todo.status)
          }
        } className={todo.status}>
        {todo.content}</li>)}
      </div>
    )
  }

}
