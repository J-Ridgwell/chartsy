<template>
  <nav
    class="container flex flex-col md:flex-row md:items-end mx-auto dark:text-white"
  >
    <p class="text-5xl md:text-6xl italic">
      <g-link to="/category/1">Chartsy</g-link>
    </p>
    <div
      class="flex flex-grow flex-nowrap overflow-x-auto items-end py-3 md:px-0 md:pb-0 md:pl-5 text-lg md:text-xl"
    >
      <g-link
        class="px-3 py-1.5 rounded"
        v-for="{ node } in $static.categories.edges"
        :key="node.id"
        :to="`/category/${node.id}`"
        active-class="ring-inset ring-2 ring-purple-500 ring-opacity-50"
        >{{ node.name }}</g-link
      >
      <g-link to="/about" active-class="ring-inset ring-2 ring-purple-500 ring-opacity-50" class="px-3 py-1.5 rounded">About</g-link>
      <g-link to="/contact" active-class="ring-inset ring-2 ring-purple-500 ring-opacity-50" class="px-3 py-1.5 rounded">Contact</g-link>
      <!-- <button class="snipcart-checkout flex items-center ml-auto">
        <Cart />
        <span
          class="snipcart-total-price ml-3 font-semibold text-sm text-gray-600"
        ></span>
      </button> -->
    </div>
  </nav>
</template>

<static-query>
query {
  categories: allCategory {
    edges {
      node {
        id
        name
      }
    }
  }
}
</static-query>

<script>
export default {
  name: "NavBar",
}
</script>

<style></style>
