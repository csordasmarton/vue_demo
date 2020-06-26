<template>
  <div>
    <h1>
      <a href="https://vuejs.org/v2/guide/computed.html#Watchers">
        Watchers
      </a>
    </h1>

    <p>
      Vue provides a more generic way to react to data changes through the
      <code>watch</code> option.
    </p>

    <button @click="increment">Increment: {{ counter }}</button>
  </div>
</template>

<script>
export default {
  name: "Watchers",

  data() {
    return {
      counter: 0
    };
  },

  watch: {
    counter(newValue, oldValue) {
      if (newValue % 5 === 0) {
        alert("Counter can be divided by 5.");
      }
    }
  },

  methods: {
    increment() {
      this.counter++;
    }
  }
};
</script>

<style lang="scss" scoped>
div > * {
  margin-bottom: 10px;
}
</style>