<template>
  <div class="edit-container">
    <div class="edit-side-show">
    <pre v-if="newStay">
      {{newStay}}
    </pre>
    </div>
    <div v-if="newStay" class="edit-main-show">

      <div v-if="!pageCount" class="edit-card">
      </div>
    <span>First of all, give your listing a good, selling name</span>
    <textarea name="name" cols="30" rows="5" placeholder="What is the name of your listing?" v-model="newStay.name"></textarea>
<div v-if="!pageCount" class="edit-card">
      </div>

    <div v-if="pageCount===1" class="edit-card">
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
    </div>

<div v-if="pageCount===2" class="edit-card">
    <span>Provide your potential guest information regarding your listing</span>
    <textarea name="name" cols="40" rows="4" placeholder="Provide some details about the listing, size, furniture, containing AC? etc." v-model="newStay.space"></textarea>
    <textarea name="name" cols="40" rows="10" placeholder="Describe your listing in general" v-model="newStay.summary"></textarea>
    <textarea name="name" cols="40" rows="2" placeholder="Will your guests be restricted? or will they have the whole space?" v-model="newStay.acces"></textarea>
    <textarea name="name" cols="40" rows="2" placeholder="Any notes or notices worth pointing out?" v-model="newStay.notes"></textarea>
</div>

    <div v-if="pageCount===3" class="edit-card">
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
      </div>
    <div v-if="pageCount===4" class="edit-card">
    <span>Describe the listing's surroundings and transportation options</span>
    <textarea name="name" cols="40" rows="4" placeholder="What can guests do around your listing?" v-model="newStay.around"></textarea>
    <textarea name="name" cols="40" rows="4" placeholder="Describe common transportation methods in your listing's proximity" v-model="newStay.transit"></textarea>
    </div>
    <div v-if="pageCount===5" class="edit-card">
    <span>Add listing price, we recommend checking local avarage before deciding.</span>
    <input type="number" min="0" v-model="newStay.price">
    </div>

    <div v-if="pageCount===5" class="edit-card">
    <span>Finally, add at least five pictures of your listing</span>
    <img-upload @save="saveImg"/>
    <button v-if="pageCount>1" @click="setPageCount(-1)">Back</button>
    <button v-if="pageCount<5" @click="setPageCount(-1)">Next</button>
    <button :disabled="imgCount<5" v-if="pageCount===5" @click="setPageCount(-1)">Submit listing</button>
    </div>
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
      pageCount:0,
      imgCount:0
    };
  },
  async created() {
    if (!this.stay){
      this.addStay()
    }
    this.$emit("header", "edit");

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
      this.imgCount+=1
    },
    setPageCount(pulusOrMinus){
      this.pageCount+=pulusOrMinus
    }
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
