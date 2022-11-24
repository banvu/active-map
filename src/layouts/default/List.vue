<template>
  <v-list dense expand nav dark class="text-h6" rounded>
    <v-subheader>General</v-subheader>
    <template v-for="(item, index) in items">
      <default-list-group
        v-if="item.items"
        :key="`group-${index}`"
        :item="item"
      />
      <default-list-item v-else :key="`item-${index}`" :item="item" />
    </template>
  </v-list>
</template>
<script>
import DefaultListItem from "./ListItem";
import DefaultListGroup from "./ListGroup";
export default {
  name: "DefaultList",
  components: {
    DefaultListItem,
    DefaultListGroup
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
};
</script>
<style lang=""></style>
