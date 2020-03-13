<template>
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
</template>

<script>
export default {
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
    toIndex() {
      this.$store.dispatch("auth/closeSignedInDialog");
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
  }
};
</script>
