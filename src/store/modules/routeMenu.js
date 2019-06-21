import { findmenu } from '../../api/index'

const state = {
	menuList: []
}

const getters = {
	menuList: state => state.menuList
}

const actions = {
	getMenus: ({commit}, user) => {
		findmenu({user}).then(req => {
			commit('insertMenu', req);
		});
	}
}

const mutations = {
	insertMenu(state, data){
		state.menuList = data;
		sessionStorage.setItem('menuList', JSON.stringify(state.menuList));
	},
	updateMenu(state, data){
		state.menuList = [...state.menuList, ...data];
		sessionStorage.setItem('menuList', JSON.stringify(state.menuList));
	},
	clearMenu(){
		sessionStorage.setItem('menuList', '');
	}
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}
