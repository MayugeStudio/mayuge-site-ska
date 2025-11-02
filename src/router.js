import { createRouter, createWebHashHistory } from 'vue-router';
import PostView from './components/PostView.vue'
import Home from './App.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/post/:name', component: PostView }
  ]
})

