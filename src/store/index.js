import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// 引入 actions 和 mutations 
import mutations from './mutations'
import actions from './actions'
// 吧成立的好的vuex导出去

export default new Vuex.Store({
	modules:{
		mutations
	},
	actions
});