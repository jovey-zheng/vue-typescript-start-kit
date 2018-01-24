/**
 * page entery
 */
declare function require (name: String | String[], resolve?: Object)
// page components
const Home = resolve => require(['./Home.vue'], resolve)

export default {
    Home
}
