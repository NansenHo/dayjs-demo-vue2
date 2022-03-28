<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p>utcTime: {{ utcTime }}</p>
    <p>localTime: {{ localTime }}</p>
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
      utcTime: '2021-08-31 16:42:08',
      localTime: "",
      timezoneOffset: "",

    }
  },
  mounted(){
    // console.log(dayjs("2022-3-23 07:00").tz(dayjs.tz.guess()).format('YYYY-MM-DD HH:mm:ss'), dayjs.tz.guess())
    
    // this.localTime = this.$dayjs().format("YY-MM-DD")
    // this.timezoneOffset = this.$dayjs().utcOffset()
    
    /*
       this.$dayjs() 拿到当地时间
       utc() 把当地时间转成 utc 时间
    */
    let utc = this.$dayjs().utc().format('YYYY-MM-DD HH:mm:ss')

    // let local = this.$dayjs(this.utcTime).format('YYYY-MM-DD HH:mm:ss')

    // 把一个 utc 时间的字符串转成 utc 格式
    // this.$dayjs(this.utcTime).utc(true)
    
    this.localTime = this.$dayjs(this.utcTime).utc(true).local().format('YYYY-MM-DD HH:mm:ss')
    
    console.log(this.$dayjs())
    console.log(this.$dayjs(this.utcTime).utc(true))
    console.log(utc)
    console.log(this.localTime)
    // console.log(local, "local")
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
