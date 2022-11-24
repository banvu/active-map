<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container class="mt-2 mb-5 white rounded-b-lg" fluid>
    <v-row>
      <v-col
        v-for="(item, index) in items"
        :key="index"
        cols="auto"
        sm="6"
        md="6"
        lg="4"
        xl="3"
      >
        <!-- <v-card>
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title>{{ item.title }}</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">
            id: {{ item.id }}
            <div>Created Time {{ item.createdTime }}</div>
            <div>Updated Time {{ item.updatedTime }}</div>
          </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{ item.subTitle }}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="blue" text @click="gotoDir()"> Enter </v-btn>
          </v-card-actions>
        </v-card> -->
        <v-card max-width="250" color="#fec325" hover link href="/sum-air">
          <!-- <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
          ></v-img> -->

          <v-card-title>
            Sum Air
            <v-spacer></v-spacer>
            <v-icon>mdi-chevron-right</v-icon>
          </v-card-title>

          <!-- <v-card-subtitle> Army Knowledge Online </v-card-subtitle> -->

          <!-- <v-card-actions>
            <v-btn text>SHARE</v-btn>

            <v-btn color="#000" text> Explore </v-btn>

            <v-spacer></v-spacer>

            <v-btn icon @click="show = !show">
              <v-icon>{{
                show ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions> -->

          <!-- <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>

              <v-card-text>
                Army Knowledge Online provides web-based enterprise information
                services to the United States Army, joint, and Department of
                Defense customers.
              </v-card-text>
            </div>
          </v-expand-transition> -->
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
        id: "62f4dc44c6a5a99ceb80f10f",
        title: "Sum-Air",
        subTitle: "Máy nén",
        createdTime: "11/08/2022 - 17:39:00",
        updatedTime: "11/08/2022 - 17:39:00",
      },
      // {
      //   id: "62716316fe829abafc83aa53",
      //   title: "RTLS",
      //   subTitle: "Dự án RTLS",
      //   createdTime: "04/05/2022 - 00:15:02",
      //   updatedTime: "04/05/2022 - 00:15:02",
      // },
    ],
  }),
  methods: {
    gotoDir() {
      this.$router.push("/sum-air");
    },
  },
};
</script>
<style lang="scss">
// .mx-auto {
//   margin: 20px;
//   box-shadow: 9px 9px 9px rgba(128, 128, 128, 0.6);
// }
// .mx-auto:hover {
//   box-shadow: 9px 9px 9px rgba(20, 20, 20, 0.6);
// }
</style>
