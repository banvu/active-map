import Vue from "vue";
import { extend, ValidationObserver, ValidationProvider } from "vee-validate";
import {
  email,
  max,
  min,
  numeric,
  required,
  digits,
  confirmed,
} from "vee-validate/dist/rules";

extend("digits", {
  ...digits,
  // message: "{_field_}Phải có ít nhất {length} kí tự. ({_value_})",
});
extend("email", {
  ...email,
  // message: "Invalid email address entered.",
});
extend("max", {
  ...max,
  // message: "{_field_} The field {length}can not exceed rule.",
});
extend("min", {
  ...min,
  // message: "{_field_} The field {length}must be less than.",
});
extend("numeric", {
  ...numeric,
  // message: "{_field_} The field must consist only of numbers.",
});
extend("required", {
  ...required,
  // message: "{_field_} The field is a required value.",
});
extend("confirmed", {
  ...confirmed,
  // message: "Password and Confirm Password do not match",
});

Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);
