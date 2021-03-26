<template>
  <div class="grid grid-cols:1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row m-10">
    <g-link
      v-for="product in $page.category.products"
      :key="product.id"
      :to="`/products/${product.id}`"
    >
      <Item
        :title="product.title"
        :image="product.image"
        :price="product.price"
      />
    </g-link>
  </div>
</template>

<page-query>
query($id: ID!) {
  category(id: $id) {
    id
    name
    products {
      id
      title
      price
      image {
        width
        height
        url
      }
    }
  }
}
</page-query>

<script>
import Item from "../components/item"
export default {
  name: "Category",
  components: {
    Item,
  },
}
</script>

<style></style>
