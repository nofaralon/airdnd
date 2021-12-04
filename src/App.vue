<template>
  <div id="app" >
    <app-header @filter="setFilter"/>
    <dynamic-filter :isSmall="filterType"/>
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import { myRouter } from "./router/index.js";
import { myStore } from "./store/index.js";
import appHeader from "./cmps/app-header.vue";
import appFooter from "./cmps/app-footer.vue";
import dynamicFilter from "./cmps/dynamic-filter.vue"

export default {
  name: "App",
  data(){
    return{
      filter:false
    }
  },
  created() {
        this.$store.dispatch({ type: 'loadStays' })
    },
    methods:{
      setFilter(isSmall){
        this.filter=isSmall
      }
    },
    computed:{
      filterType(){
        return this.filter
      }
    },
  components: {
    appHeader,
    appFooter,
    dynamicFilter

  },
    router: myRouter,
    store: myStore
};
</script>

