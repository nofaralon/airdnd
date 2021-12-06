<template>
  <div>
    <section class="explore-layout">
      <p v-if="isLoading">Loading...</p>

      <stay-list v-else :stays="stays" @setLiked="setLiked"></stay-list>
    </section>
  </div>
</template>

<script>
import exploreHeader from "@/cmps/explore-header";
import stayList from "@/cmps/stay-list";

export default {
  name: "explore-page",
  data() {
    return {};
  },
  created() {
  this.$emit('header','explore')

  },
  methods: {
    setLiked(stay) {
      this.$store.dispatch({ type: "toggleLike", stay });
    },
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
    exploreHeader,
  },
};
</script>
