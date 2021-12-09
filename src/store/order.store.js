import Vue from 'vue'
import Vuex from 'vuex'
import { orderService } from '../services/order.service'
import { utilService } from '../services/util.service'

Vue.use(Vuex)

export const orderStore = {
    strict: true,
    state: {
        currOrder: {
            hostId: '',
            createdAt: Date.now(),
            buyer: {
                _id: '',
                fullname: ''
            },
            cleaning: utilService.getRandomInt(15, 50),
            service: utilService.getRandomInt(15, 50),
            totalPrice: 0,
            Dates: '',
            totalDays: 0,
            guests: 0,
            adults: 0,
            kids: 0,
            stay: {
                _id: '',
                name: '',
                price: 0
            },
            status: 'pending'
        },
        orders: [],
        

    },
    getters: {
        order(state){
            console.log('state currOrder',state.currOrder);
            return state.currOrder
        }
    },
    mutations: {
        removeOrder(state, payload) {
            state.orders = state.orders.filter((order) => order._id !== payload.orderId)
        },
        addOrder(state, payload) {
            state.orders.push(payload.order)
            console.log(state.orders);
        },
        updateOrder(state, payload) {
            const idx = state.orders.findIndex((order) => order._id === payload.order._id)
            state.orders.splice(idx, 1, payload.order)
        },
        setOrders(state, { orders }) {
            state.orders = orders
        },
        setOrder(state, { order }) {
            console.log('setOrder order',order);
            state.currOrder = order
            console.log('setOrder state order',state.currOrder);
        },
        clearOrder(state){
            state.currOrder={
                hostId: '',
                createdAt: Date.now(),
                buyer: {
                    _id: '',
                    fullname: ''
                },
                cleaning: utilService.getRandomInt(15, 50),
                service: utilService.getRandomInt(15, 50),
                totalPrice: 0,
                Dates: '',
                totalDays: 0,
                guests: 0,
                adults: 0,
                kids: 0,
                stay: {
                    _id: '',
                    name: '',
                    price: 0
                },
                status: 'pending'
            }
        }
    },
    actions: {
        loadOrders({ commit }) {
            orderService
                .query()
                .then((orders) => {
                    commit({ type: 'setOrders', orders })
                })

        },
        addOrder({ commit }, { order }) {
            return orderService.save(order).then((savedOrder) => {
                commit({ type: 'addOrder', order: savedOrder })
                return savedOrder
            })
        },
        updateOrder({ commit }, { order }) {
            return orderService.save(order).then((savedOrder) => {
                commit({ type: 'updateOrder', order: savedOrder })
                return savedOrder
            })
        },
        removeOrder({ commit }, { orderId }) {
            return orderService.remove(orderId).then(() => {
                commit({ type: 'removeOrder', orderId })
            })
        },
        getOrder({ commit }, { orderId }) {
            if (!orderId) {
                return orderService.getEmptyOrder()
            }
            return orderService.getById(orderId).then((order) => {
                commit({ type: 'getOrder', order })
                return order
            })
        },
        getEmptyOrder({commit}){
            return orderService.getEmptyOrder()
        },
        async saveOrder({commit} ,{newOrder}){
           const order = await orderService.saveCurrOrder(newOrder)
           commit({type:'getOrder',order})
        },
        async getOrders({commit},{userId}){
            const orders= await orderService.query()
            return orders
        },
        async getUserOrders({},{filterBy}){
            console.log('store filter', filterBy);
            return await orderService.query(filterBy)
         }



    },
}