<template>
  <div
    class="transition duration-300 cursor-pointer shadow-lg hover:shadow-2xl transform hover:scale-105 w-full rounded-b-lg"
  >
    <img
      class="w-full"
      :width="image.width"
      :height="image.height"
      :src="image.url"
      :alt="title"
    />
    <div
      class="py-2 px-3  text-gray-600 dark:text-gray-100 bg-gray-100 dark:bg-gray-700"
    >
      <p class="font-semibold text-gray-700 dark:text-white">{{ title }}</p>
      <p>{{ `$${price}` }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    title: { type: String, default: "" },
    image: { type: Object, default: {} },
    price: { type: Number, default: 0 },
  },
}
</script>

<style></style>
