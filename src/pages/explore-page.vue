<template>
  <section class="">
    <div>Explore-page</div>
    <p v-if="isLoading">Loading...</p>

    <stay-list v-else :stays="stays"></stay-list>
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
  methods: {},
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
