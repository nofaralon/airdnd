<template>
  <section class="home-page main-layout">

    <stay-filter></stay-filter>
    <div class="home-img-container">
    <img src="../assets/imgs/home.jpg" />
    </div>
    <div class="explore-btn">
    <h1>Not sure where to go? Perfect.</h1>
    <button>I'm flexible</button>
    </div>

    <h2>Inspiration for your next trip</h2>
    <div class="top-cities">
      <div class="city">
        <img src="../assets/imgs/amsterdam.png" />
        <p>Amsterdam</p>
      </div>

      <div class="city">
        <img src="../assets/imgs/paris.jpg" />
        <p>Paris</p>
      </div>

      <div class="city">
        <img src="../assets/imgs/miami.jpg" />
        <p>Miami</p>
      </div>

      <div class="city">
        <img src="../assets/imgs/new-york.png" />
        <p>New York</p>
      </div>
    </div>

  </section>
</template>


<script>
import stayFilter from "../cmps/stay-filter.vue";

export default {
  name: "home-page",
  data() {
    return {};
  },
  created() {},
  methods: {},
  computed: {},
  components: {
    stayFilter,
  },
};
</script>

