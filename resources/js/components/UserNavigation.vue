<template>
  <div>
    <v-dialog :value="dialogOpen" persistent max-width="600px" v-if="!authenticated">
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on" @click="openDialog">
          <v-icon>mdi-login-variant</v-icon>
        </v-btn>
      </template>
      <v-tabs fixed-tabs v-model="tab">
        <v-tab :disabled="registerLoading" @click="clearRegisterForm">Log In</v-tab>
        <v-tab :disabled="loginLoading" @click="clearLoginForm">Register</v-tab>
        <v-tab-item>
          <login-form ref="loginForm" @close="closeDialog" />
        </v-tab-item>
        <v-tab-item>
          <register-form ref="registerForm" @close="closeDialog" />
        </v-tab-item>
      </v-tabs>
    </v-dialog>

    <v-menu offset-y v-else-if="authenticated">
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

    <v-dialog v-model="testDialog" max-width="290">
      <v-card>
        <v-card-title class="headline">Use Google's location service?</v-card-title>

        <v-card-text>Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.</v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>

          <v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import registerForm from "./RegisterForm.vue";
import loginForm from "./LoginForm.vue";
// import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  components: { registerForm, loginForm },
  data() {
    return {
      testDialog: true,
      timeout: 2000,
      tab: null,
      dialogOpen: false
    };
  },
  computed: {
    ...mapGetters({
      snackbar: "auth/loggedInSnackbar",
      loginLoading: "auth/loginLoading",
      registerLoading: "auth/registerLoading",
      authenticated: "auth/authenticated"
    })
    //   ...mapState(["signInOutRegDialog"])
    // snackbar: {
    //   get() {
    //     return this.$store.getters["auth/loggedInSnackbar"];
    //   },
    //   set() {
    //     this.$store.commit("auth/closeSnackbar");
    //   }
    // }
  },
  methods: {
    ...mapMutations({ closeSnackbar: "auth/closeSnackbar" }),
    clearLoginForm() {
      this.tab === 1 ? "" : this.$refs.loginForm.resetLoginForm();
    },
    clearRegisterForm() {
      this.tab === 0 ? "" : this.$refs.registerForm.resetRegisterForm();
      //
    },
    // disableRegister() {
    //   this.registerDisabled = true;
    // },
    // disableLogin() {
    //   this.loginDisabled = true;
    // },
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