import "./bootstrap"
import { createApp } from "vue"
import App from "./components/App"
import Test from "./pages/Test"
import { createRouter, createWebHistory } from "vue-router"
import testRoutes from "../../vendor/hello-world/hello-world/src/resources/routes"

let routes = [
    {
        path: '/',
        component: Test
    }
];

routes = routes.concat(testRoutes);

// routes.concat(testRoutes)

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
  })

createApp(App).use(router).mount('#app');