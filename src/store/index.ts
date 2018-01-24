/**
 * Vuex entery
 */
import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import State from './state'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import modules from './modules'

const state = new State()
const debug: boolean = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)

const store: Store<object> = new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules
})

// 热更新
if (debug && module.hot) {
    module.hot.accept([
        './getters',
        './modules',
        './actions',
        './mutations'
    ], () => {
        const actions = require('./actions').default
        const modules = require('./modules').default
        const getters = require('./getters').default
        const mutations = require('./mutations').default

        store.hotUpdate({
            actions,
            mutations,
            getters,
            modules
        })
    })
}

export default store
