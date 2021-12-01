import {userService} from '../services/user.service.js'

export const userStore={
    state:{
        user: userService.getLoggedinUser() || null
    },
    getters: {
        user(state){
            return state.user
        },
        

    },
    mutations: {
        setUser(state,{user}){
            console.log('user',user);
            state.user = user
        },
    },
    actions:{
        async getUserById({},{userId}){
            console.log(userId);
            const user= await userService.getById(userId)
            console.log(user);
            return user
        },
        async setUser({commit},{user}){
            const loggedInUser=await userService.login(user.username,user.password);
            if(loggedInUser){
                commit({type:"setUser", loggedInUser})
                return true
            }else{
                return false
            }

        },
        async signUser({commit},{user}){
            const signedUser = await userService.signup(user)
            commit({type:"setUser", signedUser})
        }
    }

}