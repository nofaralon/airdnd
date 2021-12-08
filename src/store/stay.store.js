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
        filterBy:{
            country:'',
            ailments:'',
            guests:null,
            Dates:"",
            type:[]
        }
         
          

    },
    getters: {
        stays(state) {
            return state.stays
        },
        filterBy(state){
            return state.filterBy
        },
        staysForDisplay(state) {
            let stays = JSON.parse(JSON.stringify(state.stays))
                let filteredStays = []
                if (!state.filterBy) {
                    return stays   
                }
                if (state.filterBy.country) {
                    stays = stays.filter((stay) => (stay.loc.country ===state.filterBy.country ));
                }
                // filter by guests
                if (state.filterBy.guests) {
                    stays = stays.filter((stay) => stay.capacity >= state.filterBy.guests)
                }
                if(state.filterBy.fromPrice && state.filterBy.toPrice){
                    stays =stays.filter((stay)=>stay.price >=state.filterBy.fromPrice && stay.price <= state.filterBy.toPrice)
                }
                if (state.filterBy.type.length) {
                    const selectedLabels = JSON.parse(JSON.stringify(state.filterBy.type));
                    selectedLabels.map((label)=>{
                    stays = stays.filter(stay => {
                    return stay.type === label
                    })
                })
                }
                if(state.filterBy.beds){
                    stays = stays.filter((stay)=> stay.beds >= state.filterBy.beds)
                }
                if(state.filterBy.bathrooms){
                    stays = stays.filter((stay)=> stay.bathrooms >= state.filterBy.bathrooms)
                }
                if(state.filterBy.bedrooms){
                    stays = stays.filter((stay)=> stay.bedroom >= state.filterBy.bedrooms)
                }
               
                //     stays =stays.filter((stay)=> {
                //         state.filterBy.type.
                //     })

                
                
                // filter by inStock
                // if (state.filterBy.inStock) {
                    // console.log(state.filterBy.country);
                    // const { select } = state.filterBy
                    // if (select === 'In stock') stays = stays.filter(stay => stay.inStock)
                    // else if (select === 'Out of stock') stays = stays.filter(stay => !stay.inStock)
                // } 
                // filter by country
                // Sorting
                // if (state.sortBy) {
                //     if (state.sortBy === 'time')
                //         stays = stays.sort((t1, t2) => t1.createdAt - t2.createdAt)
                //     else if (state.sortBy === 'price')
                //         stays = stays.sort((t1, t2) => t1.price - t2.price)
                //     else if (state.sortBy === 'name')
                //         stays = stays.sort((t1, t2) =>
                //             t1.name.toLowerCase() > t2.name.toLowerCase() ? 1 : -1
                //         )
                // }

            // Paging

            // if (typeof state.pageIdx === 'number' && state.pageIdx !== -1) {
            //     const startIdx = state.pageIdx * state.pageSize
            //     stays = stays.slice(startIdx, startIdx + state.pageSize)
            // }
            return stays
        },
        isLoading({ isLoading }) {
            return isLoading
        },
        getStay({ currStay }) {
            return currStay
        },
        allStays(state){
            return state.stays
        }
    },
    mutations: {
        setFilter(state, { filterBy }) {
            state.filterBy = {...filterBy }
            console.log('state.filterBy',state.filterBy);
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
        getStay(state, { stay }) {
            state.currStay = stay
        },
    },
    actions: {
        loadStays({ commit, state }) {
            var filterBy = state.filterBy ? state.filterBy : ''
            commit({ type: 'setLoading', isLoading: true })
            stayService
                .query(filterBy)
                .then((stays) => {
                    commit({ type: 'setStays', stays })
                })
                .finally(() => {
                    commit({ type: 'setLoading', isLoading: false })
                })
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
            if (!stayId) {
                return stayService.getEmptyStay()
            }
            return stayService.getById(stayId).then((stay) => {
                commit({ type: 'getStay', stay })
                return stay
            })
        },
        async addReview({ commit }, { details }) {
            console.log(details);
            const { stayId, review } = details
            const stay = await stayService.addReview(stayId, review)
            console.log('stay-', stay);
            commit({ type: 'updateStay', stay })


        }
    },
}