<template>
  <v-container fluid selected class="mt-2 mb-2 rounded-b-lg">
    <v-row
      class="my-2 overflow-hidden"
      style="margin-left: 1px; margin-right: 1px; height: 80vh"
    >
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
          <!-- <vue-leaflet-minimap
            :layer="layer_crs"
            :options="miniOptions.options"
            minimized="true"
          ></vue-leaflet-minimap> -->
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
          <!-- Reuse later -->
          <!-- :keep-at-center="keepAtCenter" -->
          <l-moving-marker
            v-for="l in locations"
            :key="l.id"
            :lat-lng="l.latlng"
            :duration="duration"
            :icon="icon"
            ref="movingMarkerRef"
          >
            <l-popup :content="l.text" />
          </l-moving-marker>
          <l-control-layers
            :position="layersPosition"
            :collapsed="false"
            :sort-layers="true"
          />

          <l-control-zoom :position="zoomPosition" />

          <l-layer-group v-for="marker in markers" :key="marker.id">
            <l-circle
              :lat-lng="marker.position"
              :radius="marker.radius"
              :color="marker.color"
              :fillColor="marker.fillColor"
              :visible="marker.vision.visible"
              :fillOpacity="0.2"
              class="circle-transition"
            />

            <l-marker
              ref="marker"
              class="marker-container"
              :visible="marker.visible"
              :draggable="marker.draggable"
              :lat-lng.sync="marker.position"
              :icon="marker.icon"
            >
              <l-popup
                class="marker-popup"
                :content="
                  '<h1>' +
                  marker.tooltip +
                  '</h1>' +
                  ' ' +
                  '<br>' +
                  'Anchor Longitude: ' +
                  marker.position.lng +
                  '<br>' +
                  'Anchor Latitude: ' +
                  marker.position.lat
                "
              />
              <l-tooltip :content="marker.tooltip" />
            </l-marker>
          </l-layer-group>

          <l-layer-group layer-type="overlay" name="Restricted Area">
            <l-geo-json
              v-if="show"
              :geojson="geojson.features[0]"
              :options="mapOptions"
              ref="geolayer"
            ></l-geo-json>
          </l-layer-group>

          <l-layer-group layer-type="overlay" name="Running Area">
            <l-geo-json
              v-if="show"
              :geojson="geojson.features[1]"
              :options="mapOptions1"
              ref="geolayer"
            ></l-geo-json>
          </l-layer-group>
          <l-image-overlay :url="url" :bounds="bounds" />
          <l-control :position="'bottomleft'" class="custom-control-watermark">
            Bản đồ Kho hàng X
          </l-control>
        </l-map>
      </v-col>
      <v-col xs="12" md="12" sm="12" lg="4" style="height: 90vh">
        <v-card class="background py-3 overflow-y-auto" style="height: 74vh">
          <div class="selected mx-3">
            <!-- TabsTitle -->
            <v-tabs
              v-model="tab"
              background-color="#3C82F5"
              fixed-tabs
              dark
              class="rounded-t-sm"
            >
              <v-tab>Tag</v-tab>
              <v-tab>Area</v-tab>
              <v-tab>Log History</v-tab>
              <v-tab>Tags Setting</v-tab>
            </v-tabs>
            <!-- End of Tabs Title  -->
            <!-- Tab Content -->
            <v-window v-model="tab">
              <v-window-item>
                <v-container fluid class="mx-2 my-2">
                  <!-- <v-row class="mx-2 my-2">
                    <div
                      style="
                        :background-color: selected;
                        :margin-top: 20px;
                        :padding-top: 20px;
                      "
                      dark
                      class="flex"
                    >
                      <div class="white--text">
                        Circle Radius (Min: 0, Max: 500)
                      </div>
                      <v-slider
                      label="Circle Radius"
                        class="white--text"
                        v-model="markers[0].radius"
                        min="0"
                        max="500"
                        thumb-label
                        ticks
                      ></v-slider>
                    </div>
                  </v-row> -->
                  <v-row class="mt-2 white--text">
                    <h3>List of Tags</h3>
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
                              Latitude
                            </th>
                            <th
                              class="text-center white--text"
                              style="background-color: #0f172b"
                            >
                              Longitude
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="l in locations" :key="l.id">
                            <td class="text-center">{{ l.id + 1 }}</td>
                            <td class="text-center">
                              <input
                                class="white--text"
                                v-model.number="l.latlng.lat"
                                type="number"
                              />
                            </td>
                            <td class="text-center">
                              <input
                                class="white--text"
                                v-model.number="l.latlng.lng"
                                type="number"
                              />
                            </td>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                  </v-row>
                  <v-row>
                    <h3 class="white--text">List of Anchors</h3>
                  </v-row>
                  <v-row>
                    <button
                      name="button"
                      @click="addMarker"
                      style="
                        height: 30px;
                        border: 1px solid blue;
                        background-color: blue;
                        border-radius: 5px;
                      "
                      class="px-2 my-2 white--text"
                      title="Add Anchor"
                    >
                      Add Anchor
                    </button>
                  </v-row>
                  <v-row>
                    <v-simple-table
                      height="300px"
                      fixed-header
                      dark
                      class="background mx-1 anchor-table mb-2"
                      responsiveLayout="scroll"
                      width="100vw"
                    >
                      <template v-slot:default>
                        <thead>
                          <tr class="white--text">
                            <th
                              class="text-center white--text"
                              style="background-color: #0f172b"
                            >
                              Anchor
                            </th>
                            <th
                              class="text-center white--text"
                              style="background-color: #0f172b"
                            >
                              Latitude
                            </th>
                            <th
                              class="text-center white--text"
                              style="background-color: #0f172b"
                            >
                              Longitude
                            </th>
                            <th
                              class="text-center white--text"
                              style="background-color: #0f172b"
                            >
                              Tooltip
                            </th>
                            <th
                              class="text-center white--text"
                              style="background-color: #0f172b"
                            >
                              Is Draggable ?
                            </th>
                            <th
                              class="text-center white--text"
                              style="background-color: #0f172b"
                            >
                              Is Visible ?
                            </th>
                            <th
                              class="text-center white--text"
                              style="background-color: #0f172b"
                            >
                              C Visible ?
                            </th>
                            <th
                              class="text-center white--text"
                              style="background-color: #0f172b"
                            >
                              Remove
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item, index) in markers" :key="index">
                            <td>{{ "Anchor " + (index + 1) }}</td>
                            <td>
                              <input
                                class="white--text text-center"
                                v-model.number="item.position.lat"
                                type="number"
                              />
                            </td>
                            <td>
                              <input
                                class="white--text text-center"
                                v-model.number="item.position.lng"
                                type="number"
                              />
                            </td>
                            <td>
                              <input
                                class="white--text text-center"
                                v-model="item.tooltip"
                                type="text"
                              />
                            </td>
                            <td style="text-align: center">
                              <input v-model="item.draggable" type="checkbox" />
                            </td>
                            <td style="text-align: center">
                              <input v-model="item.visible" type="checkbox" />
                            </td>
                            <td style="text-align: center">
                              <input
                                v-model="item.vision.visible"
                                type="checkbox"
                              />
                            </td>
                            <td style="text-align: center">
                              <!-- <input
                                type="button"
                                value="X"
                                @click="removeMarker(index)"
                              /> -->
                              <button
                                name="button"
                                @click="removeMarker(index)"
                                style="
                                  height: 30px;
                                  border: 1px solid red;
                                  background-color: red;
                                  border-radius: 5px;
                                  border-radius: 10px;
                                "
                                title="Remove"
                                class="px-2 my-2 white--text"
                              >
                                X
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                  </v-row>
                </v-container>
              </v-window-item>
              <v-window-item>
                <v-container fluid>
                  <v-row class="white--text"> This is Second Tab </v-row>
                </v-container>
              </v-window-item>
              <v-window-item>
                <v-container fluid>
                  <v-row class="white--text"> </v-row>
                </v-container>
              </v-window-item>
              <v-window-item>
                <v-container fluid class="mx-2 my-2">
                  <v-row class="mt-5 mr-3" styles="width: 95%">
                    <v-select
                      class="blue--text"
                      :items="tags"
                      label="Choose tag"
                      color="blue darken-2"
                      outlined
                      dark
                    ></v-select
                  ></v-row>
                  <v-row>
                    <!-- @click="addMarker" -->
                    <button
                      name="button"
                      style="
                        height: 30px;
                        border: 1px solid blue;
                        background-color: blue;
                        border-radius: 5px;
                      "
                      class="px-2 my-2 white--text"
                      title="Add Anchor"
                    >
                      Add User
                    </button>
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
                              Username
                            </th>
                            <th
                              class="text-center white--text"
                              style="background-color: #0f172b"
                            >
                              Login Time
                            </th>
                            <th
                              class="text-center white--text"
                              style="background-color: #0f172b"
                            >
                              Duration
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td></td>
                            <td class="text-center"></td>
                            <td class="text-center"></td>
                            <td class="text-center"></td>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                  </v-row>
                </v-container>
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
// import LMovingMarker from "vue2-leaflet-movingmarker";
import "leaflet-draw/dist/leaflet.draw.css";
import { CRS, latLngBounds } from "leaflet";
import { geojson } from "./data/layer-geojson";
// import VueLeafletMinimap from "vue-leaflet-minimap";
import bgOverlay from "../assets/SmartDraw-Layout-Blog.jpg";

import L from "leaflet";
import {
  LMap,
  LMarker,
  LLayerGroup,
  LTooltip,
  LPopup,
  LControlZoom,
  LControlScale,
  LControlLayers,
  LImageOverlay,
  LCircle,
  LControl,
  LGeoJson,
} from "vue2-leaflet";
import "leaflet-fullscreen/dist/leaflet.fullscreen.css";
import "leaflet-fullscreen/dist/Leaflet.fullscreen";
import LMovingMarker from "../lib/index.vue";
import Vue2LeafletAxesGrid from "../../node_modules/vue2-leaflet-axesgrid";

import "@geoman-io/leaflet-geoman-free";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";
//Moving Marker function declaration
function rand(n) {
  // const max = n + 0.01;
  // const min = n - 0.01;
  const max = n + 300;
  const min = n - 250;
  return Math.random() * (max - min) + min;
}
const locations = [];
for (let i = 0; i < 3; i++) {
  locations.push({
    id: i,
    latlng: L.latLng(rand(500), rand(500)),
    text: "<h1>" + " Tag #" + i + "</h1>" + " <br>",
  });
}
//End of Moving Marker function
const icon = L.icon({
  iconUrl:
    "https://s3-eu-west-1.amazonaws.com/ct-documents/emails/A-static.png",
  // "https://www.clipartmax.com/png/middle/312-3128213_cart-car-icon-clipart-car-golf-buggies-computer-icons-golf-cart-icon.png",
  iconSize: [32, 37],
  iconAnchor: [10.5, 31],
  popupAnchor: [4, -25],
});
// End of declaration

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
    LMarker,
    LLayerGroup,
    LTooltip,
    LPopup,
    LControlZoom,
    LControlScale,
    LControlLayers,
    LImageOverlay,
    LMovingMarker,
    LCircle,
    LControl,
    "v-axesgrid": Vue2LeafletAxesGrid,
    LGeoJson,
    // VueLeafletMinimap,
  },
  //Moving Marker Props
  props: {
    //Setting time Interval here
    duration: { type: Number, default: 30000 },
    // keepAtCenter: { type: Boolean, default: false },
  },
  data() {
    return {
      tags: ["Tag 1", "Tag 2", "Tag 3"],
      tab: null,
      show: true,
      geojson,
      locations,
      icon,
      initialLocation: L.latLng(654, 1097),
      interval: null,
      opts: {
        showLabel: true,
      },
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
      //Minimap Settings
      miniOptions: {
        options: {
          minimized: true,
          toggleDisplay: true,
          width: 200,
          height: 150,
          zoomLevelFixed: false,
          zoomAnimation: false,
          aimingRectOptions: { color: "#ff7800", weight: 1, clickable: false },
          shadowRectOptions: {
            color: "#000000",
            weight: 1,
            clickable: false,
            opacity: 1,
            fillOpacity: 1,
          },
          collapsedWidth: 32,
          collapsedHeight: 32,
        },
      },
      //End of Minimap Settings
      //Area Settings
      mapOptions: {
        zoomControl: false,
        attributionControl: false,
        zoomSnap: true,
        onEachFeature: (feature, layer) => {
          layer.bindPopup("This is " + feature.properties.name);
          layer.bindTooltip(
            " <h1 style=' color: red'>" + feature.properties.name + "</h1>"
          );
          layer.on({
            mouseover: this.highlightFeature,
            mouseout: this.resetHighlight,
            click: this.clickFeature,
          });
        },
        style: function style() {
          return {
            fillColor: "#FC4E2A",
            weight: 2,
            opacity: 1,
            color: "white",
            // dashArray: "3",
            fillOpacity: 0.3,
          };
        },
      },
      mapOptions1: {
        zoomControl: false,
        attributionControl: false,
        zoomSnap: true,
        onEachFeature: (feature, layer) => {
          layer.bindPopup("This is " + feature.properties.name);
          // layer.bindTooltip("This is " + feature.properties.name);
          layer.on({
            mouseover: this.highlightFeature_1,
            mouseout: this.resetHighlight_1,
            click: this.clickFeature_1,
          });
        },
        style: function style() {
          return {
            fillColor: "#3C82F5",
            weight: 2,
            opacity: 1,
            color: "white",
            // dashArray: "3",
            fillOpacity: 0.3,
          };
        },
      },
      //End of Area Settings
      zoom: 3,
      minZoom: -1,
      maxZoom: 1.5,
      zoomPosition: "topleft",
      layersPosition: "topright",
      imperial: false,
      Positions: ["topleft", "topright", "bottomleft", "bottomright"],

      markers: [
        {
          id: "m1",
          position: { lat: 296, lng: 501 },
          // position: { lat: 0, lng: 0 },
          tooltip: "Anchor 1",
          draggable: true,
          visible: true,
          radius: 500,
          color: "blue",
          fillColor: "blue",
          vision: {
            visible: false,
          },
        },
        {
          id: "m2",
          position: { lat: 1088, lng: 491 },
          tooltip: "Anchor 2",
          draggable: true,
          visible: true,
          radius: 500,
          color: "blue",
          fillColor: "blue",
          vision: {
            visible: false,
          },
        },
        {
          id: "m3",
          position: { lat: 1082, lng: 1453 },
          tooltip: "Anchor 3",
          draggable: true,
          visible: true,
          radius: 500,
          color: "blue",
          fillColor: "blue",
          vision: {
            visible: false,
          },
        },
        {
          id: "m4",
          position: { lat: 362, lng: 1711 },
          tooltip: "Anchor 4",
          draggable: true,
          visible: true,
          radius: 500,
          color: "blue",
          fillColor: "blue",
          vision: {
            visible: false,
          },
        },
      ],

      stuff: [],
    };
  },
  methods: {
    // alert(item) {
    //   alert("this is " + JSON.stringify(item));
    // },
    addMarker: function () {
      const newMarker = {
        position: { lat: 654, lng: 1097 },
        draggable: true,
        visible: true,
        radius: 500,
        vision: {
          visible: true,
        },
      };
      this.markers.push(newMarker);
    },
    removeMarker: function (index) {
      this.markers.splice(index, 1);
    },

    // isMarkerInsidePolygon(marker, geojson) {
    //   var inside = false;
    //   var x = marker.getLatLng().lat,
    //     y = marker.getLatLng().lng;
    //   for (var ii = 0; ii < geojson.getLatLngs().length; ii++) {
    //     var polyPoints = geojson.getLatLngs()[ii];
    //     for (
    //       var i = 0, j = polyPoints.length - 1;
    //       i < polyPoints.length;
    //       j = i++
    //     ) {
    //       var xi = polyPoints[i].lat,
    //         yi = polyPoints[i].lng;
    //       var xj = polyPoints[j].lat,
    //         yj = polyPoints[j].lng;

    //       var intersect =
    //         yi > y != yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    //       if (intersect) inside = !inside;
    //     }
    //   }
    //   return inside;
    //   if (inside == true) {
    //     console.log("inside");
    //   } else {
    //     console.log("Not inside");
    //   }
    // },

    //Hovering Effect
    // showModal() {
    //   this.$refs["my-modal"].show();
    // },
    // hideModal() {
    //   this.$refs["my-modal"].hide();
    // },
    addTextToDiv(text) {
      const markerPlace = document.querySelector(".marker-position");
      markerPlace.textContent = text;
    },
    //Hovering 1
    highlightFeature(e) {
      var layer = e.target;
      layer.setStyle({
        fillColor: "red",
        weight: 4,
        color: "#666",
        // dashArray: "",
        // fillOpacity: 0.5,
        fillOpacity: 0.7,
      });

      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }
    },
    resetHighlight(e) {
      var layer = e.target;

      layer.setStyle({
        fillColor: "#FC4E2A",
        weight: 1,
        opacity: 1,
        color: "white",
        // dashArray: "3",
        fillOpacity: 0.3,
      });

      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }
    },
    clickFeature(ev) {
      const feature = ev.target && ev.target.feature;
      const featureProps = feature && feature.properties;
      this.selectedFeature = featureProps;
      // this.showModal();
    },
    //Hovering 2
    highlightFeature_1(e) {
      var layer = e.target;
      layer.setStyle({
        fillColor: "#3C82F5",
        weight: 4,
        color: "#666",
        // dashArray: "",
        // fillOpacity: 0.5,
        fillOpacity: 0.7,
      });

      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }
    },
    resetHighlight_1(e) {
      var layer = e.target;

      layer.setStyle({
        fillColor: "#3C82F5",
        weight: 1,
        opacity: 1,
        color: "white",
        // dashArray: "3",
        fillOpacity: 0.3,
      });

      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }
    },
    clickFeature_1(ev) {
      const feature = ev.target && ev.target.feature;
      const featureProps = feature && feature.properties;
      this.selectedFeature = featureProps;
      // this.showModal();
    },
  },
  mounted() {
    const map = this.$refs.map.mapObject;
    // map.addControl(new window.L.Control.Fullscreen());
    L.control
      .fullscreen({
        position: "bottomright",
      })
      .addTo(map);

    map.pm.addControls({
      position: "topleft",
      drawPolygon: true,
      drawMarker: false,
      drawCircleMarker: false,
      drawPolyline: true,
      drawRectangle: true,
      drawCircle: false,
      editMode: true,
      dragMode: true,
      cutPolygon: false,
      removalMode: true,
      drawText: false,
    });

    map.on("pm:drawstart", (e) => {
      console.log(e, "draw start first point");
    });
    map.on("pm:drawend", (e) => {
      console.log(e, "Prohibition of drawing, end of drawing");
    });
    map.on("pm:create", (e) => {
      console.log(e, "Called when drawing is complete");
      if (e.shape == "Circle") {
        console.log(e.layer._latlng, e.layer._radius, "draw coordinates");
      } else {
        console.log(e.layer._latlngs[0], "draw coordinates");
      }
    });
    map.on("pm:globalremovalmodetoggled", (e) => {
      console.log(e, "Called when the layer is cleared");
    });
    // Edit Color of Drawing Tool
    // map.pm.setPathOptions({
    //   color: "orange",
    //   fillColor: "green",
    //   fillOpacity: 0.4,
    // });
  },
  //Moving Marker watch
  watch: {
    duration: {
      handler(value, oldValue) {
        if (value !== oldValue) {
          clearInterval(this.interval);
          const setRandomLatLng = () => {
            this.locations.forEach((location) => {
              location.latlng = L.latLng(rand(654), rand(1097));
            });
          };
          this.interval = setInterval(() => {
            setRandomLatLng();
          }, value);
          setRandomLatLng();
        }
      },
      immediate: true,
    },
  },
  // End here
};
</script>

<style lang="css" scoped>
@import "~leaflet/dist/leaflet.css";
@import "~leaflet-draw/dist/leaflet.draw.css";
/* @import "~leaflet-minimap/dist/Control.MiniMap.min.css"; */
.vue2leaflet {
  z-index: 1;
  height: 74vh !important;
  width: 100% !important;
  margin: 0 auto !important;
  background-color: white !important;
  /* background-color: gray !important; */
  border-radius: 5px !important;
}

.heatMap-container {
  z-index: 99 !important;
}

.raw-toolbar {
  z-index: -1 !important;
}

.marker-popup {
  font-size: 20px !important;
  font-weight: bold;
  border-radius: 2px solid !important;
}

.marker-container:hover {
}
.marker-container {
  background-color: red !important;
}

.vue-grid {
  z-index: -1 !important;
}

@keyframes fadeIn {
  from {
    fill-opacity: 0 !important;
  }
  to {
    fill-opacity: 0.5 !important;
  }
}
.circle-transition {
  animation: 1s ease-out 0s 1 fadeIn !important;
}
.circle-transition:hover {
  fill: red !important;
  fill-opacity: 1 !important;
  transition: all 1s !important;
}

.custom-control-watermark {
  font-size: 200%;
  font-weight: bolder;
  color: rgb(51, 51, 51);
  text-shadow: #555;
}

.v-application ul,
.v-application ol {
  padding-left: 0px;
  /* z-index: 2; */
}

.anchor-table {
  width: 96%;
}
</style>
