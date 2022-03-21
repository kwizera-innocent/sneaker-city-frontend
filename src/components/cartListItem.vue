<template>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="h6 ms-2 me-auto">
      <div class="h6 fw-bold">{{ cartItem.productSize.product.model }}</div>
      {{ cartItem.productSize.product.brandName }}
    </div>
    <small class="text-muted me-auto">purchased at: {{ cartItem.purchaseDate }}</small>
    <span class="badge bg-primary rounded-pill"
      >Rwf {{ cartItem.productSize.product.price }} X {{ cartItem.quantity }}</span
    >
  </li>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "CartListItem",
  props: ["cartItem"],
  methods: {
    ...mapActions(["addCartItem", "removeCartItem"]),
  },
};
</script>
