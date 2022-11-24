<template>
  <v-app>
    <default-bar-top />
    <default-bar />
    <default-drawer class="px-3"/>
    <default-view  />
    <default-footer />
    <div class="fill-height background"></div>
  </v-app>
</template>
<script>
import DefaultBar from "./AppBar";
import DefaultBarTop from "./AppBarTop";
import DefaultDrawer from "./Drawer";
import DefaultView from "./View";
import DefaultFooter from "./Footer.vue";
export default {
  name: "DefaultLayout",
  components: { 
    DefaultBarTop,
    DefaultBar,
    DefaultDrawer,
    DefaultView,
    DefaultFooter,
  },
};
</script>
<style lang="scss"></style>
