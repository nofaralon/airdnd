<template>
  <section>
    <stay-filter></stay-filter>
    <img src="../assets/imgs/home.jpg" />
    <h1>Not sure where to go? Perfect.</h1>
    <button>I'm flexible</button>

    <h2>Inspiration for your next trip</h2>
    <div class="top-cities">
      <div>
        <img src="../assets/imgs/amsterdam.png" />
        <div>Amsterdam</div>
      </div>

      <div>
        <img src="../assets/imgs/paris.jpg" />
        <div>Paris</div>
      </div>

      <div>
        <img src="../assets/imgs/miami.jpg" />
        <div>Miami</div>
      </div>

      <div>
        <img src="../assets/imgs/new-york.png" />
        <div>New York</div>
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

