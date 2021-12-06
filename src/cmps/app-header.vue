<template>
<div class="header-container">
<dynamic-header :explore="explore" :details="details" :isScroll="isScroll"/>
</div>

</template>

<script>

import dynamicHeader from '@/cmps/dynamic-header'

export default {
  props:{
    explore:Boolean,
    details:Boolean
  },

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
    dynamicHeader,  
    },

};
</script>
