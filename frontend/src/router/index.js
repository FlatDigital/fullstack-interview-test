import Vue from 'vue'
import VueRouter from 'vue-router'
import BranchesView from "@/views/BranchesView";
import BranchView from "@/views/BranchDetailView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/branches',
    name: 'Branches',
    component: BranchesView
  },
  {
    path: '/branch',
    name: 'Branch',
    component: BranchView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
