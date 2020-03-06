<template>
  <div>
    <div class="text-center mt-10" v-if="!blogs.length">
      <v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
    </div>
    <!-- <div v-else class="text-center mt-10">Done</div> -->
    <v-card class="mt-2" v-else v-for="blog in blogs" :key="blog.id">
      <v-card-text class="pb-0">
        <v-card class="d-flex flex-row" tile flat>
          <!-- <div>{{ categories[blog.category_id-1].name }}</div> -->
          <div>{{ blog.category.name }}</div>
          <div class="ml-auto">{{ blogCreatedFromNow(blog.created_at) }}</div>
        </v-card>
        <p style="max-width: 450px;" class="display-1 text--primary text-truncate">{{ blog.title }}</p>
        <p class="fade">{{ blog.description }}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn text color="primary">Read Full Article</v-btn>
      </v-card-actions>
    </v-card>
    <!-- <v-snackbar top :value="snackbar" @change="closeSnackbar" :timeout="timeout" class="mt-5">
      You are now logged in...
      <v-btn color="blue" text @click="closeSnackbar">Close</v-btn>
    </v-snackbar>-->
  </div>
</template>

    <script>
import { mapGetters } from "vuex";
// import { mapMutations } from "vuex";
import * as moment from "moment";

export default {
  data() {
    return {
      timeout: 2000
    };
  },
  // name: "Blogs",
  mounted() {
    // this.$store.dispatch("fetchCategories");
    setTimeout(() => {
      this.$store.dispatch("fetchBlogs");
    }, 1000);
  },
  methods: {
    // ...mapMutations({ closeSnackbar: "auth/closeSnackbar" }),
    blogCreatedFromNow(date) {
      return moment(date).fromNow();
    }
    // deleteBlog(blog) {
    //   this.$store.dispatch("deleteBlog", blog);
    // }
  },
  computed: {
    ...mapGetters({ blogs: "blogs" })
    // how to combine array and object in map?
  }
};
</script>

<style>
.fade {
  max-width: 550px;
  overflow: hidden;
  position: relative;
  height: 4.125rem; /* exactly three lines */
}
.fade:after {
  content: "";
  text-align: right;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 20%;
  height: 1.375rem;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1) 50%
  );
}
</style>