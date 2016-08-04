import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router"
import routerMap from './router'
import filters from "./filters"


Vue.use(VueRouter)


Object.keys(filters).forEach((k) => {
  Vue.filter(k, filters[k])
})


var router = new VueRouter()

routerMap(router)


router.beforeEach((transition) => {
    if (transition.to.auth) {
        if (localStorage.user_id) {
            transition.next();
        } else {
        	var redirect = encodeURIComponent(transition.to.path)
            transition.redirect("/login?redirect=" + redirect)
        }
    } else {
        transition.next()
    }
})
router.start(App, 'app')
