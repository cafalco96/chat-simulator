import { UPDATE_USERNAME,COMMIT_SET_STATUS } from '@/common/mutation-tipes';
import { getUser } from '@/api';
import { root } from 'postcss';

const module = {
  namespaced: true,
  state() {
    return {
      username: "",
      id:1,
      details:{
        name:'Yo',
        id:1,
        avatar:'/avatars/avatar.jpg',
      }
    };
  },
  getters: {
    firstName:(state) => (c)=>{
      return state.username.split('').join(c);
    },
  },
  mutations: {
    [UPDATE_USERNAME](state, username) {
      state.username = username;
    },
  },
  actions: {
    async updateUsername({ commit,state, rootState }) {
      const user = await getUser(1);
      commit(UPDATE_USERNAME, user.username);
      if (state.username) {
        // commit('COMMIT_SET_STATUS','active', {root:true});
      commit(COMMIT_SET_STATUS,'active', {root:true});
      }
    },
  },
};
export default module;
