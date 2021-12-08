<template>
  <section>
    <div v-if="modalTypes"  class="filter-options">
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
      <h1>The average nightly price is $516</h1>
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

    <div v-for="type in types" :key="type">
      <div v-if="modalType === type" class="bedrooms-modal-filter">
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
      modalType: "",
      status:'',
      modalTypes: ["price", "type", "beds", "bedrooms", "bathrooms"],
      types: ["beds", "bedrooms", "bathrooms"],
      filterBy: {
        country: "",
        type: "",
        ailments: "",
        guests: null,
        Dates: "",
        fromPrice: 32,
        toPrice: 1500,
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
  created() {},
  methods: {
    toggleModal(type) {
      if(this.modalType === type) {
        console.log('hey!!');
       this.status='';
       this.modalType =''
      } 
      this.modalType=type;
      this.status = type;
    },
   

    setFilter() {
      const filterBy = JSON.parse(JSON.stringify(this.filterBy));
      this.$emit("setFilter", filterBy);
      this.status='';
      this.modalType ='';
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
      this.filterBy.fromPrice = 32;
      this.filterBy.toPrice = 1500;
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
    this.status === status
   },
  },
  computed: {
    getBtnClass(modalType) {
      return;
    },
  },
  components: {
    FilterBtn,
  },
};
</script>
