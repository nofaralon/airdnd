<template>
  <section class="explore-layout">
    <div>Explore-page</div>
    <p v-if="isLoading">Loading...</p>

    <stay-list v-else :stays="stays" @setLiked="setLiked"></stay-list>
  </section>
</template>


<script>
import stayList from "../cmps/stay-list.vue";

export default {
  name: "explore-page",
  data() {
    return {};
  },
  created() {},
  methods: {
    setLiked(stay){
      console.log('explore emited:',stay);
       this.$store.dispatch({type:'toggleLike',stay})
    }
},
  computed: {
    stays() {
      return this.$store.getters.staysForDisplay;
    },
    isLoading() {
      return this.$store.getters.isLoading;
    },
  },
  components: {
    stayList,
  },
};
</script>
