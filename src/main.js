import Vue from 'vue'
import App from './App.vue'
import { Button } from 'vant';
import { Switch } from 'vant';
import 'vant/lib/button/style';
import 'vant/lib/switch/style';

Vue.use(Button);
Vue.use(Switch);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
