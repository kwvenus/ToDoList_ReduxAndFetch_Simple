import React, { Component } from 'react'
import { connect } from 'react-redux'
import ToDoList from '../Component/ToDoList.js'

const mapDispatchToProps = (dispatch) => ({
    updateTodo: (id, status) => {
        fetch("http://localhost:8080/api/todos/" + id, {
            mode: 'cors',
            method: 'PUT', 
            body: JSON.stringify({
                "status" : status
            }),
            headers: new Headers({ 'Content-Type': 'application/json'})
            })
            .then(res=>res.json())
            .then(res => console.log(res))
        }  
})

export default connect(null, mapDispatchToProps)(ToDoList)