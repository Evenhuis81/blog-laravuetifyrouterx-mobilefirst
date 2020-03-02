<template>
  <div>
    <v-app-bar app clipped-left color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <router-link to="/" class="d-flex align-center">
        <v-img src="/storage/logo_inverted.png" height="35" contain max-width="55"></v-img>
        <v-toolbar-title to="/" class="ml-4 white--text" v-text="spaTitle"></v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>

      <!-- <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>-->

      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>-->

      <login-form></login-form>
      <!-- <register-form> -->

      <v-menu bottom left :offset-y="true">
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(menuItem, index) in menuItems"
            :key="index"
            router
            :to="menuItem.route"
          >
            <v-list-item-title>{{ menuItem.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer app clipped v-model="drawer">
      <v-list nav dense>
        <v-list-item-group active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
            <v-list-item-title>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis dolorum voluptate reiciendis commodi consequuntur doloremque illum facere ipsum tempore dicta, adipisci animi, nihil eum amet. Fugit, deleniti inventore. Ad, magni?</p>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { SPA_TITLE } from "../constants";
// let spa_title = process.env.MIX_APP_NAME;

import loginForm from "./LoginForm.vue";

export default {
  components: { loginForm },
  data: () => ({
    spaTitle: SPA_TITLE,
    drawer: false,
    menuItems: [{ name: "About Us", route: "/about" }]
    // dialog: false,
    //     testlist: [
    //       { title: "Click Me" },
    //       { title: "Click Me" },
    //       { title: "Click Me" },
    //       { title: "Click Me 2" }
    //     ],
    //     offset: false,

    //     sdf: "",
    //     loading: false,
    //     searchfield: "",
    //     items: [
    //       { title: "Dashboard", icon: "mdi-magnify", route: "/" },
    //       { title: "Account", icon: "", route: "about" }
    //     ]
    //   };
    // },
    // methods: {
    //   clearSearch() {
    //     this.searchfield = "";
    //   },
    //   search() {
    //     if (this.searchfield === "" || null) {
    //       this.loading = false;
    //     } else {
    //       this.loading = "white";
    //     }
  }),
  created() {
    //
  }
};
</script>

<style>
/* .v-toolbar__title {
  cursor: pointer;
} */
</style>