<template>
  <div id="app">
    <the-header />

    <router-view />
  </div>
</template>

<script>
import TheHeader from "@/components/Layout/TheHeader";

export default {
  name: "App",
  components: { TheHeader }
};
</script>