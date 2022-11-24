<template>
  <v-container fluid selected class="mt-2 mb-2 rounded-b-lg">
    <v-row class="my-2 overflow-hidden" style="height: 80vh">
      <v-col xs="12" md="12" sm="12" lg="8" style="height: 90vh">
        <l-map
          ref="map"
          :crs="crs"
          :zoom="zoom"
          :options="mapOptions"
          :bounds="bounds"
          :min-zoom="minZoom"
          :max-zoom="maxZoom"
          :center="initialLocation"
          :max-bounds="maxBounds"
          class="vue2leaflet"
          crossOrigin="true"
        >
          <Heatmap class="heatMap-container" />
          <!-- Control Scale  -->
          <l-control-scale
            position="topright"
            :imperial="true"
            :metric="true"
          ></l-control-scale>
          <!-- End of Control Scale -->
          <!-- Axes Grid -->
          <v-axesgrid :options="opts" class="vue-grid" />
          <!-- End of Axes Grid -->

          <l-control-zoom :position="zoomPosition" />

          <l-layer-group layer-type="overlay" name="Restricted Area">
          </l-layer-group>

          <l-image-overlay :url="url" :bounds="bounds" />
          <l-control :position="'bottomleft'" class="custom-control-watermark">
            Bản đồ Kho hàng X
          </l-control>

          <!-- Heatmap Line -->
          <l-layer-group layer-type="overlay" name="Restricted Area">
            <l-geo-json
              v-if="show"
              :geojson="heatmap_json.features[0]"
              :options="mapOptions"
              ref="geolayer"
            ></l-geo-json>
            <!-- <l-geo-json
              v-if="show"
              :geojson="geojson.features[0]"
              :options="mapOptions"
              ref="geolayer"
            ></l-geo-json> -->
          </l-layer-group>
          <!-- End of Heatmap Line -->
        </l-map>
      </v-col>
      <v-col xs="12" md="12" sm="12" lg="4" style="height: 90vh">
        <v-card class="background py-3 overflow-y-auto" style="height: 74vh">
          <div class="selected mx-3">
            <!-- TabsTitle -->
            <v-tabs
              v-model="tab_h"
              background-color="#3C82F5"
              fixed-tabs
              dark
              class="rounded-t-sm"
            >
              <v-tab>Heatmap</v-tab>
              <v-tab>Graphs</v-tab>
            </v-tabs>
            <!-- End of Tabs Title  -->
            <!-- Tab Content -->
            <v-window v-model="tab_h">
              <v-window-item>
                <v-container fluid class="mx-2 my-2">
                  <v-row class="mt-2 white--text">
                    <h3>Line</h3>
                    <input
                      id="checkbox"
                      v-model="show"
                      type="checkbox"
                      class="ml-3"
                    />
                  </v-row>
                  <v-row class="mt-2 white--text">
                    <h3>Point Information</h3>
                  </v-row>
                  <v-row>
                    <v-simple-table
                      fixed-header
                      dark
                      class="background mx-1 anchor-table"
                    >
                      <template v-slot:default>
                        <thead>
                          <tr>
                            <th
                              class="text-center white--text"
                              style="background-color: #0f172b"
                            >
                              Tag
                            </th>
                            <th
                              class="text-center white--text"
                              style="background-color: #0f172b"
                            >
                              Coordinates
                            </th>
                            <th
                              class="text-center white--text"
                              style="background-color: #0f172b"
                            >
                              Time
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <!-- <tr v-for="l in latlngs" :key="l[0]"> -->
                          <!-- <td class="text-center">{{ l.id }}</td> -->
                          <!-- <td class="text-center">
                              <input
                                class="white--text"
                                v-model.number="l[0]"
                                type="number"
                              />
                            </td> -->
                          <!-- <td class="text-center">
                              <input
                                class="white--text"
                                v-model.number="l.latlng.lng"
                                type="number"
                              />
                            </td> -->
                          <!-- </tr> -->
                        </tbody>
                      </template>
                    </v-simple-table>
                  </v-row>
                </v-container>
              </v-window-item>

              <v-window-item>
                <v-container
                  fluid
                  class="mt-2 mb-2 selected rounded-b-lg"
                  style="height: 67vh"
                >
                  <v-row class="overflow-hidden">
                    <v-col
                      xs="12"
                      md="6"
                      sm="6"
                      lg="6"
                      class="white--text text-center font-weight-medium"
                    >
                      <hm-chart />
                      Line Chart
                    </v-col>
                    <v-col
                      xs="12"
                      md="6"
                      sm="6"
                      lg="6"
                      class="white--text text-center font-weight-medium"
                    >
                      <donut-chart />
                      Bar Chart
                    </v-col>
                  </v-row>
                  <v-row class="overflow-hidden">
                    <v-col
                      xs="12"
                      md="6"
                      sm="6"
                      lg="6"
                      class="white--text text-center font-weight-medium"
                    >
                      <donut-chart />
                      Bar Chart
                    </v-col>
                    <v-col
                      xs="12"
                      md="6"
                      sm="6"
                      lg="6"
                      class="white--text text-center font-weight-medium"
                    >
                      <hm-chart />
                      Line Chart
                    </v-col>
                  </v-row>
                </v-container>

                <!-- <v-container fluid class="my-2 rounded flex">
                </v-container> -->
              </v-window-item>
            </v-window>
          </div>
        </v-card>
        <!-- End of Tab Content -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { CRS, latLngBounds } from "leaflet";
import bgOverlay from "../assets/SmartDraw-Layout-Blog.jpg";
// import { geojson } from "./data/layer-geojson";
import { heatmap_json } from "./data/heatmap-geojson";

import L from "leaflet";
import {
  LMap,
  LLayerGroup,
  LControlZoom,
  LControlScale,
  LImageOverlay,
  LControl,
  LGeoJson,
} from "vue2-leaflet";
import "leaflet-fullscreen/dist/leaflet.fullscreen.css";
import "leaflet-fullscreen/dist/Leaflet.fullscreen";
import Vue2LeafletAxesGrid from "../../node_modules/vue2-leaflet-axesgrid";
import Heatmap from "./Heatmap.vue";
import "@geoman-io/leaflet-geoman-free";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";

// Chart Importing
import HmChart from "./heatmap-graphs/HmChart.vue";

import DonutChart from "./heatmap-graphs/DonutChart.vue";

// End of Chart Importing

//Marker's Icon Importing
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});
//End of Marker's Icon Importing

export default {
  name: "RealTimeMap",
  components: {
    LMap,
    LLayerGroup,
    LControlZoom,
    LControlScale,
    LImageOverlay,
    LControl,
    "v-axesgrid": Vue2LeafletAxesGrid,
    LGeoJson,
    Heatmap,
    HmChart,
    DonutChart,
  },

  data() {
    return {
      tab_h: null,
      show: true,
      heatmap_json,
      // geojson,
      opts: {
        showLabel: true,
      },
      // geojson,
      initialLocation: L.latLng(654, 1097),
      interval: null,

      bounds: [
        [0, 0],
        [1146, 2180],
      ],
      maxBounds: latLngBounds([
        [0, 0],
        [1146, 2180],
      ]),
      // url: "https://cdn.optimoroute.com/wp-content/uploads/2020/09/SmartDraw-Layout-Blog.jpg",
      url: bgOverlay,
      // crs: CRS.Simple,
      crs: CRS.Simple,
      //Minimap layer
      // layer_crs: new L.TileLayer(
      //   "https://cdn.optimoroute.com/wp-content/uploads/2020/09/SmartDraw-Layout-Blog.jpg"
      // ),
      layer_crs: new L.TileLayer(
        "https://cdn.optimoroute.com/wp-content/uploads/2020/09/SmartDraw-Layout-Blog.jpg"
      ),

      zoom: 3,
      minZoom: -1,
      maxZoom: 1.5,
      zoomPosition: "topleft",
      layersPosition: "topright",
      imperial: false,
      Positions: ["topleft", "topright", "bottomleft", "bottomright"],
      mapOptions: {
        zoomControl: false,
        attributionControl: false,
        zoomSnap: true,
        style: function style() {
          return {
            stroke: true,
            color: "red",
            weight: 5,
          };
        },
        // style: function style() {
        //   return {
        //     fillColor: "#FC4E2A",
        //     weight: 2,
        //     opacity: 1,
        //     color: "white",
        //     // dashArray: "3",
        //     fillOpacity: 0.3,
        //   };
        // },
      },
    };
  },
  methods: {
    // alert(item) {
    //   alert("this is " + JSON.stringify(item));
    // },
  },
  mounted() {
    const map = this.$refs.map.mapObject;
    // map.addControl(new window.L.Control.Fullscreen());
    L.control
      .fullscreen({
        position: "bottomright",
      })
      .addTo(map);
  },
};
</script>

<style lang="css">
@import "~leaflet/dist/leaflet.css";
@import "~leaflet-draw/dist/leaflet.draw.css";

.vue2leaflet {
  z-index: 1;
  height: 74vh !important;
  width: 100% !important;
  margin: 0 auto !important;
  background-color: white !important;
  /* background-color: gray !important; */
  border-radius: 5px !important;
}

.anchor-table {
  width: 96%;
}
</style>
