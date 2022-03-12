import Vue from 'vue';
import Vuex from 'vuex';
// import * as getters from './getters';
// import * as mutations from './mutations';
import todoApp from './modules/todoApp'

Vue.use(Vuex);

// Local 속성은 따로 뺀다.
export const store = new Vuex.Store({
    modules: {
        todoApp,
    }
    // 
    // state: {
    //     todoItems: storage.fetch(),
    // },
    // getters,
    // // getters: {
    // //     // storedTodoItems(state) {
    // //     //     return state.todoItems;
    // //     // },
    // // },
    // mutations,
    // // mutations: {
    // //     // addOneItem(state, todoItem) {
    // //     //     const obj = {completed: false, item: todoItem};
    // //     //     localStorage.setItem(todoItem, JSON.stringify(obj));
    // //     //     // this.todoItems.push(obj);
    // //     //     state.todoItems.push(obj);
    // //     // },
    // //     // removeOneItem(state, payload) {
    // //     //     localStorage.removeItem(payload.todoItem.item);
    // //     //     state.todoItems.splice(payload.index, 1);
    // //     // },
    // //     // toggleOneItem(state, payload) {
    // //     //     state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    // //     //     localStorage.removeItem(payload.todoItem.item);
    // //     //     localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    // //     // },
    // //     // clearAllItems(state) {
    // //     //     localStorage.clear();
    // //     //     state.todoItems = [];
    // //     // }
    // // }
});