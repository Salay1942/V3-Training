import { h, resolveComponent } from "vue";
import CategoryIndexV1 from "./CategoryIndexV1.vue";
import CategoryAdd from "./CategoryAdd.vue";
import CategoryEdit from "./CategoryEdit";

const categoryRoutes = [
  {
    path: "category",
    name: "category",
    component: {
      render: () => h(resolveComponent("router-view")),
    },
    children: [
      {
        path: "",
        name: "CategoryIndexV1",
        component: CategoryIndexV1,
      },
      {
        path: "add",
        name: "CategoryAdd",
        component: CategoryAdd,
      },
      {
        path: ":id/edit",
        name: "CategoryEdit",
        component: CategoryEdit,
      },
    ],
  },
];

export default categoryRoutes;
