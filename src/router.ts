import Vue from 'vue'
import Router, { RouteConfig, RouterOptions } from 'vue-router'
import Pages from './pages'

Vue.use(Router)

const routes: RouteConfig[] = [{
    path: '/',
    name: 'Home',
    component: Pages.Home
}]

const Options: RouterOptions = {
    base: '',
    mode: 'history',
    routes
}

export default new Router(Options)
