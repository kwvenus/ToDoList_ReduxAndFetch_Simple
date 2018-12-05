import React, { Component } from 'react'
import { connect } from 'react-redux'
import ToDoList from './ToDoList';
import ToDoListContainer from '../Container/ToDoListContainer';

export default class InputRow extends Component {

    clickAdd = () => {
        const {input} = this.refs
        this.props.addNewTodo(input.value)
        input.value = ''
        console.log(this.props.todos)
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