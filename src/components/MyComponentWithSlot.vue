<template>
  <div class="wrapper">
    <div class="header">
      <slot name="header">
        My default header
      </slot>
    </div>

    <div class="content">
      <slot name="content">
        My default content
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyComponentWithSlot"
}
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: grey;
  width: 200px;

  .header {
    background-color: green;
    color: white;
    padding: 4px;
  }
}
</style>