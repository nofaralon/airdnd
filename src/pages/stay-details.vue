<template>
  <section v-if="stay" class="stay-details main-layout">
    <h1>{{ stay.name }}</h1>
    <div class="detsils-header">
      <a href="">{{ stay.loc.address }}</a>
      <span>Superhost</span>
      <span>4.39 <a>(3 reviews)</a></span>
    </div>

    <div class="img-container">
      <img v-for="(img, index) in imgs" :key="index" :src="img" alt="" />
    </div>
    <section class="info-container">
      <div class="stay-info">
        <div class="info-header">
          <div>
            <h2>{{ stay.type }} hosted by {{ stay.host.fullname }}</h2>
            <span
              >{{ stay.capacity }} Guests • {{ stay.bedroom }} Bedrooms •
              {{ stay.beds }} Beds • {{ stay.bathrooms }} Baths
            </span>
          </div>
          <img :src="`${stay.host.imgUrl}`" />
        </div>

        <div class="main-info">
          <div>
            <h3>Entire Place</h3>
            <span>You'll have the place to yourself.</span>
          </div>

          <div>
            <h3>House Rules</h3>
            <span>
              This place isn’t suitable for children under 12 and the host
              doesn’t allow pets.
            </span>
          </div>

          <div>
            <h3>{{ stay.host.fullname }} Is A Superhost</h3>
            <span>
              Superhosts are experienced, highly rated hosts who are committed
              to providing great stays for guests.
            </span>
          </div>

          <div>
            <h3>Wifi</h3>
            <span>Guests often search for this popular amenity.</span>
          </div>

          <div class="description">
            <h2>Description</h2>
            <p>{{ stay.summary }}</p>
          </div>

          <div class="amenities">
            <h2>Amenities</h2>
            <ul v-for="(amenity, index) in stay.amenities" :key="index">
              <li>{{ amenity }}</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="order-form">
        <div class="order-price">
          <p>
            <span>{{ stayPrice }}</span
            >/night
          </p>

          <span>4.39 <a>(3 reviews)</a></span>
        </div>

        <div class="order-picker">
          <div class="block">
            <div class="check">
              <div>CHECK-IN</div>
              <div>CHECK-OUT</div>
            </div>
            <el-date-picker v-model="order.dateVal" type="daterange">
            </el-date-picker>
          </div>
          <div @click="toggleModal">
            <h2>GUESTS</h2>
            <span> {{ order.guests }} </span>
          </div>
        </div>

        <div v-if="openModal" class="guest-modal">
          <div class="nof">
            <div>
              <h2>Adults</h2>
              <span>Age 13+</span>
            </div>
            <div>
              <button @click="setCountAdults('down')">-</button>
              <span class="guests">{{ order.adults }}</span>
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
              <span class="guests">{{ order.kids }}</span>
              <button @click="setCountKids('up')">+</button>
            </div>
          </div>
        </div>

        <button class="reserve">Check availability</button>

        <a>Report this listing</a>
      </div>
    </section>

    <section class="map-details">
      <h1>Where you’ll be</h1>
      <GmapMap
        class="map"
        :stay="stay"
        :options="{
          zoomControl: true,
          mapTypeControl: true,
          scaleControl: true,
          streetViewControl: true,
          rotateControl: false,
          fullscreenControl: true,
          disableDefaultUi: false,
        }"
      />
      <h3>{{ stay.loc.address }}</h3>
      <p>{{ stay.around }}</p>
    </section>
  </section>
</template>


<script>
import GmapMap from "../cmps/map-details.vue";

export default {
  name: "stay-details",
  data() {
    return {
      stay: null,
      imgs: [],
      adults: 0,
      order: {
        kids: 0,
        adults: 0,
        dateVal: null,
        guests: 0,
        price: 0,
      },
      openModal: false,
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
      this.imgs = imgs;
    },
    toggleModal() {
      this.openModal = !this.openModal;
    },
    setCountAdults(val) {
      if (val === "down") {
        if (this.order.adults === 0) return;
        this.order.adults -= 1;
        this.order.guests -= 1;
      } else {
        if (this.order.guests === this.stay.capacity) return;
        this.order.adults += 1;
        this.order.guests += 1;
      }
    },
    setCountKids(val) {
      if (val === "down") {
        if (this.order.kids === 0) return;
        this.order.kids -= 1;
        this.order.guests -= 1;
      } else {
        if (this.order.guests === this.stay.capacity) return;
        this.order.kids += 1;
        this.order.guests += 1;
      }
    },
  },
  computed: {
    stayPrice() {
      var PricePerNight = this.stay.price;

      // if(this.order.guests){
      //   var orderPrice = PricePerNight * this.order.guests
      // } else orderPrice = PricePerNight

      this.order.price = PricePerNight.toLocaleString("en-US", {
        currency: "USD",
        style: "currency",
        maximumFractionDigits: 0,
      });

      return this.order.price;
    },
  },
  components: {
    GmapMap,
  },
};
</script>
