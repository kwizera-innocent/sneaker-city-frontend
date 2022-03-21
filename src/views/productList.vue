<template>
  <div class="container is-fluid">
    <div class="row">
      <!-- <div class="col-sm-6"> -->
      <div
        class="tile is-parent col-sm-6 col-lg-3 col"
        v-for="productItem in productItems"
        :key="productItem.productSizeId"
      >
        <ProductListItem
          v-if="currentRouteName !== '/details'"
          :productItem="productItem"
        />
        <!-- <ProductItemDetails v-else :productItem="productItem" /> -->
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import ProductListItem from "../components/productListItem.vue";
// import ProductItemDetails from "../components/productDetailsList.vue";

export default {
  name: "ProductList",
  components: {
    ProductListItem,
  },
  computed: {
    ...mapGetters(["productItems"]),
    currentRouteName() {
      return this.$route.path;
    },
  },
  created() {
    this.$store.dispatch("getProductItems");
  },
};
</script>
