export default {
  data() {
    return {
      message: "Hello from mixin"
    };
  },
  computed: {
    reversedMessage() {
      return this.message.split("").reverse().join("");
    }
  }
};
