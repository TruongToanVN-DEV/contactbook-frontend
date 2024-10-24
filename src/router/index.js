import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";
const routes = [
    
    {
        path: "/",
        name: "contactbook",
        component: ContactBook,
    },
    
    // {
    //     path: '/',
    //     name: 'contact.add',
    //     component: () => import("@/components/ContactCard.vue"),  // Thay thế bằng component thực tế của bạn
    // },

    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    },
];
    const router = createRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes,
    });
    
export default router;