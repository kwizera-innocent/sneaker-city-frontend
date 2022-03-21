<template>
  <div class="card" style="width: 18rem">
    <img :src="productItem.product.image" class="card-img-top" alt="..." />
    <div class="card-header">{{ productItem.product.brandName }}</div>
    <div class="card-body">
      <h5 class="card-title">{{ productItem.product.model }}</h5>
      <p class="card-text">
        {{ productItem.description }}
      </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Size: {{ productItem.size }}</li>
      <li class="list-group-item">Quantity: {{ productItem.quantity }}</li>
      <li class="list-group-item">
        Release date: {{ productItem.product.releaseDate }}
      </li>
    </ul>
    <div class="card-footer">
      <!-- <div class="d-md-flex justify-content-md-start"> -->
      <a
        class="btn btn-outline-success btn-sm me-auto"
        @click="addCartItem(productItem)"
      >
        <strong>Add to cart</strong>
      </a>
      <!-- </div> -->
      <!-- <div class="d-md-flex justify-content-md-end"> -->
      <a
        class="btn btn-outline-info btn-sm is-rounded d-flex"
        @click="
          addCartItem({
            quantity: productItem.quantity,
            productSizeId: productItem.productSizeId,
          })
        "
      >
        <strong>Price: Rwf {{ productItem.product.price }}</strong>
      </a>
      <!-- </div> -->
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "ProductListItem",
  props: ["productItem"],
  methods: {
    ...mapActions(["addCartItem"]),
  },
};
</script>
