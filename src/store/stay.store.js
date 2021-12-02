import Vue from 'vue'
import Vuex from 'vuex'
import { stayService } from '../services/stay.service'

Vue.use(Vuex)

export const stayStore = {
    strict: true,
    state: {
        isLoading: false,
        stays: [],
        currStay: null
    },
    getters: {
        stays(state) {
            return state.stays
        },
        staysForDisplay(state) {
            let stays = JSON.parse(JSON.stringify(state.stays))
                // let filteredToys = []
                /*
                        // filter by inStock
                        if (state.filterBy.select) {
                            const { select } = state.filterBy
                            if (select === 'In stock') toys = toys.filter(toy => toy.inStock)
                            else if (select === 'Out of stock') toys = toys.filter(toy => !toy.inStock)
                        }
  
                        // filter by name
                        if (state.filterBy.txt) {
                            const regex = new RegExp(state.filterBy.txt, 'i');
                            toys = toys.filter((toy) => regex.test(toy.name));
                        }
  
                        // filter by lables
                        if (state.filterBy.lable) {
                            toys = toys.filter((toy) => toy.labels.includes(state.filterBy.lable))
                        }
                        */
                // Sorting
                // if (state.sortBy) {
                //     if (state.sortBy === 'time')
                //         toys = toys.sort((t1, t2) => t1.createdAt - t2.createdAt)
                //     else if (state.sortBy === 'price')
                //         toys = toys.sort((t1, t2) => t1.price - t2.price)
                //     else if (state.sortBy === 'name')
                //         toys = toys.sort((t1, t2) =>
                //             t1.name.toLowerCase() > t2.name.toLowerCase() ? 1 : -1
                //         )
                // }

            // Paging

            // if (typeof state.pageIdx === 'number' && state.pageIdx !== -1) {
            //     const startIdx = state.pageIdx * state.pageSize
            //     toys = toys.slice(startIdx, startIdx + state.pageSize)
            // }
            return stays
        },
        isLoading({ isLoading }) {
            return isLoading
        },
        getStay({ currStay }) {
            return currStay
        }
    },
    mutations: {
        setLoading(state, { isLoading }) {
            state.isLoading = isLoading
        },
        setFilter(state, { filterBy }) {
            state.filterBy = {...filterBy }
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
            if(!stayId){
                return stayService.getEmptyStay()
            }
            return stayService.getById(stayId).then((stay) => {
                commit({ type: 'getStay', stay })
                return stay
            })
        },
        setFilter({ commit, dispatch }, { filterBy }) {
            commit({ type: 'setFilter', filterBy })
            dispatch({ type: 'loadStays' })
        },
    },
}