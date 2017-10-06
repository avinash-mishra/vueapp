<template>
  <div id="vueIdName">
      <h1>{{title}}</h1>
      This is input: <input type="text" v-model="title"><br>
      <p>{{user.firstName}}</p>
      <p v-text="user.lastName"></p>
      <p v-if="showName">{{user.conditional}}</p>
      <p v-else>Nobody</p>
      <ul>
        <li v-for="item in items">{{item.title}}</li>
      </ul>
      <button v-on:click="greet">Say greeting</button>
      <br>
      <br>
      <button v-on:click="greet('hello world')">Say hello world</button>
      <hr>
      <label>first Name: </label><input type="text" v-model="user.firstName">
      <label>last Name: </label><input type="text" v-model="user.lastName">
      <h3>{{fullname}}</h3>
      <h1>{{msg}}</h1>
  </div>
</template>
<script>
export default {
  name: "vueIdName",
  props: {
    msg: {
      type: String,
      default: 'Foobar'
    }
  },
  data: () => ({
      title: "Hello world",
      user: {
        firstName: "John",
        lastName: "Doe",
        conditional: "avi"
      },
      showName: false, // "Nobody" will be displayed
      items: [
        { title : 'item one'},
        { title: 'item two'},
        { title: 'item three'}
      ]
  }),
  methods: {
    greet() {
      alert("hello");
    },
    greet(greeting){
      alert(greeting);
    }
  },
  computed: {
    fullname: function () {
      return this.user.firstName+' '+this.user.lastName;
    }
  }
}
</script>
<style scoped>
</style>
