import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../pages/home-page.vue'
import explorePage from '../pages/explore-page.vue'
import stayEdit from '../pages/stay-edit.vue'
import stayDetails from '../pages/stay-details.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: homePage
    },
    {
        path: '/stay',
        component: explorePage
    },
    {
        path: '/stay/edit/:stayId?',
        component: stayEdit
    },
    {
        path: '/stay/:stayId',
        component: stayDetails
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router