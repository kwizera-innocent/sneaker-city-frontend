<template>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">{{ cartItem.productSize.product.model }}</div>
      {{ cartItem.productSize.product.brandName }}
    </div>
    <span class="badge bg-primary rounded-pill"
      >${{ cartItem.productSize.product.price }} X {{ cartItem.quantity }}</span
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
