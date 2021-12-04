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
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity 2s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
