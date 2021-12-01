<template>
  <div id="app" >
    <app-header />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import { myRouter } from "./router/index.js";
import { myStore } from "./store/index.js";
import appHeader from "./cmps/app-header.vue";
import appFooter from "./cmps/app-footer.vue";

export default {
  name: "App",
  created() {
        this.$store.dispatch({ type: 'loadStays' })
    },
  components: {
    appHeader,
    appFooter,

  },
    router: myRouter,
    store: myStore
};
</script>

