import {createRouter} from 'vue-router'
import Overview from '../pages/Inventory/Overview.vue'
import Edit from '../pages/Inventory/Edit.vue'
import Create from '../pages/Inventory/Create.vue'
import Order from '../pages/Inventory/Order.vue'


const routes = [
  { path: '/', component: Overview },
  { path: '/edit', component: Edit },
  { path: '/create', component: Create },
  { path: '/order', component: Order },
]

export default function (history) {
  return createRouter({
    history,
    routes
  })
}