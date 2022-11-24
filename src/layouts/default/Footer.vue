<template>
  <v-footer padless>
    <v-row justify="center" no-gutters>
      <v-col class="background py-4 text-center white--text" cols="12">
        Copyright @ {{ new Date().getFullYear() }} —
        <a
          href="http://nacentech.vn
"
          target="_blank"
          ><strong>Nacentech </strong></a
        >
        | All Rights Reserved.
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
export default {
  name: "DefaultFooter",
};
</script>
<style lang="scss"></style>
