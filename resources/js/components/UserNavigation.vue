<template>
  <div>
    <v-dialog :value="dialogOpen" persistent max-width="600px" v-if="!loggedIn">
      <template v-slot:activator="{ on }">
        <v-btn text v-on="on" @click="openDialog">
          <v-icon right>mdi-login-variant</v-icon>
        </v-btn>
      </template>
      <v-tabs fixed-tabs>
        <v-tab>Log In</v-tab>
        <v-tab :disabled="registerDisabled">Register</v-tab>
        <v-tab-item>
          <login-form @close="closeDialog" @disable="disableRegister" />
        </v-tab-item>
        <v-tab-item>
          <register-form />
        </v-tab-item>
      </v-tabs>
    </v-dialog>

    <v-menu offset-y v-else-if="loggedIn">
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item @click="loggedIn = true">
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item>
        <v-list-item @click="loggedIn = true">
          <v-list-item-title>Log Out</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import registerForm from "./RegisterForm.vue";
import loginForm from "./LoginForm.vue";
// import { mapState } from "vuex";

export default {
  components: { registerForm, loginForm },
  data() {
    return {
      registerDisabled: false,
      dialogOpen: false,
      loggedIn: false
      // loginDialog: false
    };
  },
  // computed: {
  //   ...mapState(["signInOutRegDialog"])
  // },
  methods: {
    disableRegister() {
      this.registerDisabled = true;
    },
    openDialog() {
      this.dialogOpen = true;
      // this.$store.commit("openSignInOutRegDialog");
    },
    closeDialog() {
      this.dialogOpen = false;
    }
  }
};
</script>