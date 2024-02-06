<template>
  <div class="container-fluid px-4">
    <h1>Add Category</h1>
    <div class="row">
      <div class="col-xl-6 col-md-6">
        <form @submit.prevent="onSubmit">
          <div class="mb-3">
            <label for="name" class="form-label">Category Product</label>
            <input
              type="text"
              class="form-control"
              ref="inputField"
              v-model="name"
            />
          </div>
          <button type="submit" class="btn btn-primary">Save</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useAdd } from "./use/crud-category";

export default {
  name: "CategoryAdd",
  setup() {
    const inputField = ref();

    onMounted(() => {
      inputField.value.focus();
    });
    const { name, onSubmit } = useAdd();

    return { name, onSubmit, inputField };
  },
};
</script>

<style></style>
