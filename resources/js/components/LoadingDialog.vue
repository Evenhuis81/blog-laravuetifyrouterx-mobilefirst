<template>
  <div class="text-center">
    <v-dialog :value="loadingDialog" hide-overlay persistent width="300">
      <v-card color="primary" dark>
        <v-card-text>
          Please stand by
          <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({ loadingDialog: "auth/loadingDialog" })
  },
  methods: {
    ...mapActions({
      //   setLoginDialog: "auth/setLoginDialog",
      //   logOutAction: "auth/logOut",
      //   verifyToken: "auth/verifyToken",
      //   toDashboard: "routing/dashboard"
    })
  }
};
</script>