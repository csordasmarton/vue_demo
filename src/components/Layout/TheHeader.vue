<template>
  <header>
    <router-link
      v-for="menu in menus"
      :key="menu.link"
      :to="{name: menu.link}"
      exact
    >
      {{ menu.label }}
    </router-link>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      menus: [
        { link: "home", label: "Home" },
        { link: "example0", label: "Hello world"},
        { link: "example1", label: "Template syntax"},
        { link: "example2", label: "Component syntax"},
        { link: "example3", label: "Methods/Computed props"},
        { link: "example4", label: "Watchers"},
        { link: "example5", label: "Props"},
        { link: "example6", label: "Mixins"},
        { link: "example7", label: "Lifecycle"},
        { link: "example8", label: "Events"},
        { link: "example9", label: "Slots"},
        { link: "example10", label: "Exercise"}
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
header {
  background-color: #464775;
  color: white;
  margin-bottom: 20px;

  a {
    color: inherit;
    margin-right: 8px;
    padding: 4px;
    display: inline-block;

    &.router-link-active {
      font-weight: bold;
    }
  }
}
</style>