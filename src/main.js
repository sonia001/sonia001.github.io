import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Layout from "./component/Layout";
import Details from "./component/Details"
const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes: [
      {
        path: '/',
        name:'Layout',
        component: Layout
      },
      {
        path: '/genre/:id',
        name:'Details',
        component: Details,
        props:true,
      },
    ]
  })

  const app = createApp(App)
  
  app.use(router)
  
  app.mount('#app')
