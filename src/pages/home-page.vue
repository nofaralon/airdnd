<template>
<div>

  <section class="home-page main-layout">

    <div class="opening-screen full">
             <transition name="component-fade" mode="out-in">
    <dynamic-filter v-show="!scroll" :isSmall="false"></dynamic-filter>
    </transition>
   
    <div>
    <div class="home-img-container main-layout" :class="{scrolled : scroll}">
    <img src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-49706308/original/8e59d82a-6c8e-4e9c-89bc-adbc9d797f32.jpeg?im_w=1200" />
    </div>
    <div class="explore-btn">
    <p class="opening-sentence">Not sure where to go? Perfect.</p>
    <button @click="goTo('/stay')"><span>I'm flexible</span></button>
    </div>
    </div>
    </div>

    <h2 class="inspirations">Inspiration for your next trip</h2>

    <div @click="goTo('/stay')" class="top-cities">
      <div class="city">
        <img src="https://res.cloudinary.com/di0utpbop/image/upload/v1638532176/airdnd/Amsterdam-The-lights-on-the-bridges_rwg49e.jpg" />
        <div class="amsterdam-text city-txt">
        <p>Amsterdam</p>
        </div>
      </div>

      <div @click="goTo('/stay')" class="city">
        <img src="https://res.cloudinary.com/di0utpbop/image/upload/v1638532647/airdnd/Star_Island_overview_ybytse.jpg" />
        <div class="miami-text city-txt">
        <p>Miami</p>
        </div>
      </div>

      <div @click="goTo('/stay')" class="city">
        <img src="https://res.cloudinary.com/di0utpbop/image/upload/v1638532920/airdnd/iceland18_yexgqv.jpg" />
        <div class="iceland-text city-txt">
        <p>Iceland</p>
        </div>
      </div>

      <div @click="goTo('/stay')" class="city">
        <img src="https://res.cloudinary.com/di0utpbop/image/upload/v1638533352/airdnd/55da01cd23e91286e4548a0c98ed8b7a_qe30hn.jpg" />
        <div class="paris-text city-txt">
        <p>Paris</p>
        </div>
      </div>
    </div>


    <div class="host-img-container">
      <img src="https://res.cloudinary.com/di0utpbop/image/upload/v1638551091/airdnd/1_s3ZJrdHJn5A9jeaoS60M_Q_taacdw.jpg" alt="">
      <div class="on-host-img">
        <div>
      <h1>Questions</h1> <h1>about</h1>  <h1>hosting?</h1>
        </div>
      <button>Ask a Superhost</button>
      </div>
    </div>

  </section>

</div>
</template>


<script>
import appHeader from "../cmps/app-header";
import dynamicFilter from "@/cmps/dynamic-filter";

export default {
  name: "home-page",
  data() {
    return {
      scroll:null,
    };
  },
  created() { 
    window.addEventListener('scroll', this.handleScroll);
     this.$emit('header','home')

  },
   destroyed() {
    window.removeEventListener('scroll', this.handleScroll);

  },
  methods: {
    goTo(here){
  this.$router.push(here)
},
  handleScroll(e) {
      this.scroll = window.scrollY || window.scrollTop
    },
  },
  computed: {},
  components: {
    appHeader,
    dynamicFilter

  },
};
</script>

