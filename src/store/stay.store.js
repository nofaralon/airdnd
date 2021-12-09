import Vue from 'vue'
import Vuex from 'vuex'
import { stayService } from '../services/stay.service'

Vue.use(Vuex)

export const stayStore = {
    strict: true,
    state: {
        isLoading: false,
        stays: [],
        currStay: null,
        filterBy: {
            country: '',
            ailments: '',
            guests: null,
            Dates: "",
            type: [],
            fromPrice: 0,
            toPrice: 450,
            beds: 0,
            bedrooms: 0,
            bathrooms: 0
        },
        tempStays: [],
        userStays: [],
    },
    getters: {
        stays(state) {
            return state.stays
        },
        filterBy(state) {
            return state.filterBy
        },
        staysForDisplay(state) {
            let stays = JSON.parse(JSON.stringify(state.stays))
            let filteredStays = []
            // state.tempStays = stays
            return stays
        },
        isLoading({ isLoading }) {
            return isLoading
        },
        getStay({ currStay }) {
            return currStay
        },
        allStays(state) {
            return state.stays
        },
        tempStays(state) {
            return state.tempStays
        }
    },
    mutations: {
        setFilter(state, { filterBy }) {
            console.log('my filter',filterBy);
            if (filterBy.fromPrice) {
                state.filterBy.fromPrice = filterBy.fromPrice
            }
            if (filterBy.toPrice) {
                state.filterBy.toPrice = filterBy.toPrice
            }
            if (filterBy.type.length) {
                state.filterBy.type = filterBy.type
            }else {
             state.filterBy.type =[]
            }
            if (filterBy.beds) {
                state.filterBy.beds = filterBy.beds
            }else {
                state.filterBy.beds =0;
            }
            if (filterBy.bedrooms) {
                state.filterBy.bedrooms = filterBy.bedrooms
            }else {
                state.filterBy.bedrooms =0;
            }
            if (filterBy.bathrooms) {
                state.filterBy.bathrooms = filterBy.bathrooms
            }else {
                state.filterBy.bathrooms =0;
            }
        },
        setUserStays(state, { stays }) {
            state.userStays = stays
        },
        setLoading(state, { isLoading }) {
            state.isLoading = isLoading
        },
        setSort(state, { sortBy }) {
            state.sortBy = sortBy
        },
        setPageIdx(state, { pageIdx }) {
            state.pageIdx = pageIdx
            let maxPage = Math.ceil(state.stays.length / state.pageSize)

            if (state.pageIdx >= maxPage) state.pageIdx = 0
            else if (state.pageIdx < 0) state.pageIdx = maxPage - 1
        },
        removeStay(state, payload) {
            state.stays = state.stays.filter((stay) => stay._id !== payload.stayId)
        },
        addStay(state, payload) {
            state.stays.push(payload.stay)
            console.log('asdasd', state.stays)
        },
        updateStay(state, payload) {
            const idx = state.stays.findIndex((stay) => stay._id === payload.stay._id)
            state.stays.splice(idx, 1, payload.stay)
        },
        setStays(state, { stays }) {
            state.stays = stays
        },
        setStay(state, { stay }) {
            state.currStay = stay
        },
        setBigFilter(state, { filterBy }) {
            if (filterBy.country) {
                state.filterBy.country = filterBy.country
            } else {
                state.filterBy.country = '';
            }
            if (filterBy.guests) {
                state.filterBy.guests = filterBy.guests
            }
        },
        resetFilter(state,{filterBy}){
            state.filterBy = filterBy
        },
        setTempStays(state, {stays}){
            console.log('temp stays',stays);
            state.tempStays=stays

        }

    },
    actions: {
        loadStays({ commit, state }) {
            console.log('loading....');
            var filterBy = state.filterBy ? state.filterBy : ''
            commit({ type: 'setLoading', isLoading: true })
            stayService
                .query(filterBy)
                .then((stays) => {
                    commit({ type: 'setStays', stays })
                    commit({type:'setTempStays',stays})
                })
                .finally(() => {
                    commit({ type: 'setLoading', isLoading: false })
                })
        },
       async setFilter({commit,state,dispatch},{filterBy}){
         await commit({type:'setFilter',filterBy})
               console.log('setting small');
              dispatch({type:'loadStays'})
        },
       async setBigFilter({commit,state,dispatch},{filterBy}){
          await commit({type:'setBigFilter',filterBy})
               console.log('setting big',filterBy);
               dispatch({type:'loadStays'})

        },
        resetFilter({commit,dispatch},{filterBy}){
            commit({type:'resetFilter',filterBy})
            dispatch({type:'loadStays'})

        },
        addStay({ commit }, { stay }) {
            return stayService.save(stay).then((savedStay) => {
                commit({ type: 'addStay', stay: savedStay })
                return savedStay
            })
        },
        toggleLike({ dispatch, getters }, { stay }) {
            const user = getters.miniUser
            console.log(user, stay);
            const wasLiked = stay.likedByUsers.findIndex(reviewer => reviewer._id === user._id)
            if (wasLiked >= 0) {
                stay.likedByUsers.splice(wasLiked, 1)
                console.log(stay.likedByUsers);
            } else {
                stay.likedByUsers.unshift(user)
                console.log(stay.likedByUsers);
            }


        },
        updateStay({ commit }, { stay }) {
            return stayService.save(stay).then((savedStay) => {
                commit({ type: 'updateStay', stay: savedStay })
                return savedStay
            })
        },
        removeStay({ commit }, { stayId }) {
            return stayService.remove(stayId).then(() => {
                commit({ type: 'removeStay', stayId })
            })
        },
        getStay({ commit }, { stayId }) {
            commit({ type: 'setLoading', isLoading: true })
            console.log('stayId-', stayId);

            if (!stayId) {
                return stayService.getEmptyStay()
            } else return stayService.getById(stayId).then((stay) => {
                commit({ type: 'setStay', stay })
                commit({ type: 'setLoading', isLoading: false })
                return stay
            })
        },
        getStayByUserId({ commit }, { userId }) {
            console.log('userId- in stor stays', userId);
            return stayService.getByUserId(userId).then((stays) => {
                commit({ type: 'setUserStays', stays })
                return stays
            })
        },
        async addReview({ commit }, { details }) {
            console.log(details);
            const { stayId, review } = details
            const stay = await stayService.addReview(stayId, review)
            console.log('stay-', stay);
            commit({ type: 'updateStay', stay })
            return stay
        },
        async getUserStays({ commit }, { filterBy }) {
            console.log(filterBy);
            return await stayService.query(filterBy)
        }
    },
}