<template>
  <div>
    <h1>
      <a href="https://vuejs.org/v2/guide/components-registration.html">
        Mixins
      </a>
    </h1>

    <p>
      Mixins are a flexible way to distribute reusable functionalities for Vue
      components. A mixin object can contain any component options. When a
      component uses a mixin, all options in the mixin will be “mixed” into the
      component’s own options.
    </p>

    <div>Message: {{ message }}</div>
    <div>Reversed message: {{ reversedMessage }}</div>
  </div>
</template>

<script>
import MyMixin from "@/components/MyMixin";

export default {
  name: "Mixins",
  mixins: [ MyMixin ],
  data() {
    return {
      message: "Hello"
    };
  }
};
</script>
