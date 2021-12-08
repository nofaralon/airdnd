import { userService } from '../services/user.service.js'

export const userStore = {
    state: {
        user: userService.getLoggedinUser() || null,
        userCurrPage: 'home'
    },
    getters: {
        user(state) {
            return state.user
        },
        miniUser(state) {
            const _id = state.user._id
            const fullname = state.user.fullname
            const imgUrl = state.user.imgUrl
            return {
                _id,
                fullname,
                imgUrl
            }
        },
        userPage(state) {
            return state.userCurrPage
        }


    },
    mutations: {
        setUser(state, { loginUser }) {
            console.log('user', loginUser);
            state.user = loginUser
        },
        setUserPage(state, { page }) {
            console.log('page:', page);
            state.userCurrPage = page
        }
    },
    actions: {
        async getUserById({}, { userId }) {
            console.log(userId);
            const user = await userService.getById(userId)
            console.log(user);
            return user
        },
        async setUser({ commit }, { user }) {
            const loginUser = await userService.login(user.username, user.password);
            if (loginUser) {
                commit({ type: "setUser", loginUser })
                return true
            } else {
                return false
            }

        },
        async signUser({ commit }, { user }) {
            var loginUser = await userService.signup(user)
            commit({ type: "setUser", loginUser })
        }
    }

}