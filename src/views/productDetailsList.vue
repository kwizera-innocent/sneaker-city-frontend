<template>
  <div class="container is-fluid">
    <div class="row justify-content-md-center">
      <!-- <div class="col-sm-6"> -->
      <div
        class="tile is-parent col-sm-6 col-lg-3 col"
        v-for="productItem in productItems"
        :key="productItem.productId"
      >
        <!-- <ProductListItem
          v-if="currentRouteName !== '/details'"
          :productItem="productItem"
        /> -->
        <ProductItemDetails :productItem="productItem" />
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
// import ProductListItem from "../components/productListItem.vue";
import ProductItemDetails from "../components/productDetailsList.vue";

export default {
  name: "ProductDetailsList",
  props: ["productId"],
  components: {
    // ProductListItem,
    ProductItemDetails,
  },
  computed: {
    ...mapGetters(["productItems"]),
    currentRouteName() {
      return this.$route.path;
    },
  },
  created() {
    this.$store.dispatch("getProductItemDetails", this.$route.params.productId);
  },
};
</script>
