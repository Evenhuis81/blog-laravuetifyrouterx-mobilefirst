<template>
  <!-- <v-dialog v-model="registerDialog" persistent max-width="600px"> -->
  <!-- <template v-slot:activator="{ on }"> -->
  <!-- <v-btn color="primary" dark v-on="on">Open Dialog</v-btn> -->
  <!-- <v-btn v-on="on" color="red darken-1" outlined>Register</v-btn> -->
  <!-- </template> -->
  <v-form ref="form" v-model="valid" @submit.prevent="submitRegisterForm">
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field v-model="form.name" :rules="rules.name" label="Username" required></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field v-model="form.email" :rules="rules.email" label="E-mail" required></v-text-field>
        </v-col>

        <v-col cols="12" sm="6">
          <v-text-field
            v-model="form.password"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.password.required, rules.password.min]"
            type="password"
            label="Password"
            :hint="form.password.length >= 5 ? '' : 'At least 5 characters'"
            counter
            @click:append="showPassword = !showPassword"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <span class="red--text">{{ errors.registerForm }}</span>
      <small>*indicates required field</small>
      <v-card-actions>
        <v-btn outlined :loading="loading" :disabled="!valid" color="primary" type="submit">Register</v-btn>
        <v-spacer></v-spacer>
        <v-btn text @click="closeDialog">Close</v-btn>
      </v-card-actions>
    </v-container>
  </v-form>
  <!-- </v-dialog> -->
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      loading: false,
      errors: {
        registerForm: ""
      },
      form: {
        name: "",
        email: "",
        password: ""
      },
      rules: {
        name: [v => !!v || "Username is required"],
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
    };
  },
  methods: {
    closeDialog() {
      this.resetRegisterForm();
      this.$emit("close");
    },
    ...mapActions({
      signIn: "auth/signIn"
    }),
    submitRegisterForm() {
      if (this.$refs.form.validate()) {
        this.$emit("disable");
        this.loading = true;
        this.signIn(this.form);
      } else {
        this.errors.registerForm =
          "Something went wrong with validation, contact support!!";
      }
    },
    resetRegisterForm() {
      this.showPassword = false;
      this.errors.registerForm = "";
      this.form.name = "";
      this.form.email = "";
      this.form.password = "";
      this.$refs.form.resetValidation();
    }
  }
};
</script>