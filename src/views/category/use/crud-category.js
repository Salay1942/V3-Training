import { ref, onMounted } from "vue";
import axios from "axios";
import { useRouter, useRoute } from "vue-router";
import Swal from "sweetalert2";
import { BASE_API_URL } from "../../../constants";

export function useAdd() {
  const name = ref("");
  const router = useRouter();
  const onSubmit = async () => {
    const response = await axios.post(`${BASE_API_URL}/api/category`, {
      name: name.value,
    });
    Swal.fire({
      title: "Result",
      text: response.data.message,
      icon: "success",
    });

    router.replace("/category");
  };

  return { name, onSubmit };
}

export function useEdit() {
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
}

export function useIndex() {
  const categories = ref([]);
  const errorMessage = ref("");
  const loading = ref(false);
  const getData = async () => {
    try {
      loading.value = true;
      const response = await axios.get(`${BASE_API_URL}/api/category`);
      categories.value = response.data;
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
    getData();
  });

  return { categories, errorMessage, loading, deleteCategoryById };
}
