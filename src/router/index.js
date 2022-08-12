import { createRouter, createWebHistory } from "vue-router"

/*
  LAZY LOADING
*/
const Note = () => import("../pages/note/Note.vue")
const Stats = () => import("../pages/stats/Stats.vue")

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "notes",
      component: Note,
    },
    {
      path: "/stats",
      name: "stats",
      component: Stats,
    },
  ],
})

export default router
