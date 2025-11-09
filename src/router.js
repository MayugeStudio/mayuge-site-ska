import { createRouter, createWebHashHistory } from 'vue-router';
import PostView from './views/PostView.vue'
import ProfileView from './views/ProfileView.vue'
import PostListView from './views/PostListView.vue'
import Home from './views/Home.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/post/:name', component: PostView },
    { path: '/posts', component: PostListView },
    { path: '/profile', component: ProfileView },
  ]
})

