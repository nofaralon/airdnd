<template>
  <div class="main-layout main-filter big-filter">
    <div class="filter filter-slot-lrg">
      <button class="filter-btn">
        <div class="filter-container">
          <button class="country filter-btn">
            <label >
            <p>Location</p>
            <input class="filter-country-input"  list="locations" type="search" placeholder="Where are you going?" v-model="filterBy.country">   
            </label>
          </button>
          <datalist id="locations">
            <option >France</option>
            <option >Florida</option>
            <option >Iceland</option>
            <option >Netherlands</option>
          </datalist>
          <button class="check-in filter-btn">
          <p >Check in</p>
          </button>
          <button class="check-in filter-btn">
          <p >Check out</p>
          </button>
          <button @click="toggaleModal" class="check-in filter-btn">
          <p >Guests</p>
          </button>
           <div v-if ="isModalOpen" class="guestt-modal">
        <div class="noff">
          <div>
            <h2>Adults</h2>
            <span>Age 13+</span>
          </div>
          <div>
            <button @click="setCountAdults('down')">-</button>
            <span class="guests">{{currOrder.adults}}</span>
            <button @click="setCountAdults('up')">+</button>
          </div>
        </div>
        <div>
          <div>
            <h2>Kids</h2>
            <span>Ages 2–12</span>
          </div>
          <div>
            <button @click="setCountKids('down')">-</button>
            <span class="guests">{{currOrder.kids}}</span>
            <button @click="setCountKids('up')">+</button>
          </div>
        </div>
      </div>
          <button @click="search" class="search-btn">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="search"
              class="svg-inline--fa fa-search fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
              ></path>
            </svg>
          </button>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import {eventBusService, setFilter} from '../services/event-bus.service'
export default {
   name: "stay-filter",
   props:{
     order:Object
   },
  data() {
    return {
      isModalOpen:false,
      filterBy:{
        country:'',
        type:'',
        ailments:'',
        guests:null,
        Dates:"",
        fromPrice:null,
        toPrice:null
      },
      currOrder:this.order
    };
  },
  
  methods: {
    search(){
      eventBusService.$emit('setFilter',{...this.filterBy})
      eventBusService.$emit('saveOrder', this.currOrder)
      console.log(this.filterBy);
     
    },
    setCountAdults(val) {
      if (val === "down") {
        if (this.currOrder.adults === 0) return;
        this.currOrder.adults -= 1;
        this.currOrder.guests -= 1;
        this.filterBy.guests -=1
      } else {
       
        this.currOrder.adults += 1;
        this.currOrder.guests += 1;
        this.filterBy.guests +=1

      }
    },
    setCountKids(val) {
      if (val === "down") {
        if (this.currOrder.kids === 0) return;
        this.currOrder.kids -= 1;
        this.currOrder.guests -= 1;
        this.filterBy.guests -=1
      } else {
        this.currOrder.kids += 1;
        this.currOrder.guests += 1;
        this.filterBy.guests +=1

      }

    },
    toggaleModal(){
      this.isModalOpen =!this.isModalOpen
    }
    
  },
 
  computed: {},
  components: {}
};
</script>
