<template>
  <v-container fluid selected class="mt-2 mb-2 rounded-b-lg map-container">
    <l-map
      :center="center"
      :zoom="zoom"
      class="map"
      ref="map"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
    >
      <l-tile-layer :url="url"> </l-tile-layer>
      <vue-leaflet-minimap
        :layer="layer"
        :options="miniOptions"
        :minimized="miniOptions.minimized"
      ></vue-leaflet-minimap>
    </l-map>
  </v-container>
</template>

<script>
import { LMap, LTileLayer } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";
import VueLeafletMinimap from "vue-leaflet-minimap";
import L from "leaflet";
export default {
  components: {
    LMap,
    LTileLayer,
    VueLeafletMinimap,
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      center: [49.1193089, 6.1757156],
      zoom: 12,
      layer: new L.TileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ),
      miniOptions: {
        // options: {
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
        // },
      },
    };
  },
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom;
      console.log(this.markers);
    },
    centerUpdated(center) {
      this.center = center;
    },
  },
};
</script>

<style>
@import "~leaflet/dist/leaflet.css";
@import "~leaflet-minimap/dist/Control.MiniMap.min.css";
.map-container {
  height: 900px;
}
.map {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
