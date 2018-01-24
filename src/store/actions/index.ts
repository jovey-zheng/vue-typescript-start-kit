import { ActionTree } from 'vuex'

const Actions: ActionTree<object, any> = {
    inc ({ commit }): void {
        commit('inc')
    },

    dec ({ commit }): void {
        commit('dec')
    }
}

export default Actions
