<template>
   <header class="header">
        <h1>todos</h1>
        <input class="new-todo" @keyup.enter="addTodo" v-model="todoName" placeholder="What needs to be done?" autofocus>
    </header>
</template>

<script>
export default {
    data(){
        return {
            todoName:''
        }
    },
    methods:{
        addTodo(){
            this.$store.commit('user/addTodo',{todoName:this.todoName})
            this.todoName=''
        }
    }
}
</script>

<style>

</style>