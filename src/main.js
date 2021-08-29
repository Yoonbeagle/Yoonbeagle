import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@/assets/css/style.scss'

// fort-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHeart as fasHeart, faEye, faStar as fasStar } from '@fortawesome/free-solid-svg-icons' // solid icon
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons' // regular icon

library.add(
  fasHeart,
  farHeart,
  faEye,
  fasStar
)
Vue.component('font-awesome-icon', FontAwesomeIcon)
// Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
