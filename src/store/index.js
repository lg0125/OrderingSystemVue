import Vue from "vue";
import Vuex from "vuex";

import state from './module/state'
import mutations from './module/mutations'
import actions from './module/actions'
import getters from './module/getters'

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
