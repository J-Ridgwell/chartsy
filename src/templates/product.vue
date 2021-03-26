<template>
  <div class="grid md:grid-cols-2 mt-24 container mx-auto">
    <img
      :src="$page.product.image.url"
      width="$page.product.width"
      height="$page.product.image.height"
      class="justify-self-end"
    />

    <div class="md:justify-self-center pl-5 md:p-0">
      <div>
        <p
          class="mt-1 font-semibold text-2xl md:text-4xl text-gray-700 dark:text-white"
        >
          {{ $page.product.title }}
        </p>
        <p class="mt-5 text-gray-600 dark:text-gray-200">
          {{ $page.product.description }}
        </p>
        <p class="mt-5 text-gray-600 dark:text-gray-200">
          {{ $page.product.sizes }}
        </p>
        <p class="mt-5 dark:text-gray-200">${{ $page.product.price }}</p>
      </div>
      <!-- <button
        id="snipcart-add-item"
        class="snipcart-add-item buy-button mt-4 py-2 px-4 bg-white dark:bg-gray-600 rounded border border-gray-200 dark:border-0 shadow text-gray-700 dark:text-white font-semibold"
        :data-item-id="`${item.date.slice(
          0,
          item.date.indexOf('T')
        )}-${item.title.replaceAll(' ', '-').toLowerCase()}`"
        :data-item-price="item.price"
        :data-item-url="`/products/${$route.params.id.toLowerCase()}/`"
        :data-item-description="item.description"
        :data-item-image="item.image"
        :data-item-name="item.title"
        :data-item-custom1-name="'Sizes'"
        :data-item-custom1-required="true"
        :data-item-custom1-options="item.sizes"
      >
        Add to cart
      </button> -->
    </div>
  </div>
</template>

<page-query>
query($id: ID!) {
  product(id: $id) {
    id
    title
    description
    price
    slug
    image {
      width
      height
      url
    }
  }
}
</page-query>

<script>
export default {
  name: "product",
  metaInfo() {
    return {
      title: this.$page.product.title,
    }
  },
}
</script>

<style></style>
