import { MutationTree, Mutation } from 'vuex'
import State from '../state'

const Mutations: MutationTree<State> = {
    inc (state: State): void {
        state.count += 1
    },

    dec (state: State): void {
        state.count -= 1
    }
}

export default Mutations
