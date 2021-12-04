<template>
  <div>
    <transition name="component-fade" mode="out-in">
    <component :is="filterType"></component>
</transition>
  </div>
</template>

<script>
import stayFilter from "@/cmps/stay-filter"
import stayFilterSmall from "@/cmps/stay-filter-small"
export default {
  props: {
    isSmall: Boolean,
  },
  data() {
    return {
      scroll: null,
    };
  },
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
  }
};
</script>

<style lang="scss" scoped>
.component-fade-enter-active {
  transition: width .3s ,all .3s ease;

}
.component-fade-leave-active {
  transition: width .3s,all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);

}
.component-fade-enter, .component-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-80px);
  opacity: 0;
}
</style>
