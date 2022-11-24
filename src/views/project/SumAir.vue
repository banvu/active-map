<template>
  <v-container class="mt-2 selected" fluid>
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
    <!-- Main Content -->
    <v-row>
      <v-col :key="index" cols="auto" sm="6" md="6" lg="4" xl="3">
        <v-card>
          <v-img
            class="white--text align-end"
            height="200px"
            src="../../assets/compressor.jpg"
          >
          </v-img>

          <v-card-text class="text--primary">
            <div>IoT Core</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="blue" text @click="gotoIoTCore()"> Enter </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col :key="index" cols="auto" sm="6" md="6" lg="4" xl="3">
        <v-card>
          <v-img
            class="white--text align-end"
            height="200px"
            src="../../assets/rtls.png"
          >
          </v-img>

          <v-card-text class="text--primary">
            <div>Sum Air</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="blue" text @click="gotoRTLS()"> Enter </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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
        disabled: true,
        color: "aqua",
      },
    ],
  }),
  methods: {
    gotoIoTCore() {
      this.$router.push("/sum-air/iot-core");
    },
    gotoRTLS() {
      this.$router.push("/sum-air/sum-air");
    },
  },
};
</script>
<style lang=""></style>
