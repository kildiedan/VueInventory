import {createRouter} from 'vue-router'
import Overview from '../pages/Inventory/Overview.vue'
import Edit from '../pages/Inventory/Edit.vue'
import Create from '../pages/Inventory/Create.vue'
import Order from '../pages/Inventory/Order.vue'


const routes = [
  { path: '/', name: 'home', component: Overview },
  { path: '/edit/:index', name: 'edit', component: Edit },
  { path: '/create', name: 'create', component: Create },
  { path: '/order', name: 'order', component: Order },
]

export default function (history) {
  return createRouter({
    history,
    routes
  })
}