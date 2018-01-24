import { GetterTree } from 'vuex'
import State from '../state'

const Getters: GetterTree<State, object> = {
    multiple: (state: State): number => state.count * 2
}

export default Getters
