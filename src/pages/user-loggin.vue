<template>
    <div>
<form v-if="!goSign" class="login-inputs" @submit.prevent="logUser">
        <input type="text" v-model="user.username" placeholder="Username" />
        <input type="password" v-model="user.password" placeholder="Password" />
        <br>
        <button :disabled="isDisabled">Login</button>
        <button @click="goSign=true" >Sign Up</button>
      </form>

<form v-else @submit.prevent="saveUser">
        <input type="text" v-model="user.username" placeholder="Username" />
        <input type="password" v-model="user.password" placeholder="Password" />
        <input type="text" v-model="user.fullname" placeholder="Fullname" />
        <button>Sign Up</button>
        </form>
    </div>
</template>

<script>
import {showMsg} from "@/services/event-bus.service.js";
import {userService} from "@/services/user.service.js";
    export default {
        data(){
    return {
        goSign:false,
        user: {
        username: null,
        password: null,
        fullname:null
      }
    }
},
methods: {

    async saveUser(){
        const user = this.user
        await this.$store.dispatch({type:'signUser', user})
        this.$router.push("*");     
        showMsg('New user logged in: '+ JSON.parse(JSON.stringify((user))));
    },
    async logUser() {
            const user = this.user
            const isUser = await this.$store.dispatch({type:'setUser', user})
            if(isUser){
            this.$router.push("*");
            showMsg('User logged in:'+ JSON.parse(JSON.stringify((user.username))));
            }else{
            alert(`Wrong username or password`);
                this.  user= {
                username: null,
                password: null,
                fullname:null
            }
            }

    },
},
computed:{
    isDisabled(){
        return !(this.user.username&&this.user.password)
    }
}
    }
</script>


