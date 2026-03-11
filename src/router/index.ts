import {createRouter, createWebHistory} from 'vue-router'

// @ts-ignore
import SummaryView from '@/SummaryView.vue';
import SkillsView from '@/SkillsView.vue';
import WorkHistoryView from "@/WorkHistoryView.vue";
import ContactView from '@/ContactView.vue';


const router = createRouter({
    linkActiveClass: 'btn-active',
    linkExactActiveClass: 'btn-active-exact',
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path: '/', component: SummaryView},
        {path: '/skills', component: SkillsView},
        {path: '/history', component: WorkHistoryView},
        {path: '/contact', component: ContactView},
    ],
})

export default router
