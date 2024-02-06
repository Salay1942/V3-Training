<template>
  <div>Hello {{ fullName }}</div>
  <button @click="sendEvent">Call Heros</button>
</template>

<script>
import { computed } from "vue";

export default {
  name: "PersonGreetingView",
  props: ["firstName", "lastName"],
  setup(props, context) {
    const fullName = computed(() => {
      return `${props.firstName} ${props.lastName}`;
    });

    function sendEvent() {
      context.emit("callHeroes", fullName.value);
    }

    return { fullName, sendEvent };
  },
};
</script>

<style></style>
