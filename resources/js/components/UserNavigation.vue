<template>
  <div>
    <v-dialog :value="dialogOpen" persistent max-width="600px" v-if="!loggedIn">
      <template v-slot:activator="{ on }">
        <v-btn text v-on="on" @click="openDialog">
          <v-icon right>mdi-login-variant</v-icon>
        </v-btn>
      </template>
      <v-tabs fixed-tabs v-model="tab">
        <v-tab :disabled="loginDisabled" @click="clearRegisterForm">Log In</v-tab>
        <v-tab :disabled="registerDisabled" @click="clearLoginForm">Register</v-tab>
        <v-tab-item>
          <login-form ref="loginForm" @close="closeDialog" @disable="disableRegister" />
        </v-tab-item>
        <v-tab-item>
          <register-form ref="registerForm" @close="closeDialog" @disable="disableLogin" />
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
      tab: null,
      registerDisabled: false,
      loginDisabled: false,
      dialogOpen: false,
      loggedIn: false
      // loginDialog: false
    };
  },
  // computed: {
  //   ...mapState(["signInOutRegDialog"])
  // },
  methods: {
    clearLoginForm() {
      this.$refs.loginForm.resetLoginForm()
    },
    clearRegisterForm() {
      this.$refs.registerForm.resetRegisterForm()
    },
    disableRegister() {
      this.registerDisabled = true;
    },
    disableLogin() {
      this.loginDisabled = true;
    },
    openDialog() {
      this.dialogOpen = true;
      // this.$store.commit("openSignInOutRegDialog");
    },
    closeDialog() {
      this.tab = null;
      this.dialogOpen = false;
    }
  }
};
</script>