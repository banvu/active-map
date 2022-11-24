<template>
  <v-list-item link :to="item.to" class="my-2" active-class="white--text" dark>
    <v-list-item-icon>
      <v-icon size="17" class="ml-2">{{ item.icon }}</v-icon>
    </v-list-item-icon>
    <v-list-item-content>
      <v-list-item-title style="font-weight: 300" dark>{{
        item.title
      }}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>
<script>
export default {
  name: "DefaultListItem",
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
<style lang="scss">
// .round-list-item {
//   border-radius: 30px !important;
// }
</style>
