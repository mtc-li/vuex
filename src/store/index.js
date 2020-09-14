import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)
const state = {
    todoList: [
        { id: 1, name: '吃饭', completed: true },
        { id: 2, name: '睡觉', completed: true },
        { id: 3, name: '打豆豆', completed: false },
    ],
    index: 3
}
const user = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
const store = new Vuex.Store({
    strict: true,
    modules: {
        user: user
    }
})
export default store