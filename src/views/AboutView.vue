<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ email }}</p>
    <a :href="googleUrl"></a>
    <img :src="imgUrl.url" :alt="imgUrl.url" v-if="isShow" />
    <button class="btn btn-info" @click="greet">Click Me !</button>
  </div>
</template>

<script>
import { ref, reactive, onMounted, onUnmounted } from "vue";
export default {
  name: "AboutView",
  setup() {
    const email = ref("cct@gmail.com");
    const googleUrl = ref("https://google.co.th");
    const imgUrl = reactive({
      url: "https://via.placeholder.com/100",
      alt: "My Image",
    });
    const isShow = ref(false);

    onMounted(() => {
      alert("Hello About Page");
    });

    onUnmounted(() => {
      alert("Bye About Page");
    });

    const greet = () => {
      //alert("Hello World");
      email.value = "john@gmail.com";
      isShow.value = !isShow.value;
    };

    return { email, googleUrl, imgUrl, isShow, greet };
  },
};
</script>
