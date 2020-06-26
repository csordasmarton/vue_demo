<template>
  <div class="root">
    <!-- text interpolation -->
    <h1>
      <a href="https://vuejs.org/v2/guide/syntax.html">
        {{ title }}
      </a>
    </h1>

    <!-- conditional rendering -->
    <div>
      Status:
      <span v-if="on">
        ON
      </span>
      <span v-else>
        OFF
      </span>
    </div>

    <!-- loops -->
    <ul>
      <li
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </li>
    </ul>

    <!-- attributes -->
    <div>
      <button v-bind:disabled="on">Attribute</button>
      <button :disabled="on">Attribute (short)</button>
    </div>

    <!-- events -->
    <div>
      <button v-on:click="on = !on">Toggle</button>
      <button @click="on = !on">Toggle (short)</button>
    </div>

    <!-- form input bindings -->
    <div>
      <input v-model="message" type="text" />
      {{ message }}
    </div>
  </div>
</template>

<script>
// https://vuejs.org/v2/guide/syntax.html
export default {
  name: "BasicTemplateSyntax",

  // Data must be a function.
  // https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function
  data() {
    return {
      title: "Basic template syntax",
      on: false,
      items: [ "item 1", "item 2", "item 3" ],
      message: "Initial message"
    };
  }
};
</script>

<style lang="scss" scoped>
div.root > * {
  margin-bottom: 10px;
}
</style>