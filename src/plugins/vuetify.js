import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

// const theme = {
// primary: colors.blue
// secondary: colors.grey.darken4
// };

export default new Vuetify({
  breakpoint: {
    mobileBreakpoint: "sm",
  },
  theme: {
    themes: {
      light: {
        primary: colors.shades.white,
        secondary: "#3C82F5",
        accent: "#0C66F8",
        error: colors.red.accent3,
        // background: colors.indigo.lighten5
        background: "#0F172B",
        deepbg: "#262e40",
        selected: "#1E293C",
        grey: "#6A768B",
        blur: "#162034",
        // status
        alert: "#FF0101",
        normal: "#73DF4D",
        warning: "#FFF519",
      },
      dark: {
        primary: colors.blue.lighten3,
        // background: colors.indigo.base
        // If not using lighten/darken, use base to return hex
      },
    },
  },
});
