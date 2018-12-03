import React, { Component } from 'react'

export default class InputRow extends Component {

    state = {toDo:''}

    clickAdd = () => {
        this.props.onAdd(this.state.toDo)
        this.setState({toDo: ''})
    }

    addToDoList = (input) => {
        this.setState({toDo: input.target.value})
    }

  render() {
    return (
      <div>
        <input type='text' onChange={this.addToDoList} value={this.state.toDo}/>
        <button onClick={this.clickAdd}>
            add
        </button>
      </div>
    )
  }
}
