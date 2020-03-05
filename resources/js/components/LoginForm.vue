<template>
  <v-card>
    <!-- <v-card>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field label="Email" required></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field label="Password*" type="password" required></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required></v-select>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn text @click="closeDialog">Close</v-btn>
      <v-btn color="primary" text @click="as">Login</v-btn>
    </v-card-actions>
    </v-card>-->
    <v-form ref="form" v-model="valid" @submit.prevent="submitForm">
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
        <span class="red--text">{{ errors.frontEndFormValidation }}</span>
        <v-card-actions>
          <v-btn text :loading="loading" :disabled="!valid" color="primary" type="submit">Login</v-btn>
          <v-spacer></v-spacer>
          <v-btn :disabled="loading" text @click="closeDialog">Close</v-btn>
        </v-card-actions>
        <!-- <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn> -->
        <!-- <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn> -->
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    loading: false,
    errors: {
      frontEndFormValidation: ""
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
  methods: {
    closeDialog() {
      this.$emit("close");
    },
    ...mapActions({
      signIn: "auth/signIn"
    }),
    submitForm() {
      if (this.$refs.form.validate()) {
        this.$emit("disable");
        this.loading = true;
        this.signIn(this.form);
      } else {
        this.errors.frontEndFormValidation =
          "Something went wrong with validation, contact support!!";
      }
    }
    // reset() {
    //   this.$refs.form.reset();
    // },
    // resetValidation() {
    //   this.$refs.form.resetValidation();
    // }
  }
};
</script>