<template>
    <section class="location-options">
            <div class="countries-modal-title">
            <span>GO ANYWHERE, ANYTIME</span>
            </div>
            <div @click="search" class="explore-button-container">
              <div class="explore-button">
              <div >
                <span class="flexible-text">I'm flexible</span>
              </div>
              <div class="icon-container">
                <i class="el-icon-arrow-right"></i>
              </div>
            </div>
              </div>
              <div class="top-cities-text">
                <span>TOP CITIES</span>
              </div>
            <div class="stays-options">
              <div v-for="(country,index) in countries" :key="index">
                <div @click="setLoc(country.name)">
                  <span>
                    {{country.name}} - stays
                    
                  </span>
                </div>

            </div>      

            </div>

          </section>    
</template>

<script>

export default ({
    data(){
        return {
         countries:[
        {name:'France'},
        {name:'Thailand'},
        {name:'Icleand'},
        {name:'Florida'},
        {name:'Netherlands'}
        ]
      
        }
    },
    methods:{
    async search() {
      await eventBusService.$emit("setBigFilter", { ...this.filterBy });
      await eventBusService.$emit("saveOrder", this.currOrder);
      await this.$emit("filter");
      await eventBusService.$emit("updatePrices");
    },
    
    },
    setLoc(country){
        this.filterBy.country=country;
        // now just emit with type:'setBigFilter' with this.filterBy
    },
    computed:{
    filterBy() {
      const filter = JSON.parse(JSON.stringify(this.$store.getters.filterBy));
      return filter;
    },
    }
})
</script>
