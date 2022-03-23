<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p>{{ a }}</p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import dayjs from "dayjs"

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return {
      a: ""
    }
  },
  mounted(){
    console.log(dayjs("2022-3-23 07:00").tz(dayjs.tz.guess()).format('YYYY-MM-DD HH:mm:ss'), dayjs.tz.guess())
    this.a = this.$dayjs().format("YY||DD||MM")
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
