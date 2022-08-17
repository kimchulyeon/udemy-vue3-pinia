import { createRouter, createWebHistory } from "vue-router";

/*
  LAZY LOADING
*/
const Notes = () => import("../pages/note/Notes.vue");
const Stats = () => import("../pages/stats/Stats.vue");
const Edit = () => import("../pages/note/EditNote.vue");

/*
  Routes
*/
const routes = [
  {
    path: "/",
    name: "notes",
    component: Notes,
  },
  {
    path: "/edit/:id",
    name: "edit-note",
    component: Edit,
  },
  {
    path: "/stats",
    name: "stats",
    component: Stats,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
