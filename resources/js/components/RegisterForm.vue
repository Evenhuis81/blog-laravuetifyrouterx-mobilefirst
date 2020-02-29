<template>
  <v-dialog v-model="registerDialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <!-- <v-btn color="primary" dark v-on="on">Open Dialog</v-btn> -->
      <v-btn v-on="on" color="red darken-1" outlined>Register</v-btn>
      <!-- <v-btn text v-on="on">
        Sign In
        <v-icon right>mdi-login-variant</v-icon>
      </v-btn>-->
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Register</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field label="First name*" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field label="Last name*" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Email*" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Password*" type="password" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-autocomplete
                :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                label="Interests"
                multiple
              ></v-autocomplete>
            </v-col>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="registerDialog = false">Close</v-btn>
        <v-btn color="green" text @click="registerDialog = false">Register</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      registerDialog: false
    };
  }
};
</script>