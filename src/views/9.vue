<template>
  <div>
    <h1>
      <a href="https://vuejs.org/v2/guide/components-slots.html">
        Slots
      </a>
    </h1>

    <h2>Default</h2>
    <my-component-with-slot />

    <h2>Custom</h2>
    <my-component-with-slot>
      <template #header>
        My custom header
      </template>
      <template #content>
        <button>Slots are great!</button>
      </template>
    </my-component-with-slot>
  </div>
</template>

<script>
import MyComponentWithSlot from "@/components/MyComponentWithSlot";

export default {
  name: "Slots",
  components: { MyComponentWithSlot },
  data() {
    return {
    };
  }
};
</script>
