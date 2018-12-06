const initialState = {
    todos: []
  }

  export default (state = initialState, { type, payload }) => {
    switch (type) {
      case "ADD_TODO":
        return {
          todos: [...state.todos, payload]
        }
  
      case "UPDATE_TODOS":
        return {
          todos: payload
        }

      case "TOGGLE_TODO":
        let newTodos = state.todos.map(({status, id, content}) =>{
          if(payload.id === id) {
            const newStatus = status === 'completed' ? 'active' : 'completed'
            return {status: newStatus, id: id, content: content}
          }
          return {status, id, content}
        })
        return {
          todos: newTodos
        }
      

      default:
        return state
    }
  }
  