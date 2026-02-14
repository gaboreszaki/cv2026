import { createRouter, createWebHistory } from 'vue-router'

// @ts-ignore
import SummaryView from '../SummaryView.vue';
import SkillsView from '../SkillsView.vue';

import DownloadView from "@/DownloadView.vue";
import WorkHistoryView from "@/WorkHistoryView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {path: '/', component: SummaryView},
      {path: '/skills', component: SkillsView},
      {path: '/history', component: WorkHistoryView},
      {path: '/download', component: DownloadView}
  ],
})

export default router
