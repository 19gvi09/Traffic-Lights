import { createRouter, createWebHistory } from "vue-router"
import Red from "../views/red/Red.vue"
import Yellow from "../views/yellow/Yellow.vue"
import Green from "../views/green/Green.vue"

const routes = [
    {
        path: "/red",
        name: "Red",
        component: Red
    },
    {
        path: "/yellow",
        name: "Yellow",
        component: Yellow
    },
    {
        path: "/green",
        name: "Green",
        component: Green
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
