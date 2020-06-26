<template>
  <div>
    <h1>
      <a href="https://vuejs.org/v2/guide/components-custom-events.html">
        Change parent data in child (events)
      </a>
    </h1>

    <button @click="counter++">Increment counter from parent</button>

    <change-props
      :counter="counter"
      :items="items"
      @update:counter="(newValue) => counter = newValue"
    />

    <!-- Simplify the code by using .sync -->
    <!-- <change-props
      :counter.sync="counter"
      :items="items"
    /> -->
  </div>
</template>

<script>
import ChangeProps from "@/components/ChangeProps";

export default {
  name: "ChangeProperties",
  components: { ChangeProps },
  data() {
    return {
      counter: 0,
      items: []
    };
  }
};
</script>
