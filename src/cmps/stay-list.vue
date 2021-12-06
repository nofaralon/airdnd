<template>
  <section class="card-list">
    <ul class="card-grid">
      <li v-for="stay in stays" :key="stay._id">
        <stay-preview :stay="stay" @setLiked="$emit('setLiked', stay)"/>        
        <router-link v-if="userId===stay.host._id" :to="'/stay/edit/'+stay._id">Edit</router-link>
      </li>
    </ul>
  </section>
</template>


<script>
    import stayPreview from './stay-preview.vue'

export default {
  name: "stay-list",
      props: ['stays'],

  data() {
    return {
      isLiked:false,
    };
  },
  created() {},
  methods: {
  },
  computed: {
    userId(){
      if(this.$store.getters.user) return this.$store.getters.user._id
    },
  },
  components: {
    stayPreview
  },
};
</script>

