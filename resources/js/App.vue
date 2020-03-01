<template>
  <!-- <v-app :style="'background: #f5f5f5'"> -->
  <!-- class="grey lighten-4 -->
      <v-app>
    <Navbar />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  components: { Navbar },
  data: () => ({
    //
  }),
  mounted() {
    //
    }
};
</script>