import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./store";
import "./plugins";
// import * as VeeValidate from "vee-validate";

import VueComposition from "@vue/composition-api";
import i18n from "./locales/i18n";
import DatetimePicker from "vuetify-datetime-picker";
// import "chartjs-adapter-date-fns";
import DataTable from "@andresouzaabreu/vue-data-table";
import "@andresouzaabreu/vue-data-table/dist/DataTable.css";
// import "chart.js";

Vue.config.productionTip = false;
// Vue.use(VeeValidate);

Vue.use(VueComposition);
Vue.use(DatetimePicker);
Vue.component("data-table", DataTable);

new Vue({
  router,
  i18n,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount("#app");
