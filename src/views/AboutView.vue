<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ email }}</p>
    <a :href="googleUrl"></a>
    <img :src="imgUrl.url" :alt="imgUrl.url" v-if="isShow" />
    <button class="btn btn-info" @click="greet">Click Me !</button>
    <br />

    <div>
      <h1>Upload File</h1>
      <form @submit.prevent="onSubmit" enctype="multipart/form-data">
        <input type="file" name="picture" ref="file" />
        <button type="submit">Upload</button>
      </form>
    </div>
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

    const file = ref(null);

    const onSubmit = () => {
      console.log(file.value.files[0]);
      const fileUpload = file.value.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(fileUpload);
      reader.onload = (e) => {
        const base64Image = e.target.result;
        console.log(base64Image);
        alert(base64Image);
      };
    };

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

    return { email, googleUrl, imgUrl, isShow, greet, onSubmit, file };
  },
};
</script>
