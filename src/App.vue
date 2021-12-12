<template>
  <div id="app">
    <app-header />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import { router } from "./router/index.js";
import { myStore } from "./store/index.js";
import appHeader from "./cmps/app-header.vue";
import appFooter from "./cmps/app-footer.vue";

export default {
  name: "App",
  data() {
    return {
      url: null,
      filterBy:{
        country:'',
        type:'',
        ailments:'',
        guests:0,
        Dates:"",
        type:[],
        fromPrice: 45,
        toPrice: 250,
        beds: 0,
        bedrooms: 0,
        bathrooms: 0,
      },
    };
  },
  async created() {
    await this.$store.dispatch({ type: "loadStays" });
    
  },

  methods: {
  },
  computed: {
  },
  components: {
    appHeader,
    appFooter,
  },
  router: router,
  store: myStore,
};
</script>
