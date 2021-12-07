<template>
  <div>
    <transition name="component-fade" mode="out-in">
    <component @filter="$emit('filter')" :explore="explore" :details="details" :isScroll="isScroll" :is="headerType"></component>
</transition>
  </div>
</template>

<script>
import stayHeader from '@/cmps/stay-header'
import stayHeaderWhite from '@/cmps/stay-header-white'
import exploreHeader from '@/cmps/explore-header'
export default {
  props:{
    isScroll: Boolean,

  },
  data() {
    return{
      explore:false,
      details:false
    }
        },
computed: {
    headerType() {
      if(this.currPage==='explore'){
        var header="explore-header"
              this.explore=true
              this.details=false
              console.log('in explore');

      }else if(this.currPage==='details'){
        var header="explore-header"
              this.explore=false
              this.details=true
              console.log('in details');
      }else if(this.currPage==='home'){
          var header = "stay-header-white";
              this.explore=false
              this.details=false
      }
        return header;
    },
    currPage(){
      return this.$store.getters.userPage
    }

  },
  components:{
      stayHeader,
      stayHeaderWhite,
      exploreHeader
  }
}
</script>

<style lang="scss" scoped>
.component-fade-enter-active {
  transition: all .2s ease;
}
.component-fade-leave-active {
  transition: all .2s ease;
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
