import Vue from "vue";
import Vuex from "veux";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        price: 100
    },
    getters: {
        originalPrice(state) {
            return state.price;
        },
        doublePrice(state){
            return state.price * 2;
        },
        tripleprice(state) {
            return state.price * 3;
        }
    }
});