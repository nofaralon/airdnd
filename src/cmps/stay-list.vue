<template>
  <section class="card-list">
    <div class="filter-options">
      <button @click="togglePriceModal" class="price-filter"> price <i :class="priceModalClass"> </i></button>
      <button @click="toggleTypeModal" class="type-filter">Type of place  <i :class="typeModalClass"> </i> </button>
    </div>
    <div v-if="isPriceModalOpen" class="price-modal-filter">
      <h1>The average nightly price is $516</h1>
      <div class="price-limit">
        <div class="input-container">
          <div class="filter-text"> min Price</div>
          <div class="margin-left">
            <span>$</span>
            <input v-model="filterBy.fromPrice"  type="number">
          </div>

        </div>

        -
        <div class="input-container">
          <div  class="filter-text"> max Price</div>
          <div class="margin-left">
            <span>$</span>
            <input v-model="filterBy.toPrice" type="number">
          </div>

        </div>
        </div>

      <hr/>
      <div class="actions-btn">
        <button @click="resetFilter">Clear</button>
        <button @click="setPriceFilter">Save</button>
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
      isTypeModalOpen:false,
      filterBy:{
        country:'',
        type:'',
        ailments:'',
        guests:null,
        Dates:"",
        fromPrice:32,
        toPrice:1500
      },
    };
  },
  created() {},
  methods: {
    togglePriceModal(){
      this.isPriceModalOpen =!this.isPriceModalOpen
    },
    toggleTypeModal(){
      this.isTypeModalOpen =!this.isTypeModalOpen
    },
    setPriceFilter(){
      const filterBy = {...this.filterBy}
      this.$emit('setFilter',filterBy)

    },
    resetFilter(){
      this.filterBy.fromPrice =32;
      this.filterBy.toPrice=1500
    }
   
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

