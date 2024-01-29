import { createStore } from "vuex";
import axios from "axios";
import { BASE_API_URL } from "@/constants";

export default createStore({
  state: {
    profile: null,
  },
  getters: {},
  mutations: {
    SET_USER_PROFILE(state, newProfile) {
      state.profile = newProfile;
    },
  },
  actions: {
    async getProfile({ commit }) {
      const token = JSON.parse(localStorage.getItem("token"));
      const response = await axios.get(`${BASE_API_URL}/api/profile`, {
        headers: { Authorization: "Bearer " + token.access_token },
      });
      const newProfile = JSON.parse(JSON.stringify(response.data?.data?.user));
      commit("SET_USER_PROFILE", newProfile);
    },
  },
  modules: {},
});
