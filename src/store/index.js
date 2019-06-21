import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import routemenu from './modules/routeMenu'

const store = new Vuex.Store({
	modules: {
		routemenu
	}
})

export default store