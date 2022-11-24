<template>
  <!-- Breadcrumb -->
  <v-breadcrumbs :items="items">
    <template v-slot:divider>
      <v-icon class="white--text">mdi-chevron-right</v-icon>
    </template>
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item :disabled="item.disabled" :href="item.href">
        <span :style="`color: ${item.color}`">
          {{ item.text }}
        </span>
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
  <!-- End of Breadcrumb -->
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        text: "Project",
        disabled: false,
        color: "white",
        href: "/project",
      },
      {
        text: "Sum Air",
        disabled: false,
        color: "white",
        href: "/sum-air",
      },
      {
        text: "IoT Core",
        disabled: true,
        color: "aqua",
        href: "sum-air/iot-core",
      },
    ],
  }),
};
</script>

<style></style>
