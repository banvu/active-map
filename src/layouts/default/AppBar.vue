<template>
  <!-- <v-app-bar app color="selected" dark class=" mx-3 rounded-t-xl "> -->
  <v-app-bar
    app
    color="selected"
    dark
    class="mx-3 rounded-t-lg mt-5"
    elevate-on-scroll
    fixed
  >
    <v-app-bar-nav-icon class="ml-1" @click="drawer = !drawer" />
    <v-toolbar-title class="mt-1 toolbar-title">{{
      $route.name
    }}</v-toolbar-title>
    <!-- <v-icon
      :key="$vuetify.theme.dark"
      @click="$vuetify.theme.dark = !$vuetify.theme.dark"
      class="ml-5"
    >
      {{ $vuetify.theme.dark ?  icons.mdiWeatherSunny : icons.mdiWeatherNight}}
    </v-icon>
    <select
      v-model="language"
      class="white rounded-a-lg ml-3"
      dark
      @change="changeLanguage()"
    >
      <option value="vn">VN</option>
      <option value="en">EN</option>
    </select> -->
    <v-spacer />
  </v-app-bar>
</template>
<script>
// import { mdiWeatherNight, mdiWeatherSunny } from "@mdi/js";
export default {
  name: "DefaultBar",
  //Language props
  data() {
    return {
      language: null,
    };
  },
  computed: {
    drawer: {
      get() {
        return this.$store.getters["app/getDrawer"];
      },
      set(value) {
        return this.$store.commit("app/setDrawer", value);
      },
    },
  },

  // setup() {
  //   return {
  //     icons: {
  //       mdiWeatherNight,
  //       mdiWeatherSunny,
  //     },
  //   };
  // },

  //Language methods/create
  methods: {
    changeLanguage() {
      localStorage.setItem("lang", this.language);
      window.location.reload();
    },
  },

  create() {
    if (localStorage.getItem("lang") == null) {
      localStorage.setItem("lang", "vn");
    } else if (localStorage.getItem("lang") == "en") {
      localStorage.setItem("lang", "vn");
    }

    this.language = localStorage.getItem("lang");
  },
};
</script>
<style lang="scss" scoped>
.toolbar-title {
  font-size: 1.4rem !important;
  font-weight: bold;
}
</style>
