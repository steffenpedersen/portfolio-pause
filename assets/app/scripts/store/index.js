// import core.js polyfills
import 'core-js/fn/promise';

import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

const store = new Vuex.Store({
	state,
	getters,
	mutations,
	actions,
});

export default store;
