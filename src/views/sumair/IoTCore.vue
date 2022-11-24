<!-- eslint-disable vue/valid-v-slot -->
<template>
  <v-container class="selected" fluid dark>
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
    <!-- <registry-page-vue /> -->

    <v-card id="account-setting-card" dark class="mt-2">
      <!-- tabs -->
      <v-tabs v-model="tab" show-arrows grow dark>
        <v-tab v-for="tab in tabs" :key="tab.icon" class="selected">
          <v-icon size="20" class="me-3">
            {{ tab.icon }}
          </v-icon>
          <span>{{ tab.title }}</span>
        </v-tab>

        <!-- tabs item -->
        <!-- <v-tab-item v-model="tab"> -->
        <v-tab-item>
          <registry-page-vue />
        </v-tab-item>

        <v-tab-item>
          <information-page-vue />
        </v-tab-item>

        <!-- </v-tab-item> -->
      </v-tabs>
    </v-card>
  </v-container>
</template>
<script>
import RegistryPageVue from "./iotcore/RegistryPage.vue";
import InformationPageVue from "./iotcore/InformationPage.vue";
import { mdiCogStop, mdiAlertBoxOutline } from "@mdi/js";
import { ref } from "@vue/composition-api";

export default {
  components: { RegistryPageVue, InformationPageVue },

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

  setup() {
    const tab = ref("");

    // tabs
    const tabs = [
      { title: "Registries", icon: mdiCogStop },
      { title: "Information", icon: mdiAlertBoxOutline },
    ];

    return {
      tab,
      tabs,
      icons: {
        mdiCogStop,
        mdiAlertBoxOutline,
      },
    };
  },
};
</script>
<style lang=""></style>
