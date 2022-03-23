import Vue from 'vue'
import App from './App.vue'
import dayjs from "dayjs"
let utc = require('dayjs/plugin/utc')
let timezone = require('dayjs/plugin/timezone')
dayjs.extend(utc)
dayjs.extend(timezone)

Vue.config.productionTip = false
Vue.use(dayjs)
Vue.prototype.$dayjs = dayjs

new Vue({
  render: h => h(App),
}).$mount('#app')

// let local = dayjs.tz.guess()
// console.log(local)
// console.log(dayjs("2022-3-23 07:00").tz(local).format('YYYY-MM-DD HH:mm:ss'), dayjs.tz.guess())

// console.log(dayjs("2014-06-01 12:00").tz("America/New_York").format())
// console.log(dayjs("2014-06-01 12:00").tz("America/New_York", true).format())

// console.log(dayjs.tz.guess())