<template>
  <div>
    <h1>
      <a href="https://vuejs.org/v2/guide/components-registration.html">
        Component registration
      </a>
      and
      <a href="https://vuejs.org/v2/guide/components-props.html">
        props
      </a>
    </h1>

    <p>
      When defining a component with PascalCase, you can use either case when
      referencing its custom element. That means both my-component-name
      and MyComponentName are acceptable. Note, however, that only
      kebab-case names are valid directly in the DOM (i.e. non-string
      templates).
    </p>

    <my-component-with-props :messages="messages1" />

    <MyComponentWithProps :messages="messages2" color="red" />
  </div>
</template>

<script>
import MyComponentWithProps from "@/components/MyComponentWithProps";

export default {
  name: "ComponentsAndProps",
  components: { MyComponentWithProps },
  data() {
    return {
      messages1: [ "Hello", "component" ],
      messages2: [ "Hello", "component", "props" ]
    };
  }
};
</script>
