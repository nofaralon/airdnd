<template>
  <div class="main-login">
    <section v-if="!goSign" class="login-form-container">
      <form class="login-form" @submit.prevent="logUser">
        <div class="login-header">
          <h2>Log in</h2>
        </div>
        <div class="login-body">
          <h2>Welcome back</h2>
          <input type="text" v-model="user.username" placeholder="Username" />
          <input
            type="password"
            v-model="user.password"
            placeholder="Password"
          />
          <button class="login-btn" :disabled="isDisabled">Login</button>
        </div>
        <button @click="goSign = true" class="new-user-btn">New user?</button>
      </form>
    </section>

    <section v-else class="signup-form-container">
      <form class="signup-form" @submit.prevent="saveUser">
        <div class="signup-header">
          <h2>Sign Up</h2>
        </div>
        <div class="signup-body">
          <h2>Welcome to Airdnd</h2>
          <input type="text" v-model="user.fullname" placeholder="Fullname" />
          <input type="text" v-model="user.username" placeholder="Username" />
          <input
            type="password"
            v-model="user.password"
            placeholder="Password"
          />

          <button
            class="signup-btn"
            @click="goSign = true"
            :disabled="isDisabled"
          >
            Sign up
          </button>
        </div>
        <button @click="goSign = false" class="new-user-btn">
          Already have an acount
        </button>
      </form>
    </section>
    
  </div>
</template>

<script>
import { showMsg } from "@/services/event-bus.service.js";
import { userService } from "@/services/user.service.js";
import exploreHeader from "@/cmps/explore-header";
export default {
  data() {
    return {
      goSign: false,
      user: {
        username: null,
        password: null,
        fullname: null,
      },
    };
  },
  created() {
    this.goSign = this.$route.params.signup;
    this.$store.commit({ type: "clearOrder" });
  },
  methods: {
    async saveUser() {
      const user = this.user;
      await this.$store.dispatch({ type: "signUser", user });
      this.$router.push("/stay");
      showMsg("New user logged in: " + JSON.parse(JSON.stringify(user)));
    },
    async logUser() {
      const user = this.user;
      const isUser = await this.$store.dispatch({ type: "setUser", user });
      if (isUser) {
        this.$router.push("/stay");
        showMsg("User logged in:" + JSON.parse(JSON.stringify(user.username)));
      } else {
        alert(`Wrong username or password`);
        this.user = {
          username: null,
          password: null,
          fullname: null,
        };
      }
    },
  },
  computed: {
    isDisabled() {
      return !(this.user.username && this.user.password);
    },
  },
  watch: {
    "$route.params.signup"() {
      if (!this.$route.params.signup) {
        this.goSign = false;
      } else this.goSign = true;
    },
  },
  components: {
    exploreHeader,
  },
};
</script>