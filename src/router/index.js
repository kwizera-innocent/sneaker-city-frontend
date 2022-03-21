import { createRouter, createWebHistory } from "vue-router";
import CartList from "../views/cartList.vue";
import ProductList from "../views/productList.vue";
import ProductDetails from "../views/productDetailsList.vue";

const routes = [
  {
    path: "/inventory",
    component: ProductList,
  },
  {
    path: "/cart",
    component: CartList,
  },
  {
    path: "/",
    redirect: "/inventory",
  },
  {
    path: "/details/:productId",
    name: "ProductDetailsList",
    component: ProductDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
