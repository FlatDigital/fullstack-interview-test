import Vue from 'vue'
import VueRouter from 'vue-router'
import BranchesView from "@/views/BranchesView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/branches',
    name: 'Branches',
    component: BranchesView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
