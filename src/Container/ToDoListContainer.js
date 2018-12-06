import { connect } from 'react-redux'
import ToDoList from '../Component/ToDoList.js'

const mapDispatchToProps = (dispatch) => ({
    updateTodo: (id, status) => {
        fetch("http://localhost:8080/api/todos/" + id, {
            mode: 'cors',
            method: 'PATCH', 
            body: JSON.stringify({
                "status" : status
            }),
            headers: new Headers({ 'Content-Type': 'application/json'})
            })
            .then(res=>res.json())
            .then(({id, status, content}) => {
                dispatch({
                  type: 'TOGGLE_TODO',
                  payload: {id, status}
                })
              })
        }
})

export default connect(null, mapDispatchToProps)(ToDoList)