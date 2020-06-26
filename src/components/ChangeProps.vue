<template>
  <div>
    <div>
      Counter: {{ counter }}
    </div>
    <div>
      <ul>
        <li
          v-for="(item, idx) in items"
          :key="idx"
        >
          {{ item }}
        </li>
      </ul>
    </div>

    <button
      @click="counter++"
    >
      Change counter (error)
    </button>

    <button
      @click="items=[...items, counter]"
    >
      Change items (error)
    </button>

    <p>
      Avoid mutating a prop directly since the value will be overwritten
      whenever the parent component re-renders.
    </p>

    <button
      @click="$emit('update:counter', counter + 1)"
    >
      Change counter
    </button>
  </div>
</template>

<script>
export default {
  name: "ChangeProps",
  props: {
    counter: { type: Number, required: true },
    items: { type: Array, required: true }
  }
}
</script>