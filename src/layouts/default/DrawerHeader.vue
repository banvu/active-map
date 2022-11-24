<template>
  <v-list-item class="mt-7">
    <v-list-item-avatar>
      <v-img
        style="border: 2px solid white"
        :src="require('@/assets/avatar_1.png')"
      />
    </v-list-item-avatar>
    <v-list-item-content>
      <v-list-item-title class="text-h5 white--text">
        James Doe
      </v-list-item-title>
      <v-list-item-subtitle class="text-h6 grey--text">
        Admin
      </v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>
<script>
export default {
  name: "DefaultDrawerHeader",
};
</script>
<style lang=""></style>
