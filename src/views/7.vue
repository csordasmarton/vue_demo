<template>
  <div>
    <h1>
      <a href="https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram">
        Lifecycle
      </a>
    </h1>

    <button @click="counter++">
      Counter {{ counter}}
    </button>
  </div>
</template>

<script>
export default {
  name: "Lifecycle",
  data() {
    return {
      counter: 0
    };
  },

  beforeCreate() { console.log("beforeCreate", this.counter); },
  created() { console.log("created", this.counter); },

  beforeMount() { console.log("beforeMount", this.counter); },
  mounted() { console.log("mounted", this.counter); },

  beforeUpdate() { console.log("beforeUpdate", this.counter); },
  updated() { console.log("updated", this.counter); },

  // This is not called because vue is reusing dom elements or components.
  beforeDestory() { console.log("beforeDestory", this.counter); },

  destroyed() { console.log("destroyed", this.counter); }
};
</script>
