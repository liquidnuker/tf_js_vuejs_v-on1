// import "./js/vendor/vue.min.js";
// import Vue from 'vue';
// var Vue = require("./js/vendor/vue.min.js"); // ok
const Vue = require("./js/vendor/vue.min.js");

let app5 = new Vue({
  el: "#app-5",
  data: {
    message: "toReverse1",
    message2: "toUppercase"
  },

  methods: {
    reverseMessage: () => {
      // this.message = thismessage.split('').reverse().join('');
      app5.message = app5.message.split("").reverse().join("");
    },
    upperCaser: () => {
      // this.message2 = this.message2.toUpperCase();
      app5.message2 = app5.message2.toUpperCase();
    }
  }
});

