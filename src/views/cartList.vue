<template>
  <div class="row justify-content-md-center">
    <div id="cart" class="col-sm-12 col-lg-6">
      <div class="cart--header has-text-centered">
        <i class="fa fa-2x fa-shopping-cart"></i>
      </div>
      <p v-if="!cartItems.length" class="cart-empty-text has-text-centered">
        Add some items to the cart!
      </p>

      <ol
        v-for="cartItem in cartItems"
        :key="cartItem.id"
        class="list-group cart-item"
      >
        <!-- <ul> -->
        <!-- <li class="cart-item" v-for="cartItem in cartItems" :key="cartItem.id"> -->
        <CartListItem :cartItem="cartItem" />
      </ol>
      <!-- </li> -->
      <div class="notification is-success">
        <button class="delete"></button>
        <p>
          Total Quantity:
          <span class="has-text-weight-bold">{{ cartQuantity }}</span>
        </p>
      </div>
      <br />
      <!-- </ul> -->
      <div class="buttons">
        <button
          :disabled="!cartItems.length"
          class="button is-info"
          @click="removeAllCartItems"
        >
          Checkout (<span class="has-text-weight-bold">${{ cartTotal }}</span
          >)
        </button>

        <button
          :disabled="!cartItems.length"
          class="button is-danger is-outlined"
          @click="removeAllCartItems"
        >
          <span>Delete All items</span>
          <span class="icon is-small">
            <i class="fas fa-times"></i>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import CartListItem from "../components/cartListItem.vue";
export default {
  name: "CartList",
  components: {
    CartListItem,
  },
  computed: {
    ...mapGetters(["cartItems", "cartTotal", "cartQuantity"]),
  },
  created() {
    this.$store.dispatch("getCartItems");
  },
  methods: {
    ...mapActions(["removeAllCartItems"]),
    ...mapActions(["checkout"]),
  },
};
</script>
