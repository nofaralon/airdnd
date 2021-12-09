<template>
  <div class="details-layout">
    <div class="profile-container">
      <div class="side-bar-options">
        <button @click="router.push('/stay/edit')">Add stay</button>
        <button @click="setInfo('orders')">My orders</button>
        <button @click="setInfo('stays')">My stays</button>
      </div>

      <div class="main-bar">
        <div v-if="userStays" class="main-bar-rating">
          <h3>Total avarage rating</h3>
          <p>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="star"
              class="svg-inline--fa fa-star fa-w-18"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
              ></path>
            </svg>
            {{totalRating.toLocaleString("en-US", {
          maximumFractionDigits: 2,
        })}}
          </p>
        </div>
        <div class="main-bar-orders">
          <h3>Orders</h3>
          <div v-if="userOrders" class="orders-btns">
            <p>{{userOrders.length}}</p>
            <span>0 <button class="order-status green"></button></span>
            <span>{{pendingOreders.length}} <button @click="sortOrdersBy('pending')" class="order-status yellow"></button></span>
            <span>0 <button class="order-status red"></button></span>
          </div>
        </div>

        <div class="main-bar-guests">
          <h3>Active guests</h3>
          <p>0</p>
        </div>

        <div v-if="userStays" class="main-bar-stays">
          <h3>Total Stays</h3>
          <p>{{userStays.length}}</p>
        </div>

        <div class="info-container">

           <div>
            <table v-if="stays && userStays" class="info-header">
                <th>Name</th>
                <th>Address</th>
                <th>Price</th>
                <th>Likes</th>
              <tbody>
                <tr v-for="(stay, index) in userStays" :key="index">
                  <td>{{ stay.name }}</td>
                  <td>{{ stay.loc.address }}</td>
                  <td>{{ stay.price.toLocaleString("en-US", {
          currency: "USD",
          style: "currency",
          maximumFractionDigits: 0,
        }) }}</td>
                  <td>{{ stay.likedByUsers.length }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <table v-if="orders && userOrders" class="info-header">
                <th>Guest name</th>
                <th>Dates</th>
                <th>Number of guests</th>
                <th>Status</th>
                <th>Price</th>
              <tbody>
                <tr v-for="(order, index) in userOrders" :key="index">
                  <td>{{ order.buyer.fullname }}</td>
                  <td>{{ order.Dates[index] }}</td>
                  <td>{{ order.guests }}</td>
                  <td>{{ order.status }}</td>
                  <td>{{ order.totalPrice.toLocaleString("en-US", {
          currency: "USD",
          style: "currency",
          maximumFractionDigits: 0,
        }) }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- <div class="conditional-container" v-if="userOrders">
            <div
              v-show="orders"
              v-for="(order, index) in userOrders"
              :key="index"
            >
              <p>{{ order.buyer.fullname }}</p>
              <p>{{ order.Dates[index] }}</p>
              <p>{{ order.status }}</p>
              <p>{{ order.stay.totalPrice }}</p>
            </div>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: true,
      stays: false,
      userStays: null,
      userOrders: null,
    };
  },
  created() {
    this.$store.commit({ type: "setUserPage", page: "userPage" });
    this.getStays();
    this.getOrders();
  },
  methods: {
    setInfo(showInfo) {
      if (showInfo === "orders") {
        this.orders = true;
        this.stays = false;
      } else {
        this.orders = false;
        this.stays = true;
      }
    },
    async getStays() {
      if (!this.userStays) {
          const userId = this.user._id;
        this.userStays = await this.$store.dispatch({
          type: "getStayByUserId",
          userId,
        });
      }
    },
    async getOrders() {
      if (!this.userOrders) {
        const userId = this.user._id;
        const filterBy = {
          userId,
        };
        console.log("userId", userId);
        this.userOrders = await this.$store.dispatch({
          type: "getUserOrders",
          filterBy,
        });
      }
    },
    sortOrdersBy(type){
        if(type==='pending'){
            this.userOrders=this.pendingOreders
        }
    }
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    totalRating(){
        var ratings=0
        var reviewsNum=0
        this.userStays.forEach(stay => {
           ratings+=stay.reviews.reduce((acc,review)=>{
                acc+=Number(review.rate)
                console.log(acc,"acc");
                reviewsNum+=1
                return acc
            },0)
        });
        return (ratings/reviewsNum)
    },
    
    pendingOreders() {
      return this.userOrders.filter(order=>{
          return order.status==='pending'
      })
    },
    // staysUserOwn() {
    //   return this.userStays || 0;
    // },
    // orders(){
    //     return this.$store.getters.orders
    // }
  },
};
</script>
