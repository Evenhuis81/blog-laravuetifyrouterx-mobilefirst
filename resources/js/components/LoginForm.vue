<template>
  <v-form ref="form" v-model="valid" @submit.prevent="submitLoginForm">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field v-model="form.email" :rules="rules.email" label="E-mail" required></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            v-model="form.password"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.password.required, rules.password.min]"
            :type="showPassword ? 'text' : 'password'"
            label="Password"
            :hint="form.password.length >= 5 ? '' : 'At least 5 characters'"
            counter
            @click:append="showPassword = !showPassword"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <span class="red--text">{{ errors.loginForm }}</span>
      <v-card-actions>
        <v-btn
          text
          outlined
          :loading="loginLoading"
          :disabled="!valid"
          color="primary"
          type="submit"
        >Login</v-btn>
        <v-spacer></v-spacer>
        <v-btn :disabled="loginLoading" text @click="closeDialog">Close</v-btn>
      </v-card-actions>
    </v-container>
  </v-form>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  data: () => ({
    // signedInDialog: false,
    // autofocus: true,
    errors: {
      loginForm: ""
    },
    form: {
      email: "",
      password: ""
    },
    rules: {
      email: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      password: {
        required: value => !!value || "Password is required",
        min: v => v.length >= 5 || "Min 5 characters"
      }
    },
    showPassword: false,
    valid: true
  }),
  computed: {
    ...mapGetters({ loginLoading: "auth/loginLoading" })
  },
  methods: {
    // autoFocus() {
    //   console.log("hi");
    // },
    closeDialog() {
      this.resetLoginForm();
      this.$emit("close");
    },
    ...mapActions({
      signIn: "auth/signIn",
      setLoginLoading: "auth/setLoginLoading",
      signedInDialog: "auth/openSignedInDialog"
    }),
    submitLoginForm() {
      if (this.$refs.form.validate()) {
        // this.$emit("disable");
        // this.loading = true;
        this.setLoginLoading();
        this.signIn(this.form);
        // this.signedInDialog();
      } else {
        this.errors.loginForm =
          "Something went wrong with validation, contact support!!";
      }
    },
    resetLoginForm() {
      this.showPassword = false;
      this.errors.loginForm = "";
      this.form.email = "";
      this.form.password = "";
      // this.$refs.form.reset();
      this.$refs.form.resetValidation();
    }
    // resetValidation() {
    //   this.$refs.form.resetValidation();
    // }
  }
};
</script>