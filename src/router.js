import { createRouter, createWebHashHistory } from 'vue-router';
import PostView from './views/PostView.vue'
import Home from './views/Home.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/post/:name', component: PostView }
  ]
})

