<template>
  <div style="margin-top: 20px">
    <input type="text" placeholder="First Name" v-model="firstName" />
    <input type="text" placeholder="Last Name" v-model="lastName" />
  </div>
  <PersonGreeting
    :firstName="firstName"
    :lastName="lastName"
    @callHeroes="callHeroes"
  />
  <CaptionedContent> Source : learnvue.co</CaptionedContent>
</template>

<script>
import { ref } from "vue";
import PersonGreeting from "./PersonGreeting.vue";
import CaptionedContent from "./CaptionedContent";

export default {
  name: "PersonView",
  components: {
    PersonGreeting,
    CaptionedContent,
  },
  setup() {
    const firstName = ref("");
    const lastName = ref("");
    function callHeroes(hero) {
      alert(`Calling ${hero}`);
    }
    return { firstName, lastName, callHeroes };
  },
};
</script>
<style></style>
