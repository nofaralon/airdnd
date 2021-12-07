<template>
  <section class="card-list">
    <div class="filter-options">
      <button @click="toggleModal('price')" class="price-filter"> Price <i :class="getModalClass(isPriceModalOpen)"> </i></button>
      <button @click="toggleModal('type')" class="type-filter">Type of place  <i :class="getModalClass(isTypeModalOpen)"> </i> </button>
      <button @click="toggleModal('beds')" class="type-filter">Beds <i :class="getModalClass(isBedModalOpen)"> </i> </button>
      <button @click="toggleModal('bedrooms')" class="type-filter">Bedrooms <i :class="getModalClass(isBedroomsModalOpen)"> </i> </button>
      <button @click="toggleModal('bathrooms')" class="type-filter">Bathrooms <i :class="getModalClass(isBathroomsModalOpen)"> </i> </button>
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
        <button @click="resetPriceFilter">Clear</button>
        <button @click.prevent="setFilter">Save</button>
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
        <button @click.prevent="setTypeFilter">Save</button>
      </div>
    </div>
      

      <div v-if="isBedModalOpen" class="beds-modal-filter">
        <div class="noff">
          <div>
            <h2>Beds</h2>
          </div>
          <div>
            <button @click="setCountBeds('down')">-</button>
            <span class="guests">{{filterBy.beds}}</span>
            <button @click="setCountBeds('up')">+</button>
          </div>
        </div>
        <div class="actions-btn">
        <button @click="filterBy.beds=0">Clear</button>
        <button @click.prevent="setFilter">Save</button>
      </div>

      </div>

      <div v-if="isBedroomsModalOpen" class="bedrooms-modal-filter">
        <div class="noff">
          <div>
            <h2>Bedrooms</h2>
          </div>
          <div>
            <button @click="setCountBedrooms('down')">-</button>
            <span class="guests">{{filterBy.bedrooms}}</span>
            <button @click="setCountBedrooms('up')">+</button>
          </div>
        </div>
        <div class="actions-btn">
        <button @click="filterBy.bedrooms=0">Clear</button>
        <button @click.prevent="setFilter">Save</button>
      </div>

      </div>      
    
    <div v-if="isBathroomsModalOpen" class="bathrooms-modal-filter">
        <div class="noff">
          <div>
            <h2>Bathrooms</h2>
          </div>
          <div>
            <button @click="setCountBathrooms('down')">-</button>
            <span class="guests">{{filterBy.bathrooms}}</span>
            <button @click="setCountBathrooms('up')">+</button>
          </div>
        </div>
        <div class="actions-btn">
        <button @click="filterBy.bathrooms=0" >Clear</button>
        <button @click.prevent="setFilter">Save</button>
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
      isBedModalOpen:false,
      isBedroomsModalOpen:false,
      isBathroomsModalOpen:false,
      filterBy:{
        country:'',
        type:'',
        ailments:'',
        guests:null,
        Dates:"",
        fromPrice:32,
        toPrice:1500,
        type:[],
        beds:0,
        bedrooms:0,
        bathrooms:0
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

  toggleModal(type){
  //  this.closeModals()
   if (type === 'price') {
     if (this.isPriceModalOpen === true) {
       this.isPriceModalOpen=false
       return
     } 
     this.closeModals()
     this.isPriceModalOpen =true
     
   }
   if (type==='type') {
    if (this.isTypeModalOpen === true) {
       this.isTypeModalOpen=false
       return
     } 
     this.closeModals()
     this.isTypeModalOpen =true 
   }
   if (type==='beds') {
    if (this.isBedModalOpen === true) {
       this.isBedModalOpen=false
       return
     } 
     this.closeModals()
     this.isBedModalOpen =true 
   }
   if (type === 'bathrooms') {
    if (this.isBathroomsModalOpen === true) {
       this.isBathroomsModalOpen=false
       return
     } 
     this.closeModals()
     this.isBathroomsModalOpen =true 
   }
   if (type==='bedrooms') {
    if (this.isBedroomsModalOpen === true) {
       this.isBedroomsModalOpen=false
       return
     } 
     this.closeModals()
     this.isBedroomsModalOpen =true  
   }
    

  },
  closeModals(){
  this.isPriceModalOpen=false;
  this.isTypeModalOpen=false;
  this.isBedModalOpen=false;
  this.isBedroomsModalOpen=false;
  this.isBathroomsModalOpen=false;

  },
     
      getModalClass(status){
        if (status === true) return "el-icon-arrow-up"
       return "el-icon-arrow-down"
      },
 
    setFilter(){
      const filterBy = JSON.parse(JSON.stringify(this.filterBy)) 
      this.$emit('setFilter',filterBy)
     this.closeModals()

    },
    setCountBeds(val){
      if (val === "down") {
        if (this.filterBy.beds === 0) return;
        this.filterBy.beds -= 1;
      } else {
       this.filterBy.beds +=1
      }

    },
    setCountBedrooms(val){
      if (val === "down") {
        if (this.filterBy.bedrooms === 0) return;
        this.filterBy.bedrooms -= 1;
      } else {
       this.filterBy.bedrooms +=1
      }

    },
    setCountBathrooms(val){
      if (val === "down") {
        if (this.filterBy.bathrooms === 0) return;
        this.filterBy.bathrooms -= 1;
      } else {
       this.filterBy.bathrooms +=1
      }
    },
    resetPriceFilter(){
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
      this.closeModals()

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
    
  },
  components: {
    stayPreview
  },
};
</script>

