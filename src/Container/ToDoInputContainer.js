import React, { Component } from 'react'
import { connect } from 'react-redux'
import InputRow from '../Component/InputRow.js'

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({

    addNewTodo: newTodo => {
      const newTodoItem = {
        content: newTodo,
        status: "notComplete"
      }
      fetch("http://localhost:8080/api/todos", {
        mode: 'cors',
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(newTodoItem)
      })
      .then(res => res.json())
      .then(({id, status, content}) => {
        dispatch({
          type: 'ADD_TODO',
          payload: {id, status, content}
        })
      })
    },

    
  })


  export default connect(mapStateToProps, mapDispatchToProps)(InputRow)