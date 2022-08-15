import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LeftMenu from '../components/LeftMenu/LMMain.vue'
import List from '../components/List.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: "/groups"
  },
  {
    path: '/groups',
    component: HomeView,
    children: [
      {
      path: '',
      name: 'menu',
      component: LeftMenu,
      children: [
        {
        path: '',
        name: 'groups',
        component: List
      },
      {
        path: '/group/:id',
        name: 'group',
        component: List
      }
    ]
    }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
