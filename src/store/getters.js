export default {
    unCompletedCount: function(state) {
        return state.todoList.filter(item => !item.completed).length
    },
    isShow(state) {
        return state.todoList.some(item => item.completed)
    }
}