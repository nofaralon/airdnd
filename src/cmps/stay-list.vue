<template>
  <section class="card-list">
    <div class="filter-options">
      <button  class="price-filter"> price <i :class="priceModalClass"> </i></button>
      <button class="type-filter">Type of place  <i :class="typeModalClass"> </i> </button>
    </div>
    <div class="price-modal-filter">
      <h1>The average nightly price is ₪516</h1>
      <div class="price-limit">
        <div class="input-container">

        </div>

        -
        <div class="input-container">
          
        </div>

      </div>
      <hr/>
      <div class="actions-btn">
        <button>Clear</button>
        <button>Save</button>
      </div>
    </div>
      


  

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
      isPriceModalOpen:false,
      isTypeModalOpen:false
    };
  },
  created() {},
  methods: {
   
  },
  computed: {
    userId(){
      if(this.$store.getters.user) return this.$store.getters.user._id
    },
    priceModalClass(){
      if (!this.isPriceModalOpen) {
      return  "el-icon-arrow-down"
      }
      return "el-icon-arrow-up"
      
    },
    typeModalClass(){
      if (!this.isTypeModalOpen) {
      return  "el-icon-arrow-down"
      }
      return "el-icon-arrow-up"

    }
  },
  components: {
    stayPreview
  },
};
</script>

