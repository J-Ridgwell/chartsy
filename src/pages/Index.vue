<template>
  <div class="grid grid-cols:1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row m-10">
    <g-link
      v-for="{ node } in $page.products.edges"
      :key="node.id"
      :to="`/products/${node.id}`"
    >
    <Item
      :title="$page.products.edges[0].node.title"
      :image="$page.products.edges[0].node.image"
      :price="$page.products.edges[0].node.price"
    />
    </g-link>
  </div>
</template>

<page-query>
query {
  products: allProduct {
    edges {
      node {
        id
        title
        description
        price
        slug
        image {
          width
          height
          size
          url
        }
      }
    }
  }
}
</page-query>

<script>
import Item from "~/components/item.vue"

export default {
  metaInfo: {
    title: "Home Page",
  },
  components: {
    Item,
  },
}
</script>

<style></style>
