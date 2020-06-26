<template>
  <div>
    <h1 :style="{ color: color }">
      My component with props
    </h1>

    <ul>
      <li
        v-for="message in messages"
        :key="message"
      >
        {{ message }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MyComponentWithProps",
  props: {
    messages: { type: Array, required: true },
    color: { type: String, default: "blue" }
  }
}
</script>