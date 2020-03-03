<template>
  <div>
    <p v-if="!blogs.length">Loading...</p>
    <p v-else>Done</p>
  </div>
</template>

    <script>
import { mapGetters } from "vuex";
import * as moment from "moment";

export default {
  data() {
    return {
      //
    };
  },
  // name: "Blogs",
  mounted() {
    this.$store.dispatch("fetchBlogs");
    // this.$store.dispatch("fetchCategories");
    // console.log(moment().format());
  },
  methods: {
    // blogCreatedFromNow(date) {
    // return this.$moment(date).fromNow();
    // }
    // deleteBlog(blog) {
    //   this.$store.dispatch("deleteBlog", blog);
    // }
  },
  computed: {
    ...mapGetters(["blogs", "categories"])
  }
};
</script>
