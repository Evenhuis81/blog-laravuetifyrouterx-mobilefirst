<template>
  <div>
    <div v-if="unverifiedToken">
      <v-btn icon>
        <v-icon>mdi-account-remove</v-icon>
      </v-btn>
    </div>
    <v-dialog :value="dialogOpen" persistent max-width="600px" v-else-if="!authenticated">
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
        <v-list-item @click="signOut">
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
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import { mapActions } from "vuex";

export default {
  components: { registerForm, loginForm },
  data() {
    return {
      testDialog: false,
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
      authenticated: "auth/authenticated",
      unverifiedToken: "auth/unverifiedToken"
      // user: "auth/user"
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
    ...mapActions({
      signOutAction: "auth/signOut",
      verifyToken: "auth/verifyToken"
    }),
    signOut() {
      this.signOutAction().then(() => {
        if (this.$route.path !== "/") {
          this.$router.push({ path: "/" });
        }
      });
    },
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
      // this.$refs.loginForm.autoFocus();

      // this.$store.commit("openSignInOutRegDialog");
    },
    closeDialog() {
      this.tab = null;
      this.dialogOpen = false;
    }
  },
  created() {
    if (this.unverifiedToken) {
      this.verifyToken(this.unverifiedToken);
    }
  }
};
</script>