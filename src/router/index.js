import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import {controllerTitle} from '@/util'

if (!window.VueRouter) {
    Vue.use(VueRouter)
}

const router = new VueRouter({
    mode: 'history',
    routes

})
router.afterEach((to, from) => {
    if (to.meta.title) {
        controllerTitle.setRouterTitle(to.meta.title)
    }
})
export default router