<template>
  <section v-if="stay" class="stay-details">
    <h1>{{ stay.name }}</h1>
    <a href="">{{ stay.loc.address }}</a>
    <div class="img-container" v-for="(img, index) in imgs" :key="index">
      <img :src="img" alt="">
    </div>
  </section>
</template>


<script>
export default {
  name: "stay-details",
  data() {
    return {
      stay: null,
      imgs:[]
    };
  },
  created() {
    this.loadStay();
  },
  methods: {
    loadStay() {
      const { stayId } = this.$route.params;
      this.$store.dispatch({ type: "getStay", stayId }).then((stay) => {
        this.stay = stay;
        if (this.stay) {
          this.imgForDisplay();
        }
      });
    },
    imgForDisplay() {
      var imgs = this.stay.imgUrls.slice(0, 5);
      this.imgs = imgs    
    }
  },
  computed: {
  },
  components: {},
};
</script>
