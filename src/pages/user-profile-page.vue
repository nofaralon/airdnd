<template>
  <div class="details-layout">
    <div class="profile-container">
      <div class="side-bar-options">
        <button @click="router.push('/stay/edit')">Add stay</button>
        <button @click="setInfo('orders')">My orders</button>
        <button @click="setInfo('stays')">My stays</button>
      </div>

      <div class="main-bar">
        <div class="main-bar-rating">
          <h3>Total rating</h3>
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
            0
          </p>
        </div>
        <div class="main-bar-orders">
          <h3>Orders</h3>
          <div class="orders-btns">
            <p>0</p>
            <span>0 <button class="order-status green"></button></span>
            <span>0 <button class="order-status yellow"></button></span>
            <span>0 <button class="order-status red"></button></span>
          </div>
        </div>

        <div class="main-bar-guests">
          <h3>Active guests</h3>
          <p>0</p>
        </div>

        <div class="info-container">
          <div v-show="stays" class="info-header">
            <p>Name</p>
            <p>Address</p>
            <p>Price</p>
            <p>Likes</p>
          </div>

          <div class="conditional-container" v-if="userStays">
            <div
              v-show="stays"
              class="user-stay"
            >
              <!-- <el-table :data="userStays" style="width: 100%">
                <el-table-column prop="name" label="Name" width="280">
                </el-table-column>
                <el-table-column prop="loc.address" label="Address" width="280">
                </el-table-column>
                <el-table-column prop="price" label="Price">
                </el-table-column>
                <el-table-column prop="likedByUsers.length" label="likes">
                </el-table-column>
              </el-table> -->
              <!-- <p>
                {{ stay.name }}
              </p>
              <p>
                {{ stay.loc.address }}
              </p>
              <p>
                {{ stay.price }}
              </p>
              <p>
                {{ stay.likedByUsers.length }}
              </p> -->
            </div>
          </div>

          <div v-show="orders" class="info-header">
            <p>Guest name</p>
            <p>Dates</p>
            <p>Status</p>
            <p>Price</p>
          </div>

          <div class="conditional-container" v-if="userOrders">
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: false,
      stays: true,
      userStays: null,
      userOrders: null,
    };
  },
  created() {
    this.$store.commit({ type: "setUserPage", page: "userPage" });
    // this.getStays();
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
    // async getStays() {
    //   if (!this.userStays) {
    //     const userId = 536581;
    //     this.userStays = await this.$store.dispatch({
    //       type: "getUserStays",
    //       filterBy: userId,
    //     });
    //   }
    // },
    async getOrders() {
      if (!this.userOrders) {
          const userId = this.user._id;
        const filterBy={
            userId
        }
        console.log('userId',userId);
        this.userOrders = await this.$store.dispatch({
          type: "getUserOrders",
          filterBy
        });
            console.log('this.userOrders',this.userOrders);
      }
    },
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
};
</script>
