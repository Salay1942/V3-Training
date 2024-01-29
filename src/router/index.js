import { createRouter, createWebHistory } from "vue-router";
import DashBoard from "../layouts/DashBoard.vue";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ProductView from "../views/ProductView.vue";
import categoryRoutes from "../views/category/category-route";

const routes = [
  {
    path: "/",
    name: "DashBoard",
    component: DashBoard,
    meta: { requireAuth: true },
    children: [
      {
        path: "",
        name: "Home",
        component: HomeView,
      },
      {
        path: "/about",
        name: "about",
        component: AboutView,
      },
      {
        path: "/product",
        name: "product",
        component: ProductView,
      },
      ...categoryRoutes,
    ],
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LoginView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: "active",
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) {
    const token = localStorage.getItem("token");
    if (!token) {
      next("login");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
