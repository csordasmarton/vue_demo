<template>
  <div>
    <h1>
      <a href="https://vuejs.org/v2/guide/computed.html#Computed-Caching-vs-Methods">
        Methods / computed property
      </a>
    </h1>

    <p>
      Computed properties are cached based on their reactive dependencies. A
      computed property will only re-evaluate when some of its reactive
      dependencies have changed.
    </p>

    <button @click="increment">Increment: {{ counter }}</button>

    <div>
      <input v-model="message" type="text" />
      Reversed: {{ reversedMessage }}
    </div>
  </div>
</template>

<script>
export default {
  name: "MethodsAndComputedProps",

  data() {
    return {
      counter: 0,
      message: ""
    };
  },

  methods: {
    increment() {
      this.counter++;
    }
  },

  computed: {
    reversedMessage() {
      return this.message.split("").reverse().join("");
    }
  },
};
</script>

<style lang="scss" scoped>
div > * {
  margin-bottom: 10px;
}
</style>