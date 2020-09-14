export default {
    clearCompletedAsync(context) {
        setTimeout(() => {
            context.commit('clearCompleted')
        }, 1000)
    }
}