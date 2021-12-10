<template>
  <div class="details-layout">
    <div class="profile-container">
      <!-- <div class="side-bar-options">
        <button @click="setInfo('orders')">My orders</button>
        <button @click="setInfo('stays')">My stays</button>
      </div> -->

      <div  class="main-bar">
        <div class="profile-options-container">

        <div @click="setInfo('reviews')"  class="main-bar-rating options" :class="{focused:reviews}">
          <h3>Avarage rating</h3>
          <p v-if="userStays"> <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" > <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" ></path> </svg> 
          {{totalRating.toLocaleString("en-US", {maximumFractionDigits: 2,})}}
          </p>
        </div>
        <div @click="setInfo('orders')"  class="main-bar-orders options" :class="{focused:orders}">
          <h3>Orders Inbox</h3>
          <div v-if="incommingOrders" class="orders-btns">
            <p>{{ incommingOrders.length }}</p>
            <span>0 <button class="order-status green"></button></span>
            <span
              >{{ pendingOreders.length }}
              <button
                @click="sortOrdersBy('pending')"
                class="order-status yellow"
              ></button
            ></span>
            <span>0 <button class="order-status red"></button></span>
          </div>
        </div>

        <div @click="setInfo('revenues')"  class="main-bar-revenue options" :class="{focused:revenues}">
          <h3>Revenue</h3>
          <p>{{userRevenue.toLocaleString("en-US", {
                        currency: "USD",
                        style: "currency",
                        maximumFractionDigits: 0,
                      })
              }}
          </p>
        </div>

        <div @click="setInfo('stays')" class="main-bar-stays options" :class="{focused:stays}">
          <h3>Active Stays</h3>
          <p v-if="userStays">{{ userStays.length }}</p>
        </div>

        </div>

        <div class="user-info-container">
        <div v-if="revenues && revenuePerStay" class="revenue-container" >
          <my-percentage-chart :chartData="revenuePerStay" />
        </div>

          <div>
            <table v-if="stays && userStays" class="info-table" >
              <th>Name</th>
              <th>Address</th>
              <th>$/night</th>
              <th>Likes</th>
              <tbody>
                <tr v-for="(stay, index) in userStays" :key="index">
                  <td>{{ stay.name }}</td>
                  <td>{{ stay.loc.address }}</td>
                  <td>{{stay.price}}</td>
                  <td>{{ stay.likedByUsers.length }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <table v-if="orders && userOrders" class="info-table">
              <th>Guest name</th>
              <th>Stay Dates</th>
              <th>Guests</th>
              <th>Status</th>
              <th>Price</th>
              <th>Ordered at</th>

              <tbody>
                <tr v-for="(order, index) in userOrders" :key="index">
                  <td>{{ order.buyer.fullname }}</td>
                  <td>{{ new Date(order.Dates[index]) }}</td>
                  <td>{{ order.guests }}</td>
                  <td>{{ order.status }}</td>
                  <td>{{order.totalPrice.toLocaleString("en-US", {currency: "USD",style: "currency",maximumFractionDigits: 0,})}}</td>
                  <td>{{ new Date(order.createdAt).getFullYear()}}
                    /
                    <span><span v-show="new Date(order.createdAt).getMonth()+1<9">0</span>{{(new Date(order.createdAt).getMonth()+1)}}</span> 
                    /
                    <span><span v-show="new Date(order.createdAt).getDay()+1<9">0</span>{{(new Date(order.createdAt).getDay()+1)}}</span> 
                    </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <table v-if="reviews && userStays" class="info-table">
              <th>Stay name</th>
              <th>User</th>
              <th>Rating</th>
              <th>Review</th>
              <th>Review date</th>

              <tbody v-for="(stay, index) in userStays" :key="index" class="stays-reviews">
                <tr v-for="(review, index) in stay.reviews" :key="index">
                  <td>{{ stay.name }}</td>
                  <td>{{ review.by.fullname}}</td>
                  <td>{{ review.rate }}</td>
                  <td>{{ review.txt }}</td>
                  <td>{{ review.date }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- <button @click="router.push('/stay/edit')">Add stay</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import myPercentageChart from '@/cmps/my-percentage-chart'
export default {
  data() {
    return {
      revenues: false,
      orders: false,
      stays: false,
      reviews:true,
      userStays: null,
      userOrders: null,
      allOrders:null,
      userRevenue:0,
      incommingOrders:null,
      revenuePerStay:{}

    };
  },
  created() {
    this.$store.commit({ type: "setUserPage", page: "userPage" });
    this.getStays();
    this.getUserOrders();
    
  },
  methods: {
    setInfo(showInfo) {
      this.closeAll()
      if (showInfo === "orders") {
        this.orders = true;
      } else if (showInfo === "stays") {
        this.stays = true;
      } else if (showInfo === "revenues") {
        this.revenues = true;
      } else if (showInfo === "reviews") {
        this.reviews = true;
      }
    },
    closeAll(){
        this.orders = false;
        this.stays = false;
        this.revenues=false;
        this.reviews=false;
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
    async getUserOrders() {
      if (!this.userOrders) {
        const userId = this.user._id;
        const filterBy = {
          userId,
        };
        this.userOrders = await this.$store.dispatch({
          type: "getUserOrders",
          filterBy,
        });
      }
        this.getAllOrders();
    },
    async getAllOrders(){
        this.allOrders= await this.$store.dispatch({type:"getOrders"})
        this.setRevenue();
    },
      setRevenue(){
        this.incommingOrders=this.allOrders.filter((order)=>{
          return order.hostId===this.user._id
        })
        this.userRevenue+=this.incommingOrders.reduce((acc,order)=>{
          (this.revenuePerStay[order.stay.name]) ? this.revenuePerStay[order.stay.name]+=order.totalPrice : this.revenuePerStay[order.stay.name]=order.totalPrice

          acc+=order.totalPrice
          return acc
        }, 0)
    },
    sortOrdersBy(type) {
      if (type === "pending") {
        this.userOrders = this.pendingOreders;
      }
    },
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    totalRating() {
      var ratings = 0;
      var reviewsNum = 0;
      this.userStays.forEach((stay) => {
        ratings += stay.reviews.reduce((acc, review) => {
          acc += Number(review.rate);
          reviewsNum += 1;
          return acc;
        }, 0);
      });
      return ratings / reviewsNum;
    },

    pendingOreders() {
      return this.userOrders.filter((order) => {
        return order.status === "pending";
      });
    },

  },
  components:{
    myPercentageChart
  }
};
</script>
