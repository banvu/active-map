<template>
  <v-navigation-drawer class="px-1.5" v-model="drawer" color="background" app >
    <default-drawer-header />
    <v-divider class="grey mx-2 mb-5" />
    <default-list :items="items" />
  </v-navigation-drawer>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "DefaultDrawer",
  components: {  
    DefaultDrawerHeader: () =>
      import(
        /* webpackChunkName: "default-drawer-header" */
        "./DrawerHeader"
      ),
    DefaultList: () =>
      import(
        /* webpackChunkName: "default-list" */
        "./List"
      ),
  },
  
  computed: {
    ...mapState("app", {
      gradient: "gradient",
      items: "items",
    }),
 
    drawer: {
      get() {
        return this.$store.getters["app/getDrawer"];
      },
      set(value) {
        return this.$store.commit("app/setDrawer", value);
      },
    },
  },
  methods: {
    handler () {
      this.drawer = false
    }
  },
};
</script>
<style lang="scss"></style>
