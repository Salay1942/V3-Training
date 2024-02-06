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
        <v-pagination
          v-model="page"
          :pages="totalPage"
          :range-size="1"
          active-color="#DCEDFF"
          @update:modelValue="getData"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import { BASE_API_URL } from "../../constants";
import Swal from "sweetalert2";
import VPagination from "@hennge/vue3-pagination";
export default {
  name: "CategoryIndexV1",
  components: {
    VPagination,
  },
  setup() {
    const categories = ref([]);
    const errorMessage = ref("");
    const loading = ref(false);
    const page = ref(1);
    const totalPage = ref(0);
    const getData = async (page) => {
      try {
        loading.value = true;
        const response = await axios.get(
          `${BASE_API_URL}/api/category?page=${page}&page_size=10`
        );
        categories.value = response.data.data;
        totalPage.value = response.data.last_page;
        console.log(categories.value);
      } catch (error) {
        console.log(error);
        errorMessage.value = "Fetch Data Error";
      } finally {
        loading.value = false;
      }
    };

    const deleteCategoryById = async (id) => {
      try {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
          if (result.isConfirmed) {
            const response = await axios.delete(
              `${BASE_API_URL}/api/category/${id}`
            );

            Swal.fire({
              title: "Result",
              text: response.data.message,
              icon: "success",
            });

            history.go(0);
          }
        });
      } catch (error) {
        console.log(error);
      }
    };

    onMounted(() => {
      getData(page.value);
    });

    return {
      categories,
      errorMessage,
      loading,
      deleteCategoryById,
      page,
      totalPage,
      getData,
    };
  },
};
</script>

<style></style>
