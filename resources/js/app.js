import "./bootstrap"
import { createApp } from "vue"
import App from "./components/App"
import Test from "./pages/Test"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        component: Test
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })

createApp(App).use(router).mount('#app');