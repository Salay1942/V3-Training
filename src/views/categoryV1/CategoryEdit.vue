<template>
  <div class="container-fluid px-4">
    <h1>Edit Category</h1>
    <div class="row">
      <div class="col-xl-6 col-md-6">
        <form @submit.prevent="onSubmit">
          <div class="mb-3">
            <label for="name" class="form-label">Category Product</label>
            <input v-model="name" type="text" class="form-control" />
          </div>
          <button type="submit" class="btn btn-primary">Edit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter, useRoute } from "vue-router";
import Swal from "sweetalert2";
import { BASE_API_URL } from "../../constants";
export default {
  name: "CategoryEdit",
  setup() {
    const id = ref(0);
    const name = ref("");
    const router = useRouter();
    const route = useRoute();

    onMounted(() => {
      id.value = route.params.id;
      getCategoryById(id.value);
    });

    const onSubmit = async () => {
      const response = await axios.put(`${BASE_API_URL}/api/category`, {
        id: id.value,
        name: name.value,
      });
      Swal.fire({
        title: "Result",
        text: response.data.message,
        icon: "success",
      });

      router.replace("/category");
    };

    const getCategoryById = async (id) => {
      const response = await axios.get(`${BASE_API_URL}/api/category/${id}`);
      name.value = response.data.name;
    };
    return { name, onSubmit, getCategoryById };
  },
};
</script>

<style></style>
