<template>
  <div class="container-fluid px-4">
    <div class="row">
      <div class="col-xl-12 col-md-12">
        <h1>Product</h1>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Course Name</th>
              <th scope="col">Details</th>
              <th scope="col">Views</th>
              <th scope="col">Picture</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in products" :key="item.id">
              <th scope="row">{{ item.id }}</th>
              <td>{{ item.title }}</td>
              <td>{{ item.detail }}</td>
              <td>{{ item.view }}</td>
              <td>
                <img :src="item.picture" width="80" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
export default {
  name: "ProductView",
  setup() {
    const products = ref([]);
    const getData = async () => {
      const response = await axios.get(
        "https://api.codingthailand.com/api/course"
      );
      products.value = response.data.data;
      console.log(products.value);
    };

    onMounted(() => {
      getData();
    });

    return { products };
  },
};
</script>

<style></style>
