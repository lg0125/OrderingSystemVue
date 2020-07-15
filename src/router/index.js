import Vue from "vue";
import VueRouter from "vue-router";

//import Home from "../views/Home/index.vue";
//import Order from "../views/Order/index.vue";
//import Profile from "../views/Profile/index.vue";

const Home = () => import('../views/Home/index.vue')
const Order = () => import('../views/Order/index.vue')
const Profile = () => import('../views/Profile/index.vue')
const Search = () => import('../views/Search/index.vue')


import Login from "../views/Login/index.vue"
import Shop from "../views/Shop/index.vue"
import ShopGoods from "../views/Shop/ShopGoods/index.vue"

Vue.use(VueRouter);


const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      showFooter: true
    }
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
    meta: {
      showFooter: true
    }
  },
  {
    path: "/order",
    name: "Order",
    component: Order,
    meta: {
      showFooter: true
    }
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      showFooter: true
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/shop",
    name: "Shop",
    component: Shop,
    children: [
      {
        path: "/shop/goods",
        name: "ShopGoods",
        component: ShopGoods
      }
    ]
  },
  {
    path: "/",
    redirect: "/home"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
