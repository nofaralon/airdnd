<template>
  <div id="app">
    <app-header v-if="isHome" />
    <explore-header v-if="isExplore" />
    <details-header v-if="isDetails" />
    <router-view @header="setHeader" />
    <app-footer />
  </div>
</template>

<script>
import { myRouter } from "./router/index.js";
import { myStore } from "./store/index.js";
import appHeader from "./cmps/app-header.vue";
import exploreHeader from "./cmps/explore-header.vue";
import detailsHeader from "./cmps/details-header.vue";
import appFooter from "./cmps/app-footer.vue";

export default {
  name: "App",
  data() {
    return {
      home: true,
      explore: false,
      details: false,
      url: null,
    };
  },
  created() {
    this.$store.dispatch({ type: "loadStays" });
  },

  methods: {
    setHeader(header) {
      if (header === "home") {
        (this.home = true), (this.explore = false), (this.details = false);
      } else if (header === "explore") {
        (this.home = false), (this.explore = true), (this.details = false);
      } else if (header === "details") {
        (this.home = false), (this.explore = false), (this.details = true);
      }
    },
  },
  computed: {
    isHome() {
      if (this.home) {
        return true;
      } else {
        return false;
      }
    },
    isExplore() {
      if (this.explore) {
        return true;
      } else {
        return false;
      }
    },
    isDetails() {
      if (this.details) {
        return true;
      } else {
        return false;
      }
    },
  },
  components: {
    appHeader,
    exploreHeader,
    detailsHeader,
    appFooter,
  },
  router: myRouter,
  store: myStore,
};
</script>
