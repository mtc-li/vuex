export default {
    addTodo(state, payload) {
        state.todoList.push({
            id: ++state.index,
            name: payload.todoName,
            completed: false
        })
    },
    delTodo(state, payload) {
        let idx = state.todoList.findIndex(item => item.id === payload.id)
        state.todoList.splice(idx, 1)
    },
    changeStatus(state, payload) {
        let idx = state.todoList.findIndex(item => item.id === payload.id)
        state.todoList[idx].completed = !state.todoList[idx].completed
    },
    clearCompleted(state) {
        //保留没有完成的
        state.todoList = state.todoList.filter(item => !item.completed)
    }
}