<template>
  <v-container fluid selected class="mb-2 rounded-b-lg">
    <!-- Main Row -->
    <v-row style="margin-left: 1px; margin-right: 1px">
      <!-- First Column -->
      <v-col xs="12" md="12" sm="12" lg="3">
        <v-container
          class="background mx-auto rounded-lg"
          style="height: 917px"
        >
          <v-card class="mx-2 my-3 secondary rounded-pill">
            <v-card-text
              class="text-center white--text"
              style="font-weight: 500; font-size: 20px"
            >
              {{ $t("messages.compressors") }}
            </v-card-text>
          </v-card>

          <!-- First Column Content -->
          <v-card-text class="grey--text" style="font-weight: 500" elevation:1>
            Details
          </v-card-text>
          <v-card
            class="mx-2 pt-4 mb-3 selected rounded-lg"
            style="height: 750px"
          >
            <!-- :bench="benched" -->

            <!-- <v-virtual-scroll
              class="mx-2 selected rounded-lg"
              height="730"
              :items="items"
              item-height="64"
            > -->
            <v-list
              max-height="710"
              class="overflow-y-auto mx-2 selected rounded-lg comp-list"
            >
              <!-- style="cursor: move" -->
              <!-- group="kanban" -->
              <draggable
                v-model="compressorList"
                ghost-class="ghost"
                :animation="200"
              >
                <v-list-item
                  v-for="item in compressorList"
                  class="mx-3 rounded-lg blur comp-list-items"
                  :key="item.compressorName"
                  dark
                >
                  <v-row align="center" xs="12">
                    <v-col cols="2" md="1" sm="1" lg="3">
                      <DialogCompVue />
                    </v-col>
                    <v-col cols="4" md="5" sm="5" lg="3">
                      <!-- <v-row :align="align"> -->
                      <!-- List item title -->
                      <v-list-item-title align="center">{{
                        item.compressorName
                      }}</v-list-item-title>
                      <!-- End of List item title -->
                    </v-col>
                    <v-col cols="2" md="1" sm="1" lg="3">
                      <!-- List item icon -->
                      <v-list-item-icon>
                        <v-img
                          max-height="30"
                          max-width="30"
                          v-bind:src="require('../assets/' + item.icon)"
                        ></v-img>
                      </v-list-item-icon>
                      <!-- End of List item icon -->
                    </v-col>
                    <v-col cols="4" md="5" sm="5" lg="3">
                      <v-list-item-subtitle
                        class="text-h5"
                        style="font-weight: 500"
                        align="center"
                      >
                        <div :style="{ color: item.statusColor }">
                          {{ item.status }}
                        </div>
                      </v-list-item-subtitle>
                    </v-col>
                    <!-- </v-row> -->
                  </v-row>
                </v-list-item>
              </draggable>
            </v-list>
            <!-- <v-spacer /> -->
            <v-row align="center">
              <!-- <v-col cols="1" md="1" xs="1">
                  <v-btn class="transparent rounded-pill" :width="1"> -->
              <!-- List item icon -->
              <!-- <v-list-item-icon class="ml-8">
                      <v-icon color="#2563eb">Click me</v-icon> -->
            </v-row>
            <!-- </v-virtual-scroll> -->
          </v-card>
          <!-- End of First Column Content -->
        </v-container>
      </v-col>
      <!-- End of First Column -->
      <!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
      <!-- Second Column -->
      <v-col class="mb-3" xs="12" cols="12" md="12" sm="12" lg="6">
        <v-container class="background mx-auto rounded-lg">
          <v-card class="mx-2 my-3 secondary rounded-pill">
            <v-card-text
              class="text-center white--text"
              style="font-weight: 500; font-size: 20px"
            >
              {{ $t("messages.graphs") }}
            </v-card-text>
          </v-card>

          <v-card-text class="grey--text" style="font-weight: 500">
            Graph
          </v-card-text>
          <!-- Second Column First Row -->
          <v-card class="mx-2 selected rounded-lg" dark>
            <v-container class="selected rounded-lg" style="height: 349px">
              <v-card-text style="font-weight: 300">
                Compressor 1 Graph
              </v-card-text>

              <LineChart />
            </v-container>
          </v-card>
          <!-- End of Second Column First Row -->

          <v-card-text class="grey--text" style="font-weight: 500">
            Graph Details
          </v-card-text>
          <!-- Table Content -->
          <v-card class="mx-2 mb-3 selected rounded-lg" dark>
            <v-container class="selected rounded-lg" style="height: 346px">
              <v-card-text class="white--text" style="font-weight: 300">
                Real Time Values Table
              </v-card-text>
              <v-card
                dark
                class="background white--text mx-10"
                justify-content="center"
              >
                <!-- <v-card-title> Tables </v-card-title> -->
                <v-card-text class="pa-0">
                  <v-data-table
                    dark
                    :height="220"
                    :headers="headers"
                    :items="values"
                    :hide-default-footer="true"
                    class="elevation-1 background element"
                  />
                </v-card-text>
              </v-card>
              <v-card-text>
                <v-col
                  class="text-h6 text-right"
                  style="font-style: italic; font-weight: 200"
                >
                  <!-- Last updated: {{ new Date().toLocaleString() }} -->
                  Last Updated: {{ new Date().toLocaleString() }}
                </v-col>
              </v-card-text>
            </v-container>
          </v-card>
          <!-- End of Table Content -->
        </v-container>
      </v-col>
      <!-- End of Second Column -->
      <!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
      <!-- Third Column -->
      <v-col class="mb-3" xs="12" cols="12" md="12" lg="3">
        <v-container class="background mx-auto rounded-lg">
          <v-card class="mx-2 my-3 secondary rounded-pill">
            <v-card-text
              class="text-center white--text"
              style="font-weight: 500; font-size: 20px"
            >
              {{ $t("messages.RTvalue") }}
            </v-card-text>
          </v-card>

          <v-card-text class="grey--text" style="font-weight: 500">
            Current Value
          </v-card-text>
          <v-card class="mx-2 selected rounded-lg">
            <v-container class="selected rounded-lg">
              <v-card-text class="white--text" style="font-weight: 300">
                Current Line Pressure
              </v-card-text>
              <v-col align="center">
                <v-card
                  class="rounded-pill current-flow align-center justify-center"
                >
                  <v-card-title
                    v-for="item in current_volume_flow"
                    :key="item.value"
                    class="pt-10 white--text text-center align-center justify-center"
                    style="font-size: 60px; font-weight: 700"
                  >
                    <!-- {{ item.value }} -->
                    <!-- {{ randomNumber() }} -->
                    {{ word }}
                    <v-card-text
                      class="grey--text text-center align-center justify-center"
                      style="font-size: 32px; font-weight: 700"
                      >bar</v-card-text
                    >
                  </v-card-title>
                </v-card>
              </v-col>
            </v-container>
          </v-card>

          <v-card class="mt-13 mb-3 mx-2 selected rounded-lg" dark>
            <v-container class="selected rounded-lg">
              <v-card-text class="white--text" style="font-weight: 300">
                Current Volume Flow
              </v-card-text>
              <v-col align="center">
                <v-card
                  class="rounded-pill current-flow align-center justify-center"
                >
                  <v-card-title
                    v-for="item in current_volume_flow"
                    :key="item.value"
                    class="pt-10 white--text text-center align-center justify-center"
                    style="font-size: 60px; font-weight: 700"
                  >
                    <!-- {{ item.value }} -->
                    <!-- {{ randomNumber() }} -->
                    <!-- {{ word }} -->
                    9.0
                    <v-card-text
                      class="grey--text text-center align-center justify-center"
                      style="font-size: 32px; font-weight: 700"
                      >m3/min</v-card-text
                    >
                  </v-card-title>
                </v-card>
              </v-col>
            </v-container>
          </v-card>
        </v-container>
      </v-col>
      <!-- End of Third Column -->
    </v-row>
    <!-- End of Main Row -->
  </v-container>
</template>
<script>
import LineChart from "./Line.vue";
import DialogCompVue from "@/DialogComp.vue";
const words = ["4.0", "5.3", "6.5", "7.7", "8.2", "9.0"];
import Draggable from "vuedraggable";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Dashboard",
  components: {
    LineChart,
    DialogCompVue,
    Draggable,
  },
  data() {
    return {
      //List Items
      word: "",
      labels: ["SU", "MO", "TU", "WED", "TH", "FR", "SA"],
      items: ["Live", "Lịch sử"],
      timeProps: {
        useSeconds: true,
        ampmInTitle: true,
      },
      datetime: new Date(),
      selected: "",
      time: 0,
      compressorList: [
        {
          detailIcon: " mdi-dots-horizontal-circle",
          compressorName: "C1",
          icon: "Alert.png",
          status: "Error",
          statusColor: "#FF0101",
          compressorValue: "7",
          compressorTime: "12:02:13",
        },
        {
          detailIcon: " mdi-dots-horizontal-circle",
          compressorName: "C12",
          icon: "Running.png",
          status: "Off",
          statusColor: "#73DF4D",
          compressorValue: "7",
          compressorTime: "12:02:13",
        },
        {
          detailIcon: " mdi-dots-horizontal-circle",
          compressorName: "C3",
          icon: "Warning.png",
          status: "Warning",
          statusColor: "#FFF519",
          compressorValue: "7",
          compressorTime: "12:02:13",
        },
        {
          detailIcon: " mdi-dots-horizontal-circle",
          compressorName: "C5",
          icon: "Running.png",
          status: "Running",
          statusColor: "#73DF4D",
          compressorValue: "7",
          compressorTime: "12:02:13",
        },
        {
          detailIcon: " mdi-dots-horizontal-circle",
          compressorName: "X",
          icon: "Running.png",
          status: "Running",
          statusColor: "#73DF4D",
          compressorValue: "7",
          compressorTime: "12:02:13",
        },
        {
          detailIcon: " mdi-dots-horizontal-circle",
          compressorName: "Y",
          icon: "Running.png",
          status: "Running",
          statusColor: "#73DF4D",
          compressorValue: "7",
          compressorTime: "12:02:13",
        },
        {
          detailIcon: " mdi-dots-horizontal-circle",
          compressorName: "Z",
          icon: "Running.png",
          status: "Running",
          statusColor: "#73DF4D",
          compressorValue: "7",
          compressorTime: "12:02:13",
        },
        {
          detailIcon: " mdi-dots-horizontal-circle",
          compressorName: "L",
          icon: "Running.png",
          status: "Running",
          statusColor: "#73DF4D",
          compressorValue: "7",
          compressorTime: "12:02:13",
        },
        {
          detailIcon: " mdi-dots-horizontal-circle",
          compressorName: "M",
          icon: "Running.png",
          status: "Running",
          statusColor: "#73DF4D",
          compressorValue: "7",
          compressorTime: "12:02:13",
        },
        {
          detailIcon: " mdi-dots-horizontal-circle",
          compressorName: "N",
          icon: "Running.png",
          status: "Running",
          statusColor: "#73DF4D",
          compressorValue: "7",
          compressorTime: "12:02:13",
        },
        {
          detailIcon: " mdi-dots-horizontal-circle",
          compressorName: "O",
          icon: "Running.png",
          status: "Running",
          statusColor: "#73DF4D",
          compressorValue: "7",
          compressorTime: "12:02:13",
        },
        {
          detailIcon: " mdi-dots-horizontal-circle",
          compressorName: "Q",
          icon: "Running.png",
          status: "Running",
          statusColor: "#73DF4D",
          compressorValue: "7",
          compressorTime: "12:02:13",
        },
        {
          detailIcon: " mdi-dots-horizontal-circle",
          compressorName: "W",
          icon: "Running.png",
          status: "Running",
          statusColor: "#73DF4D",
          compressorValue: "7",
          compressorTime: "12:02:13",
        },
        {
          detailIcon: " mdi-dots-horizontal-circle",
          compressorName: "E",
          icon: "Running.png",
          status: "Running",
          statusColor: "#73DF4D",
          compressorValue: "7",
          compressorTime: "12:02:13",
        },
      ],

      //Change value of Current Volume FLow Here !!!!!
      current_volume_flow: [{ value: "9.0" }],
      //Table Variables
      headers: [
        {
          text: "ID",
          align: "center",
          sortable: false,
          value: "id",
        },
        { text: "Time", value: "time", align: "center" },
        { text: "Value 1", value: "value1", align: "center" },
        { text: "Value 2", value: "value2", align: "center" },
        { text: "Desc", value: "desc", align: "center" },
      ],
      values: [
        {
          id: 1,
          time: "11:56:21",
          value1: 7.0,
          value2: 9.0,
          desc: "",
        },
        {
          id: 2,
          time: "11:56:21",
          value1: 7.0,
          value2: 9.0,
          desc: "",
        },
        {
          id: 3,
          time: "11:56:21",
          value1: 7.0,
          value2: 9.0,
          desc: "",
        },
        {
          id: 4,
          time: "11:56:21",
          value1: 7.0,
          value2: 9.0,
          desc: "",
        },
        {
          id: 5,
          time: "11:56:21",
          value1: 7.0,
          value2: 9.0,
          desc: "",
        },
        {
          id: 6,
          time: "11:56:21",
          value1: 7.0,
          value2: 9.0,
          desc: "",
        },
        {
          id: 7,
          time: "11:56:21",
          value1: 7.0,
          value2: 9.0,
          desc: "",
        },
        {
          id: 8,
          time: "11:56:21",
          value1: 7.0,
          value2: 9.0,
          desc: "",
        },
        {
          id: 9,
          time: "11:56:21",
          value1: 7.0,
          value2: 9.0,
          desc: "",
        },
        {
          id: 10,
          time: "11:56:21",
          value1: 7.0,
          value2: 9.0,
          desc: "",
        },
      ],
    };
  },
  computed: {},

  methods: {
    updateWord: function () {
      this.word = words[Math.floor(Math.random() * words.length)];
    },
  },
  mounted: function () {
    this.updateWord();
    setInterval(this.updateWord, 3000);
  },
};
</script>
<style lang="scss">
.list-item-bg {
  opacity: 0.3;
}

.ghost {
  opacity: 0.5;
  background: #f7fafc;
  border: 1px solid #4299e1;
}

.current-flow {
  // position: absolute;
  width: 246px;
  height: 246px;
  background: #0f172b !important;
  box-shadow: 0px 4px 1px rgba(216, 183, 183, 0.25) !important;
}

.comp-list {
  cursor: pointer;
}

.comp-list-items {
  cursor: n-resize;
}

.comp-list::-webkit-scrollbar {
  width: 14px;
  border-radius: 30px;
  cursor: pointer !important;
}
.comp-list::-webkit-scrollbar-track {
  background: #383838;
  border-left: 1px solid #2c2c2c;
  cursor: pointer !important;
}

.comp-list::-webkit-scrollbar-thumb {
  background: #649cf7;
  border: solid 3px #202020;
  border-radius: 7px;
  cursor: pointer !important;
}

.comp-list::-webkit-scrollbar-thumb:hover {
  width: 100px;
  background: #0564fc;
  cursor: pointer !important;
}

// ::-webkit-scrollbar {
//   cursor: pointer !important;
// }
// :-webkit-scrollbar-track {
//   cursor: pointer !important;
// }

// :-webkit-scrollbar-thumb {
//   cursor: pointer !important;
// }

// :-webkit-scrollbar-thumb:hover {
//   cursor: pointer !important;
// }

.comp-list-items:not(:first-child) {
  margin-top: 1rem !important;
}

.element .v-data-table__wrapper::-webkit-scrollbar {
  width: 8px;
  background: #383838;
  border-radius: 30px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #0c66f8;
  border-radius: 30px;
}

.element .v-data-table__wrapper::-webkit-scrollbar-thumb:hover {
  background: #0c66f8;
  width: 10px;
  cursor: pointer;
}

table.v-data-table thead th {
  font-size: 30px !important;
}

table th + th {
  border-left: 1px solid #383838;
  font-size: 18px !important;
}
table td + td {
  border-left: 1px solid #383838;
  font-size: 16px !important;
}
.v-application--is-ltr .v-data-footer__pagination {
  margin-left: auto;
}
.hidden {
  visibility: hidden !important;
}
</style>
