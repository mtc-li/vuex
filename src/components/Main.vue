<template>
    <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox">
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
        <li v-for="item in todoList" :key="item.id" :class="{completed:item.completed}">
            <div class="view">
                <input @change="changeStatus({id:item.id})" class="toggle" type="checkbox" :checked="item.completed">
                <label>{{item.name}}</label>
                <button class="destroy" @click="delTodo({id:item.id})"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
        </li>
        
    </ul>
    </section>

</template>

<script>
//导入mapState辅助函数
import {mapState,mapMutations} from 'vuex'
export default {
   
    computed: mapState('user',['todoList']),
   
    methods:{
        ...mapMutations('user',['delTodo','changeStatus'])
    }
    // methods:{
    //     delTodo(id){
    //         this.$store.commit('delTodo',{id})
    //     },
    //     changeStatus(id){
    //          this.$store.commit('changeStatus',{id})
    //     }
    // }
}
</script>

<style>

</style>