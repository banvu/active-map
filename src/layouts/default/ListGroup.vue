<template>
  <v-list-group eager v-bind="$attrs">
    <template v-slot:activator>
      <v-icon class="pl-2 pr-6" size="">{{ item.icon }}</v-icon>
      <v-list-item-content>
        <v-list-item-title style="font-weight: 300">
          {{ item.title }}
        </v-list-item-title>
      </v-list-item-content>
    </template>
    <template v-for="(child, i) in item.items">
      <default-list-group
        v-if="child.items"
        :key="`sub-group-${i}`"
        :item="child"
      />
      <default-list-item v-else :key="`child-${i}`" :item="child" />
    </template>
  </v-list-group>
</template>
<script>
import DefaultListItem from "./ListItem";
export default {
  name: "DefaultListGroup",
  components: {
    DefaultListItem,
  },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
<style lang=""></style>
