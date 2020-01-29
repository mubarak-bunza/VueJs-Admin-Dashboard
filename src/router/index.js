import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import Icons from '@/views/Icons.vue'
import AppMap from '@/views/AppMap.vue'
import Notifications from '@/views/Notifications.vue'
import UserProfile from '@/views/UserProfile.vue'
import Tables from '@/views/Tables.vue'
import Typography from '@/views/Typography.vue'
import UpgradePro from '@/views/UpgradePro.vue'
import RTL from '@/views/RTL.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/icons',
    name: 'icons',
    component: Icons
  },
  {
    path: '/appmap',
    name: 'appmap',
    component: AppMap
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: Notifications
  },
  {
    path: '/userProfile',
    name: 'userProfile',
    component: UserProfile
  },
  {
    path: '/tables',
    name: 'tables',
    component: Tables
  },
  {
    path: '/typography',
    name: 'typography',
    component: Typography
  },
  {
    path: '/upgradepro',
    name: 'upgradepro',
    component: UpgradePro
  },
  {
    path: '/rtl',
    name: 'rtl',
    component: RTL
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
