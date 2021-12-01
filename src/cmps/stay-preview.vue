<template>
  <section @click="stayDetails(stay._id)">
    <img :src="`${stay.imgUrls[0]}`" />
    <div>
      <b>{{ stay.name }}</b>
      {{ stay.price + "$" }}/night
    </div>
  </section>
</template>


<script>
export default {
  name: "stay-pre",
  props: ["stay"],

  data() {
    return {};
  },
  created() {},
  methods: {
    stayDetails(stayId) {
      this.$router.push("/stay/" + stayId);
    },
  },
  computed: {},
  components: {},
};
</script>

