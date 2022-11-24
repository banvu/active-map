import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () =>
      import(
        /* webpackChunkName: "layouts-default-index" */
        "@/layouts/default/Index"
      ),
    children: [
      {
        path: "/",
        name: "Dashboard",
        component: () =>
          import(
            /* webpackChunkName: "views-dashboard" */
            "@/views/Dashboard"
          ),
      },
      {
        path: "/data-analytics",
        name: "DataAnalytics",
        component: () =>
          import(
            /* webpackChunkName: "views-grid-system" */
            "@/views/DataAnalytics"
          ),
      },
      ////////////////////////////////// Main Content ////////////////////////////////////////////////
      {
        path: "/project",
        name: "Project",
        component: () =>
          import(
            /* webpackChunkName: "views-grid-list-page" */
            "@/views/project/Project"
          ),
      },
      {
        path: "/sum-air",
        name: "Sum Air",
        component: () =>
          import(
            /* webpackChunkName: "views-grid-list-page" */
            "@/views/project/SumAir"
          ),
      },

      {
        path: "/account-settings",
        name: "Account Setting",
        component: () =>
          import(
            /* webpackChunkName: "views-breakpoints" */
            "@/views/account-settings/AccountSettings"
          ),
      },
      {
        path: "/real-time-map",
        name: "Real Time Map",
        component: () =>
          import(
            /* webpackChunkName: "views-typography" */
            "@/views/RealTimeMap"
          ),
      },
      {
        path: "/tables/app-table",
        name: "AppTables",
        component: () =>
          import(
            /* webpackChunkName: "views-app-tables" */
            "@/views/table/AppTables"
          ),
      },
      {
        path: "/tables/basic-table",
        name: "BasicTables",
        component: () =>
          import(
            /* webpackChunkName: "views-basic-tables" */
            "@/views/table/BasicTables"
          ),
      },
      // {
      //   path: "/tables/line-chart",
      //   name: "LineChart",
      //   component: () =>
      //     import(
      //       /* webpackChunkName: "views-basic-tables" */
      //       "@/views/table/LineChart"
      //     ),
      // },
      {
        path: "/sum-air/iot-core",
        name: "IoT Core",
        component: () =>
          import(
            /* webpackChunkName: "views-validation-forms" */
            "@/views/sumair/IoTCore"
          ),
      },
      {
        path: "/sum-air/sum-air",
        name: "Sum Air",
        component: () =>
          import(
            /* webpackChunkName: "views-app-forms" */
            "@/views/sumair/sumairsub/SumAir"
          ),
      },
      {
        path: "/sum-air/sum-air/sum-area",
        name: "Sum Air",
        component: () =>
          import(
            /* webpackChunkName: "views-app-forms" */
            "@/views/sumair/sumairsub/Area_1"
          ),
      },
      {
        path: "/buttons",
        name: "Buttons",
        component: () =>
          import(
            /* webpackChunkName: "views-buttons" */
            "@/views/Buttons"
          ),
      },
      {
        path: "/icons",
        name: "Icons",
        component: () =>
          import(
            /* webpackChunkName: "views-icons" */
            "@/views/Icons"
          ),
      },
    ],
  },
  {
    path: "/authentication",
    component: () =>
      import(
        /* webpackChunkName: "layouts-authentication-index" */
        "@/layouts/authentication/Index"
      ),
    children: [
      {
        path: "sign-in",
        name: "SignIn",
        component: () =>
          import(
            /* webpackChunkName: "views-sign-in" */
            "@/views/authentication/SignIn"
          ),
      },
      {
        path: "sign-up",
        name: "SignUp",
        component: () =>
          import(
            /* webpackChunkName: "views-sign-up" */
            "@/views/authentication/SignUp"
          ),
      },
    ],
  },
  {
    path: "/page",
    component: () =>
      import(
        /* webpackChunkName: "layouts-page-index" */
        "@/layouts/page/Index"
      ),
    children: [
      {
        path: "product-list",
        name: "ProductList",
        component: () =>
          import(
            /* webpackChunkName: "views-product-list" */
            "@/views/page/ProductList"
          ),
      },
    ],
  },
];
const router = new VueRouter({
  mode: process.env.NODE_ENV === "production" ? "hash" : "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
