import Vue from "vue";
import VueRouter from "vue-router";
import login from "@/views/login";
import home from "@/views/home";
import kinds from "@/views/kinds";
import shopcar from "@/views/shopcar";
import mine from "@/views/mine";
import shop from "@/views/shop";
import userTalk from "@/views/userTalk";
import noparameter from "@/views/noparameter";
import search from "@/views/search";
import shoplist from "@/views/shoplist";
import register from "@/views/register";
import book from "@/views/book";
import address from "@/views/address";

Vue.use(VueRouter);
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

const routes = [
  {
    path: "/login",
    name: "login",
    component: login
   
  },{
    path: "/",
    name: "home",
    component: home
  },{
    path: "/kinds",
    name: "kinds",
    component: kinds
  },{
    path: "/shopcar",
    name: "shopcar",
    component: shopcar,
    meta:{
      checked : true// 需要守卫的
    }
  },{
    path: "/mine",
    name: "mine",
    component: mine
  },{
    path: "/shop",
    name: "shop",
    component: shop
  },{
    path: "/userTalk",
    name: "userTalk",
    component: userTalk
  },{
    path: "/noparameter",
    name: "noparameter",
    component: noparameter
  },{
    path: "/search",
    name: "search",
    component: search
  },{
    path: "/shoplist",
    name: "shoplist",
    component: shoplist
  },{
    path: "/register",
    name: "register",
    component: register
  },{
    path: "/book",
    name: "book",
    component: book
  },{
    path: "/address",
    name: "address",
    component: address
  }

];

const router = new VueRouter({
  // mode: "history",
  // linkActiveClass: 'red',
  base: process.env.BASE_URL,
  routes
});

export default router;
