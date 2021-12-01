<template>
  <header class="app-header ">
    <h3>AirD&D</h3>
    <div class="main-haeder">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/stay">Explore</router-link> |
        <template v-if="!user">
        <router-link to="/login">Login</router-link>
        </template>
        <template v-else>
          <span>Hi, </span>
        <router-link to="/user/:userId">{{user.username}}</router-link>
        </template>
      </nav>
    </div>
  </header>
</template>



<script>
export default {
  data(){
    return{
      loggedInUser:null
    }
  },
  computed:{
    user(){
      return this.$store.getters.user
    }
  }
};
</script>