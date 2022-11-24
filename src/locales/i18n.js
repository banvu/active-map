import Vue from "vue";
import VueI18n from "vue-i18n";
import en from "./en";
import vn from "./vn";
Vue.use(VueI18n);

const messages = {
  en: en,
  vn: vn,
};

// Create VueI18n instance with options
export default new VueI18n({
  locale: localStorage.getItem("lang"),
  messages, // set locale messages
});
