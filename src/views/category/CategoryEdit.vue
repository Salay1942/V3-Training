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
import { useEdit } from "./use/crud-category";
export default {
  name: "CategoryEdit",
  setup() {
    const { name, onSubmit, getCategoryById } = useEdit();
    return { name, onSubmit, getCategoryById };
  },
};
</script>

<style></style>
