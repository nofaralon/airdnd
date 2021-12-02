import {userService} from '../services/user.service.js'

export const userStore={
    state:{
        user: userService.getLoggedinUser() || null,
    },
    getters: {
        user(state){
            return state.user
        },
        miniUser(state){
            const _id=state.user._id
            const fullname=state.user.fullname
            const imgUrl=state.user.imgUrl
            return {
                _id,
                fullname,
                imgUrl
            }
        }
        

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
            await userService.signup(user)
            commit({type:"setUser", user})
        }
    }

}