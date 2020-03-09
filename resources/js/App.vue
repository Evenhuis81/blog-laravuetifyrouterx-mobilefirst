<template>
  <!-- <v-app :style="'background: #f5f5f5'"> -->
  <!-- class="grey lighten-4 -->
  <v-app>
    <Navbar />
    <v-content>
      <v-dialog v-model="userDialog" max-width="290">
        <v-card>
          <v-card-title class="headline">Signed In...</v-card-title>

          <v-card-text>Click outside of window to close and stay on current page or choose below:</v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="green darken-1" text @click="toIndex">Index Page</v-btn>

            <v-btn color="green darken-1" text @click="toDashboard">User Settings</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import { mapGetters } from "vuex";
// import { mapActions } from "vuex";
// import { mapMutations } from "vuex";

export default {
  components: { Navbar },
  data: () => ({
    // signedInDialog: false
  }),
  computed: {
    ...mapGetters({ signedInDialog: "auth/signedInDialog" }),
    userDialog: {
      get() {
        return this.signedInDialog;
      },
      set(newValue) {
        return newValue;
      }
    }
  },
  methods: {
    // ...mapActions({
    //   closeSignedInDialog: "auth/closeSignedInDialog"
    // }),
    toIndex() {
      // console.log(this.$router.path);
      this.$store.dispatch("auth/closeSignedInDialog");
      // this.$router.push({ path: "/" });
      if (this.$route.path !== "/") {
        this.$router.push({ path: "/" });
      }
    },
    toDashboard() {
      this.$store.dispatch("auth/closeSignedInDialog");
      if (this.$route.path !== "/about") {
        this.$router.push({ path: "/about" });
      }
    }

    // ...mapMutations({ signedInDialog: "auth/signedInDialog" })
  },
  mounted() {
    //
  }
};
</script>