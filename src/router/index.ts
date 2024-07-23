import { createMemoryHistory, createRouter } from "vue-router";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error 
import Home from "@/views/Home.vue";

const routes = [
  { path: "/", component: Home },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export {
  router
};