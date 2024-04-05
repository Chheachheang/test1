import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";


import NotFoundFage from "./views/NotFoundFage.vue"
const routes = [
    { path: "/",component: ()=>import('./views/HomePage.vue') ,name:"Home"},
    { path: "/about",component:  ()=>import('./views/AboutPage.vue'),name:"About" },
    { path: "/blogs/:id",component: ()=>import('./views/BlogPage.vue'),name:"Blog" },
    { path: "/:pathMatch(.*)*",component: NotFoundFage },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;