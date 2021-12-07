<template>
  <div>
    
    <transition name="component-fade" mode="out-in">
    <component @filter="$emit('filter')" @saveOrder="saveOrder" @setFilter="setFilter" :order="order" class="main-layout" :is="filterType"></component>
</transition>
  </div>
</template>

<script>
import stayFilter from "@/cmps/stay-filter"
import stayFilterSmall from "@/cmps/stay-filter-small"
export default {
  props: {
    isSmall: Boolean,
    order:Object
  },
  created(){},
  computed: {
    filterType() {
      if (this.isSmall) {
        var filter = "stay-filter-small";
      } else {
        var filter = "stay-filter";
      }
      return filter;
    },
  },
  components:{
      stayFilter,
      stayFilterSmall
  },
  methods:{
    setFilter(filterBy){
      console.log('emit in dynamic',filterBy);
      this.$emit('setFilter', filterBy)
    },
    saveOrder(newOrder){
      this.$emit('saveOrder',newOrder)
    }
  }
};
</script>

<style lang="scss" scoped>
.component-fade-enter-active {
  transition: all 0s ease;

}
.component-fade-leave-active {
  transition: all .3s 
  
}
.component-fade-enter, .component-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-80px) scale(0.36, 0.7);
  opacity: 0;
}
</style>
