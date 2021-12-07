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
    
    

    <div v-if="isTypeModalOpen" class="type-modal-filter">
        <el-checkbox class="label" v-model="type.outdoors">Outdoors</el-checkbox>
        <el-checkbox class="label" v-model="type.villa">Villa</el-checkbox>
        <el-checkbox  class="label" v-model="type.apartment">Apartment</el-checkbox>
        <el-checkbox class="label" v-model="type.loft">Loft</el-checkbox>
        <hr/>
    
        <div class="actions-btn">
        <button @click="resetTypeFilter">Clear</button>
        <button @click="setTypeFilter">Save</button>
      </div>
    </div>
      
    


  

    <ul class="card-grid">
      <li v-for="stay in stays" :key="stay._id">
        <stay-preview :stay="stay" @setLiked="$emit('setLiked', stay)"/>        
        <!-- <router-link v-if="userId===stay.host._id" :to="'/stay/edit/'+stay._id">Edit</router-link> -->
      </li>
    </ul>
  </section>
</template>


<script>
    import stayPreview from './stay-preview.vue'

export default {
  name: "stay-list",
      props: {
        stays:Array
      },

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
        toPrice:1500,
        type:[]
      },
        type:{
          villa:false,
          apartment:false,
          outdoors:false,
          loft:false
    },
    };
  },
  created() {},
  methods: {
    togglePriceModal(){
      if (this.isPriceModalOpen === true) {
        this.isPriceModalOpen=false
      } else{
        this.isPriceModalOpen =true
        this.isTypeModalOpen =false
      }
    

     
    },
    toggleTypeModal(){
    if (this.isTypeModalOpen === true) {
        this.isTypeModalOpen=false
      } else{
        this.isTypeModalOpen =true
        this.isPriceModalOpen =false
      }
    
    },
    setPriceFilter(){
      const filterBy = {...this.filterBy}
      this.$emit('setFilter',filterBy)

    },
    resetFilter(){
      this.filterBy.fromPrice =32;
      this.filterBy.toPrice=1500
    },
    setTypeFilter(){
      if(this.type.villa) this.filterBy.type.push('villa')
      if(this.type.outdoors) this.filterBy.type.push('outdoors')
      if(this.type.apartment) this.filterBy.type.push('apartment')
      if(this.type.loft) this.filterBy.type.push('loft')
      const filterBy ={...this.filterBy}
      this.$emit('setFilter',filterBy)

     
    },
    resetTypeFilter(){
      this.type ={
          villa:false,
          apartment:false,
          outdoors:false,
          loft:false
        }

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

