<template>
  <div>
    <transition name="component-fade" mode="out-in">
    <component @filter="$emit('filter')" :isScroll="isScroll" :is="headerType"></component>
</transition>
  </div>
</template>

<script>
import stayHeader from '@/cmps/stay-header'
import stayHeaderWhite from '@/cmps/stay-header-white'
export default {
  props: {
    isScroll: Boolean,
        },
computed: {
    headerType() {
      console.log(this.isScroll);
      if (this.isScroll) {
        var header = "stay-header-white";
      } else {
        var header = "stay-header";
      }
      return header;
    },
  },
  components:{
      stayHeader,
      stayHeaderWhite
  }
}
</script>

<style lang="scss" scoped>
.component-fade-enter-active {
  transition: all 2s ease;

}
.component-fade-leave-active {
  transition: all 2s cubic-bezier(1, 1, 1, 1);

}
.component-fade-enter, .component-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(80px);
  opacity: 0;
  animation: shrink 2s linear;

}
@keyframes shrink {
  20% {
    width: 80%
  }
  40% {
    width: 60%
  }
}

</style>
