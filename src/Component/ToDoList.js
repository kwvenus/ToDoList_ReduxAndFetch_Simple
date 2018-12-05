import React, { Component } from 'react'

export default class ToDoList extends Component {

  render() { 
    return (
      <div>
        {this.props.todos.map((todo) => <li key={todo.id}>{todo.content}</li>)}
      </div>
    )
  }

}
