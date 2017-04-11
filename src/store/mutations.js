const state={
	header:true
};
const mutations = {
	showHeader(state) {
		state.header=true;
	},
	hideHeader(state){
		state.header=false;
	}
};
const getters={
	headerShow(state){
		return state.header;
	}
};
export default {
	state,
	mutations,
	// actions,
	getters
}