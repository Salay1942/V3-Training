<template>
  <div class="container-fluid px-4">
    <div class="row">
      <div class="col-xl-12 col-md-12">
        <h1>Category</h1>

        <router-link to="/category/add" class="btn btn-primary">
          Add</router-link
        >

        <div v-if="errorMessage" class="alert alert-danger" role="alert">
          {{ errorMessage }}
        </div>

        <div v-if="loading" class="text-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>

        <table class="table" v-if="categories.length > 0">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Category ID</th>
              <th scope="col">Category Name</th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in categories" :key="item.id">
              <th scope="row">{{ item.id }}</th>
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>
                <router-link
                  :to="{ name: 'CategoryEdit', params: { id: item.id } }"
                  >Edit</router-link
                >
                |
                <a href="#" @click="deleteCategoryById(item.id)">Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { useIndex } from "./use/crud-category";
export default {
  name: "CategoryIndex",
  setup() {
    const { categories, errorMessage, loading, deleteCategoryById } =
      useIndex();
    return { categories, errorMessage, loading, deleteCategoryById };
  },
};
</script>

<style></style>
