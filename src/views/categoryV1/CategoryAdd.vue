<template>
  <div class="container-fluid px-4">
    <h1>Add Category</h1>
    <div class="row">
      <div class="col-xl-6 col-md-6">
        <form @submit.prevent="onSubmit">
          <div class="mb-3">
            <label for="name" class="form-label">Category Product</label>
            <input v-model="name" type="text" class="form-control" />
            {{ name }}
          </div>
          <button type="submit" class="btn btn-primary">Save</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";
import { BASE_API_URL } from "../../constants";
export default {
  name: "CategoryAdd",
  setup() {
    const name = ref("");
    const router = useRouter();
    const onSubmit = async () => {
      const response = await axios.post(`${BASE_API_URL}/api/category`, {
        name: name.value,
      });
      ///alert(response.data.message);

      Swal.fire({
        title: "Result",
        text: response.data.message,
        icon: "success",
      });

      router.replace("/category");
    };

    return { name, onSubmit };
  },
};
</script>

<style></style>
