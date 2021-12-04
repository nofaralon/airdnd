<template>
  <div id="app" >
    <app-header v-if="isHome"/>
    <explore-header v-if="issExplore"/>
    <details-header v-if="isDetails"/>
    <router-view @header="setHeader" />
    <app-footer />
  </div>
</template>

<script>
import { myRouter } from "./router/index.js";
import { myStore } from "./store/index.js";
import appHeader from "./cmps/app-header.vue";
import exploreHeader from "./cmps/app-header.vue";
import detailsHeader from "./cmps/app-header.vue";
import appFooter from "./cmps/app-footer.vue";
import dynamicFilter from "./cmps/dynamic-filter.vue"

export default {
  name: "App",
  data(){
    return{
      home:true,
      explore:false,
      details:false,
    }
  },
  created() {
        this.$store.dispatch({ type: 'loadStays' })
    },
    methods:{
      setHeader(header){

        if (header==='home'){
          this.home=true,
          this.explore=false,
          this.details=false
        }else if (header==='explore'){
          this.home=false,
          this.explore=true,
          this.details=false
        }else if (header==='details'){
          this.home=false,
          this.explore=false,
          this.details=true
        }
        console.log();
        console.log(this.home,this.explore,this.details);
      }
},
    computed:{
      isHome(){
        if(this.home) return true
      },
        isExplore(){
        if(this.explore) return true
      },
        isDetails(){
        if(this.details) return true
      },
    },
  components: {
    appHeader,
    exploreHeader,
    detailsHeader,
    appFooter,
    dynamicFilter

  },
    router: myRouter,
    store: myStore
};
</script>

