<template>
  <div>
    <pre v-if="newStay">
      {{newStay}}
    </pre>
    <div v-if="newStay">
    <span>First of all, give your listing a good, selling name</span>
    <textarea name="name" cols="30" rows="5" placeholder="What is the name of your listing?" v-model="newStay.name"></textarea>

    <span>Where is it?</span>
    <label >
      Country:
    <input list="countries" type="list" v-model="newStay.loc.country">
    </label>

    <datalist id="countries">
    <option>Amsterdam</option>
    <option>France</option>
    <option>Iceland</option>
    <option>Miami, Florida United States</option>
    </datalist>

    <label >
      Address:
    <input list="countries" type="text" v-model="newStay.loc.Address">
    </label>
    
    <user-location v-if="newStay.loc.Address" :address="newStay.loc.Address" @loc="setLoc"/>

    <span>Provide your potential guest information regarding your listing</span>
    <textarea name="name" cols="40" rows="4" placeholder="Provide some details about the listing, size, furniture, containing AC? etc." v-model="newStay.space"></textarea>
    <textarea name="name" cols="40" rows="10" placeholder="Describe your listing in general" v-model="newStay.summary"></textarea>
    <textarea name="name" cols="40" rows="2" placeholder="What type of acomodations guests get when booking the listing?" v-model="newStay.acces"></textarea>
    <textarea name="name" cols="40" rows="2" placeholder="Any notes or notices worth pointing out?" v-model="newStay.notes"></textarea>
    
    <span>General information about the listing</span>
    <label>
      Type:
    <input list="types" type="list" v-model="newStay.type">
    </label>
    <datalist id="types">
    <option>Outdoors</option>
    <option>Loft</option>
    <option>Apartment</option>
    <option>Villa</option>
    </datalist>
    <label>
      Capacity:
    <input min="0" type="number" v-model="newStay.capacity">
    </label>
    <label>
      Bathrooms:
    <input min="0" type="number" v-model="newStay.bathrooms">
    </label>
    <label>
      Beds:
    <input min="0" type="number" v-model="newStay.beds">
    </label>

    <span>Describe the listing's surroundings and transportation options</span>
    <textarea name="name" cols="40" rows="4" placeholder="What can guests do around your listing?" v-model="newStay.around"></textarea>
    <textarea name="name" cols="40" rows="4" placeholder="Describe common transportation methods in your listing's proximity" v-model="newStay.transit"></textarea>

    <span>Add listing price, we recommend checking local avarage before deciding.</span>
    <input type="number" min="0" v-model="newStay.price">


    <span>Finally, add at least five pictures of your listing</span>
    <img-upload @save="saveImg"/>
    </div>
  </div>
</template>


<script>
import userLocation from '@/cmps/user-location';
import imgUpload from '@/cmps/img-upload';
export default {

  name: "stay-edit",
  props:{
    stay:Object
  },
  data() {
    return {
      newStay:null,
    };
  },
  async created() {
    if (!this.stay){
      this.addStay()
    }
    // let map = this.$refs.map
    // map.moveTo('Haifa,Israel')
  },
  methods: {
    async addStay(){
      this.newStay= await this.$store.dispatch({type:'getStay'})
      this.newStay.host._id=this.user._id
      this.newStay.host.fullname=this.user.fullname
      this.newStay.host.imgUrl=this.user.imgUrl
    },
    setLoc(loc){
      this.newStay.loc.lat=loc.lat
      this.newStay.loc.lng=loc.lng
    },
    saveImg(imgUrl) {
      this.newStay.imgUrls.push(imgUrl)
    },
  },
  computed: {
    user(){
      console.log(this.$store.getters.user);
      return this.$store.getters.user
    }
  },
  components: {
    userLocation,
    imgUpload,
  },
};
</script>
