<template>
  <section v-if="stay" class="stay-details">
    <h1>{{ stay.name }}</h1>
    <a href="">{{ stay.loc.address }}</a>
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
        <div>
          <p>$ {{ stay.price }}/night</p>
          <span>4.39 <a>(3 reviews)</a></span>
        </div>

        <div class="block">
          <el-date-picker
            v-model="dateVal"
            type="daterange"
            start-placeholder="CHECK-IN"
            end-placeholder="CHECK-OUT"
          >
          </el-date-picker>
        </div>
      </div>
    </section>
  </section>
</template>


<script>
export default {
  name: "stay-details",
  data() {
    return {
      stay: null,
      imgs: [],
      dateVal: null
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
  },
  computed: {},
  components: {},
};
</script>
