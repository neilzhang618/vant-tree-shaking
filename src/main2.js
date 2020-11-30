import Vue from 'vue'
import App2 from './App2.vue'
import { Badge } from 'vant';
import { Switch } from 'vant';
import 'vant/lib/badge/style';
import 'vant/lib/switch/style';

Vue.use(Badge);
Vue.use(Switch);

Vue.config.productionTip = false

new Vue({
  render: h => h(App2),
}).$mount('#app')
