<template>
  <div>
    <NavBar />
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import NavBar from "~/components/navbar.vue"
export default {
  name: "DefaultLayout",
  components: {
    NavBar,
  },
}
</script>

<style></style>
