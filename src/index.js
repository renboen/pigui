//循环依赖 https://blog.csdn.net/alanfancy/article/details/84023940#
import Vue from "vue"
import App from './App.vue';
// let a = 1;
new Vue({
    el: "#app",
    components: {
        App
    },
    template: '<App/>'
});