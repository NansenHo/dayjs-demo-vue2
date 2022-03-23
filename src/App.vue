<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p>localTime: {{ localTime }}</p>
    <p>utcTime: {{ utcTime }}</p>
    <p>timezoneOffset: {{ timezoneOffset }}</p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return {
      localTime: "",
      utcTime: '2021-01-01T08:00:00',
      timezoneOffset: "",

    }
  },
  mounted(){
    // console.log(dayjs("2022-3-23 07:00").tz(dayjs.tz.guess()).format('YYYY-MM-DD HH:mm:ss'), dayjs.tz.guess())
    this.localTime = this.$dayjs().format("YY-MM-DD")
    this.timezoneOffset = this.$dayjs().utcOffset()
    this.localTime = this.$dayjs(this.utcTime).utc().format("YY-MM-DD/HH:mm:ss")
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
