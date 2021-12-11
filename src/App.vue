<template>
  <div id="app">
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
  data() {
    return {
      url: null,
      filterBy:{
        country:'',
        type:'',
        ailments:'',
        guests:null,
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
  router: myRouter,
  store: myStore,
};
</script>
