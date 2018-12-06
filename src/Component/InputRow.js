import React, { Component } from 'react'
import ToDoListContainer from '../Container/ToDoListContainer';

export default class InputRow extends Component {

    clickAdd = () => {
        const {input} = this.refs
        this.props.addNewTodo(input.value)
        input.value = ''
    }

  render() {
    return (
      <div>
        <input type='text' ref="input"/>
        <button onClick={this.clickAdd}>
            add
        </button>
        <ToDoListContainer todos={this.props.todos}/> 
      </div>
    )
  }
}