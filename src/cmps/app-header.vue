<template>
<div class="header-container">
<dynamic-header :explore="explore" :details="details" :isScroll="isScroll"/>
</div>

</template>

<script>

import dynamicHeader from '@/cmps/dynamic-header'
import {orderService} from '@/services/order.service'
import {eventBusService, SHOW_MSG} from '@/services/event-bus.service'
export default {
  props:{
    explore:Boolean,
    details:Boolean
  },

  data() {
    return {
      loggedInUser: null,
      scroll:null,
      order:null,
      filterBy:null
  }
  },
  created() {
    const filter=this.$store.getters.filterBy
    console.log('first filter',filter);
    this.filterBy=JSON.parse(JSON.stringify(filter))
    window.addEventListener('scroll', this.handleScroll);
      this.order=orderService.getEmptyOrder()
     this.$store.commit({type:'setUserPage',page:'home'})
     eventBusService.$on('setFilter',filterBy=>{
       this.filterBy = filterBy
       this.$store.commit({type:'setFilter', filterBy})
       if (this.currPage) this.$router.push('/stay')
      //  else return
     })
     eventBusService.$on('saveOrder',newOrder=>{
       this.$store.dispatch({type:'saveOrder', newOrder})

      })
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
    setFilter(filterBy){
    this.filterBy = filterBy
    this.$store.dispatch({type:'setFilter', filterBy})
    
    },
    saveOrder(newOrder){
    },
    setLocFilter(location){
      this.filterBy.country=location
      this.setFilter({...this.filterBy})
    }
    
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
    },       
    currPage(){
      if (this.$store.getters.userPage==='home') return true
    }
  },
  components:{
    dynamicHeader,  
    },

};
</script>
