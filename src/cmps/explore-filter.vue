<template>
  <section>
    <div v-if="modalTypes" class="filter-options">
         <div
        v-for="modalType in modalTypes"
        :key="modalType"
        class="filter-options"
      >

        <filter-btn
          :key="modalType"
          :modalType="modalType"
          :status="status"
          @toggleModal="toggleModal"
          @getModalClass="getModalClass"
        >
        </filter-btn>
      </div>
    </div>
    
    <div v-if="modalType === 'price'" class="price-modal-filter">
      <h1>The average nightly price is {{avg}} $ </h1>
       <HistogramSlider
       class="diagram"
       :width="320"
       :bar-height="100"
       :barGap="4"
       :barWidth="7"
       :data="prices"
       labelColor="#ff385c"
       primaryColor="#ff385c"
       @change="start"
       @update="end"
       :updateColorOnChange="true"
       />
      <div class="price-limit">
        <div class="input-container">
          <div class="filter-text">min Price</div>
          <div class="margin-left">
            <span>$</span>
            <input v-model="filterBy.fromPrice" type="number" />
          </div>
        </div>
        -
        <div class="input-container">
          <div class="filter-text">max Price</div>
          <div class="margin-left">
            <span>$</span>
            <input v-model="filterBy.toPrice" type="number" />
          </div>
        </div>
      </div>
      <hr />
      <div class="actions-btn">
        <button @click="resetPriceFilter">Clear</button>
        <button @click.prevent="setFilter">Save</button>
      </div>
    </div>

    <div v-if="modalType === 'type'" class="type-modal-filter">
      <el-checkbox class="label" v-model="type.outdoors">Outdoors</el-checkbox>
      <el-checkbox class="label" v-model="type.villa">Villa</el-checkbox>
      <el-checkbox class="label" v-model="type.apartment"
        >Apartment</el-checkbox
      >
      <el-checkbox class="label" v-model="type.loft">Loft</el-checkbox>
      <hr />
      <div class="actions-btn">
        <button @click="resetTypeFilter">Clear</button>
        <button @click.prevent="setTypeFilter">Save</button>
      </div>
    </div>

    <div v-for="(type, index) in types" :key="index">
      <div v-if="modalType === type" :class="gettModalClass(index)">
        <div class="noff">
          <div>
            <h2>{{ type }}</h2>
          </div>
          <div>
            <button @click="setCountBeds('down', type)">-</button>
            <span class="guests">{{ filterBy[type] }}</span>
            <button @click="setCountBeds('up', type)">+</button>
          </div>
        </div>
        <div class="actions-btn">
          <button @click="filterBy.beds = 0">Clear</button>
          <button @click.prevent="setFilter">Save</button>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import FilterBtn from "./filter-btn.vue";
export default {
  name: "stay-list",
  props: {
    stays: Array,
  },
  data() {
    return {
      avg:null,
      prices:this.getPrices,
      modalType: "",
      status: "",
      modalTypes: ["price", "type", "beds", "bedrooms", "bathrooms"],
      types: ["beds", "bedrooms", "bathrooms"],
      filterBy: {
        country: "",
        type: "",
        ailments: "",
        guests: null,
        Dates: "",
        fromPrice: 45,
        toPrice: 250,
        type: [],
        beds: 0,
        bedrooms: 0,
        bathrooms: 0,
      },
      type: {
        villa: false,
        apartment: false,
        outdoors: false,
        loft: false,
      },
    };
  },
  created() {
    const prices =[]
    this.allStays.map((stay)=>{
      prices.push(stay.price)
    })
    prices.unshift()
    this.prices =prices
    const avgPrice = this.getAvg(prices)
    this.avg =avgPrice

    

  },
  
  methods: {
    end(ev){
      console.log('ebv',ev);

    },
    toggleModal(type) {
      if (this.modalType === type) {
        this.status = "";
        this.modalType = "";
      } else {
        this.modalType = type;
        this.status = type;
      }
    },
    getAvg(prices){
     const sum = prices.reduce(function(acc,price){
        return acc += price
      },0)
      const avg = sum/prices.length
      return avg

    },
    start(ev){
      this.filterBy.fromPrice=ev.from
      this.filterBy.toPrice =ev.to
    },
   
    setFilter() {
      const filterBy = JSON.parse(JSON.stringify(this.filterBy));
      this.$emit("setFilter", filterBy);
      this.status = "";
      this.modalType = "";
    },
    setCountBeds(val, type) {
      if (val === "down") {
        if (this.filterBy[type] === 0) return;
        this.filterBy[type] -= 1;
      } else {
        this.filterBy[type] += 1;
      }
    },
    setCountBedrooms(val) {
      if (val === "down") {
        if (this.filterBy.bedrooms === 0) return;
        this.filterBy.bedrooms -= 1;
      } else {
        this.filterBy.bedrooms += 1;
      }
    },
    setCountBathrooms(val) {
      if (val === "down") {
        if (this.filterBy.bathrooms === 0) return;
        this.filterBy.bathrooms -= 1;
      } else {
        this.filterBy.bathrooms += 1;
      }
    },
    resetPriceFilter() {
      this.filterBy.fromPrice = 45;
      this.filterBy.toPrice = 250;
    },
    setTypeFilter() {
      const types = [];
      if (this.type.villa) types.push("villa");
      if (this.type.outdoors) types.push("outdoors");
      if (this.type.apartment) types.push("apartment");
      if (this.type.loft) types.push("loft");
      this.filterBy.type = types;
      const filterBy = { ...this.filterBy };
      this.$emit("setFilter", filterBy);
      this.closeModals();
    },
    resetTypeFilter() {
      this.type = {
        villa: false,
        apartment: false,
        outdoors: false,
        loft: false,
      };
    },
    getModalClass(status) {
      this.status === status;
    },
    gettModalClass(index) {
      if (index === 1) {
        return "beds-modal-filter right";
      }
      if (index === 2) {
        return "beds-modal-filter righter";
      } else return "beds-modal-filter";
    },
  },
  computed: {
    allStays(){
      return this.$store.getters.allStays
    }
  },
  components: {
    FilterBtn,
  },
};
</script>
