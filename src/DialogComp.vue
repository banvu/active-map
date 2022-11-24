<template>
  <v-dialog transition="dialog-bottom-transition" max-width="600">
    <template v-slot:activator="{ on, attrs }">
      <!-- <v-btn color="red" v-bind="attrs" v-on="on">From the bottom</v-btn> -->
      <v-btn class="transparent rounded-pill diag-btn" v-bind="attrs" v-on="on">
        <!-- List item icon -->
        <!-- <v-list-item-icon class="ml-8 white"> -->
        <v-icon color="#2563eb">mdi-dots-horizontal-circle</v-icon>
        <!-- </v-list-item-icon> -->
        <!-- End of List item icon -->
      </v-btn>
    </template>
    <template v-slot:default="dialog">
      <v-card>
        <v-toolbar color="secondary " class="white--text"
          >Compressor 1's Specs
          <v-spacer />
          <v-btn text @click="dialog.value = false">
            <v-icon class="mx-2" fab dark small color="#ffffff"
              >mdi-close</v-icon
            >
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <!-- <div class="text-h2 pa-12">Hello world!</div> -->
          <v-row>
            <v-col md="6" cols="12" class="secondary--text bold mt-2">
              Manufacturer
            </v-col>
            <v-col md="6" cols="12" class="grey--text bold mt-2">
              HITACHI
            </v-col>
          </v-row>
          <v-row>
            <v-col md="6" cols="12" class="secondary--text bold mt-2">
              Model
            </v-col>
            <v-col md="6" cols="12" class="grey--text bold mt-2">
              AS1234567890
            </v-col>
          </v-row>
          <v-row>
            <v-col md="6" cols="12" class="secondary--text bold mt-2">
              Serial
            </v-col>
            <v-col md="6" cols="12" class="grey--text bold mt-2">
              538583JG842
            </v-col>
          </v-row>
          <v-row>
            <v-col md="6" cols="12" class="secondary--text bold mt-2">
              Year of Manufacturer
            </v-col>
            <v-col md="6" cols="12" class="grey--text bold mt-2"> 2020 </v-col>
          </v-row>
          <v-row>
            <v-col md="6" cols="12" class="secondary--text bold mt-2">
              Max pressure (bar)
            </v-col>
            <v-col md="6" cols="12" class="grey--text bold mt-2"> 12.0 </v-col>
          </v-row>
          <v-row>
            <v-col md="6" cols="12" class="secondary--text bold mt-2">
              Type
            </v-col>
            <v-col md="6" cols="12" class="grey--text bold mt-2"> FIX </v-col>
          </v-row>
          <v-row>
            <v-col md="6" cols="12" class="secondary--text bold mt-2">
              Volume (m3/min)
            </v-col>
            <v-col md="6" cols="12" class="grey--text bold mt-2"> 10 </v-col>
          </v-row>
          <v-row>
            <v-col md="6" cols="12" class="secondary--text bold mt-2">
              Power (kW)
            </v-col>
            <v-col md="6" cols="12" class="grey--text bold mt-2"> 7.5 </v-col>
          </v-row>
          <v-row>
            <v-col md="6" cols="12" class="secondary--text bold mt-2">
              Total hour
            </v-col>
            <v-col md="6" cols="12" class="grey--text bold mt-2"> 14 </v-col>
          </v-row>
          <v-row>
            <v-col md="6" cols="12" class="secondary--text bold mt-2">
              Load hour
            </v-col>
            <v-col md="6" cols="12" class="grey--text bold mt-2"> 38 </v-col>
          </v-row>
          <v-row>
            <v-col md="6" cols="12" class="secondary--text bold mt-2">
              Priority
            </v-col>
            <v-col md="6" cols="12" class="grey--text bold mt-2"> 0 </v-col>
          </v-row>
          <v-row>
            <v-col md="6" cols="12" class="secondary--text bold mt-2">
              GateID
            </v-col>
            <v-col md="6" cols="12" class="grey--text bold mt-2">
              519333301
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn text @click="dialog.value = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
export default {};
</script>

<style>
.diag-btn {
  width: 30px !important;
  min-width: 30px !important;
}
</style>
