import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret,faUserCircle,faSearch,faCog,faTv,faSignal,faGenderless,faCertificate,faChartLine,faCaretRight,faArrowUp,faCommentAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)



 
library.add(faUserSecret)
library.add(faUserCircle)
library.add(faSearch)
library.add(faCog)
library.add(faTv)
library.add(faSignal)
library.add(faGenderless)
library.add(faCertificate)
library.add(faChartLine)
library.add(faCaretRight)
library.add(faArrowUp)
library.add(faCommentAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)
// import VueRouter from 'vue-router'
// import routes from './routes';

Vue.use(ElementUI);
// Vue.use(VueRouter); 

Vue.config.productionTip = false

// const router = new VueRouter({routes});
new Vue({
  // router,
  render: h => h(App),
}).$mount('#app')


