<template>
<div :class="{'go-big': open}">

<div class="header-container">



  <header class="app-header full fixed main-layout" :class="{'white':isWhite}">
    <div class="main-header">
      <div @click="goTo('/')" class="logo">
        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="airbnb" class="svg-inline--fa fa-airbnb fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path :style="[isWhite?{'color':'rgb(255, 56, 92)'} : {'color':'white'}]" fill="currentColor" d="M224 373.12c-25.24-31.67-40.08-59.43-45-83.18-22.55-88 112.61-88 90.06 0-5.45 24.25-20.29 52-45 83.18zm138.15 73.23c-42.06 18.31-83.67-10.88-119.3-50.47 103.9-130.07 46.11-200-18.85-200-54.92 0-85.16 46.51-73.28 100.5 6.93 29.19 25.23 62.39 54.43 99.5-32.53 36.05-60.55 52.69-85.15 54.92-50 7.43-89.11-41.06-71.3-91.09 15.1-39.16 111.72-231.18 115.87-241.56 15.75-30.07 25.56-57.4 59.38-57.4 32.34 0 43.4 25.94 60.37 59.87 36 70.62 89.35 177.48 114.84 239.09 13.17 33.07-1.37 71.29-37.01 86.64zm47-136.12C280.27 35.93 273.13 32 224 32c-45.52 0-64.87 31.67-84.66 72.79C33.18 317.1 22.89 347.19 22 349.81-3.22 419.14 48.74 480 111.63 480c21.71 0 60.61-6.06 112.37-62.4 58.68 63.78 101.26 62.4 112.37 62.4 62.89.05 114.85-60.86 89.61-130.19.02-3.89-16.82-38.9-16.82-39.58z"></path>
        </svg>
        <h3 :style="[isWhite?{'color':'rgb(255, 56, 92)'} : {'color':'white'}]">airdnd</h3>
      </div>

    <div v-show="!open&&isScroll" class="changing-middle-container">
    <stay-filter-small  @filter="toggleFilter"/>
    </div>
<div v-show="open || (user!=='home'&&!isScroll)" class="changing-middle-container filter-open">
    <stay-filter :order="order" />
    </div>
      <div class="user-options">
        <button class="wrapping-btn small">
        <router-link class="page-link" style="font-family:manrope-bold;" :style="[isWhite?{'color':'rgb(34, 34, 34)'} : {'color':'white'}]" to="/stay">Explore</router-link>
  </button>
  <button class="wrapping-btn small">
        <router-link class="page-link" style="font-family:manrope-bold;" :style="[isWhite?{'color':'rgb(34, 34, 34)'} : {'color':'white'}]" to="/stay/edit">Become a host</router-link>
  </button>
  
  <button class="wrapping-btn big right-btn">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <button class="header-btn">
              ☰
              <img v-if="user" :src="user.imgUrl" alt="" />
              <img v-else src="https://res.cloudinary.com/di0utpbop/image/upload/v1638552963/airdnd/pngfind.com-default-image-png-6764065_c91w16.png"/>
            </button>
          </span>
          <el-dropdown-menu slot="dropdown">

            <router-link style="text-decoration:none;" :disabled="user" to="/login">
            <el-dropdown-item>Log in</el-dropdown-item>
            </router-link>

            <router-link style="text-decoration:none;" :disabled="user" to="/login/signup">
            <el-dropdown-item>Sign up</el-dropdown-item>
            </router-link>

            <router-link style="text-decoration:none;" to="/stay/edit">
            <el-dropdown-item>Host your home</el-dropdown-item>
            </router-link>
             <router-link v-if="user"  style="text-decoration:none;" :to="'/profile/'+user._id">
            <el-dropdown-item>Profile</el-dropdown-item>
            </router-link>
             <router-link v-if="user" @click="logOut" style="text-decoration:none;" :to="'/'">
            <el-dropdown-item>Log out</el-dropdown-item>
            </router-link>
          </el-dropdown-menu>
        </el-dropdown>
  </button>
      </div>
    </div>
  </header>
</div>

</div>

</template>

<script>
import stayFilter from '@/cmps/stay-filter'
import stayFilterSmall from '@/cmps/stay-filter-small'
import {orderService} from '../services/order.service'

export default {
  props:{
    isScroll:Boolean
  },
  data() {
    return {
      scroll:null,
      loggedInUser: null,
      open:false,
      order:null
    };
  },
  created(){
    window.addEventListener('scroll', this.handleScroll);
    this.order=orderService.getEmptyOrder()

  },
 destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {

    goTo(here) {
      this.$router.push(here);
    },
    toggleFilter(){
      this.open=true
    },
    handleScroll(e){
      if(window.scrollY){
        this.open=false
      }
    },
    logOut(){
      this.$store.dispatch({type:'logoutUser'})
    }
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    isWhite(){
      if(this.isScroll){
        return true
      }else{
        return false
      }
    },
       user() {

      return this.$store.getters.user;
    },
  },
  components:{
    stayFilter,
    stayFilterSmall
  },

};
</script>

    StayFilter