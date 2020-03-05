<template>
  <div>
    <v-app-bar app clipped-left color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <router-link to="/" class="d-flex align-center">
        <v-img src="/storage/logo_inverted.png" height="35" contain max-width="55"></v-img>
      </router-link>

      <v-spacer />

      <v-toolbar-title to="/" class="ml-4 white--text" v-text="spaTitle"></v-toolbar-title>

      <v-spacer />

      <user-navigation />
    </v-app-bar>

    <v-navigation-drawer app clipped v-model="drawer">
      <v-col class="mt-5" align="center" v-if="!loggedIn">
        <img src="/storage/navdrawerlogo_1833982-200.png" height="50" alt="avatar" />
        <p class="title mt-1">Not Logged In</p>
      </v-col>

      <v-col class="mt-5" align="center" v-else-if="loggedIn">
        <img src="/storage/navdrawerlogo_1833982-200.png" height="50" alt="avatar" />
        <p class="title mt-1">Logged In</p>
      </v-col>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
            <v-list-item-title></v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { SPA_TITLE } from "../constants";
// let spa_title = process.env.MIX_APP_NAME;

import userNavigation from "./UserNavigation.vue";

export default {
  components: { userNavigation },
  data: () => ({
    loggedIn: false,
    spaTitle: SPA_TITLE,
    drawer: false,
    menuItems: [{ name: "About Us", route: "/about" }]
  }),
  created() {
    //
  }
};
</script>
