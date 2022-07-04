import Vue from 'vue'
import VueRouter from 'vue-router'
import BranchesView from "@/views/BranchesView";
import BranchView from "@/views/BranchDetailView";
import PullRequestsView from "@/views/PullRequestsView";

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
  },
  {
    path: '/pull-requests',
    name: 'Pull Requests',
    component: PullRequestsView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
