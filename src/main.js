import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router"
import filters from "./filters"

Vue.use(VueRouter)

Object.keys(filters).forEach(function(k){
  Vue.filter(k, filters[k])
})
/* eslint-disable no-new */
// var app = new Vue({
//   el: 'body',
//   components: { App }
// })

var router = new VueRouter()

router.map({
    '/': { //首页
        name: 'list',
        component: function(resolve) {
            require(['./views/vList.vue'], resolve);
        }
    },
    '*': {
        component: function(resolve) {
            require(['./views/vList.vue'], resolve);
        }
    },
    '/list': { //首页
        name: 'list',
        component: function(resolve) {
            require(['./views/vList.vue'], resolve);
        }
    },
    '/topic/:id': {
        name: "topic",
        component: function(resolve) {
            require(['./views/vTopic.vue'], resolve)
        }
    },
    "/message": {
        name: " message",
        component: function(resolve) {
            require(['./views/vMessage.vue'], resolve);
        },
        auth: true
    },
    "/about": {
        name: " about",
        component: function(resolve) {
            require(['./views/vAbout.vue'], resolve);
        }
    },
    "/perinfo/:loginname": {
        name: " perinfo",
        component: function(resolve) {
            require(['./views/vPerinfo.vue'], resolve);
        },
        auth: true
    },
    "/login": {
        name: " login",
        component: function(resolve) {
            require(['./views/vLogin.vue'], resolve);
        }
    },
    "/newtopic": {
        name: " newtopic",
        component: function(resolve) {
            require(['./views/vNewTopic.vue'], resolve);
        },
        auth: true
    }
})


router.beforeEach(function(transition) {
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
