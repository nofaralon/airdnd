<template>
<div class="header-container">
<dynamic-header :isScroll="isScroll"/>
</div>

</template>

<script>
import dynamicFilter from '@/cmps/dynamic-filter'
import dynamicHeader from '@/cmps/dynamic-header'
export default {

  data() {
    return {
      loggedInUser: null,
      scroll:null,
    };
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll(e) {
      this.scroll = window.scrollY || window.scrollTop
    },
    goTo(here) {
      this.$router.push(here);
    },
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    isScroll(){
      if(this.scroll){
        return true
      }else{
        return false
      }
    }
  },
  components:{
    dynamicFilter,
    dynamicHeader
  },

};
</script>
