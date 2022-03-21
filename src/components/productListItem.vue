<template>
  <div class="card" style="width: 18rem">
    <img :src="productItem.image" class="card-img-top" alt="..." />
    <div class="card-header">{{ productItem.brandName }}</div>
    <div class="card-body">
      <h5 class="card-title">{{ productItem.model }}</h5>
      <p class="card-text">disc</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        Release date: {{ productItem.releaseDate }}
      </li>
      <!-- <li class="list-group-item">A second item</li>
      <li class="list-group-item">A third item</li> -->
    </ul>
    <div class="card-footer">
      <router-link
        :to="{
          name: 'ProductDetailsList',
          params: { productId: productItem.productId },
        }"
        class="btn btn-outline-success btn-sm me-auto"
      >
        <strong>
          <strong>Details</strong>
        </strong>
      </router-link>
      <a class="btn btn-outline-info btn-sm is-rounded d-flex">
        <strong>Price: Rwf {{ productItem.price }}</strong>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductListItem",
  props: ["productItem"],
};
</script>
