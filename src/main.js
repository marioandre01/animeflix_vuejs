import Vue from 'vue'
import App from './App.vue'
import router from './router/routes'
import store from './store/store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlay)
library.add(faInfoCircle)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
