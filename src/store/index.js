import { createStore } from 'vuex';
import profile from '@/store/modules/profile';
import { COMMIT_SET_STATUS } from '../common/mutation-tipes';
import channels from '@/store/modules/channels';
import messages from '@/store/modules/messages';
import contacts from '@/store/modules/contacts';

const store = createStore({
  state () {
    return {
      status:null,
    }
  },
  getters:{
    // firstName(state,getters,rootState){
    //   return rootState.profile.username.split('.')[0];
    // } formas de acceder al estado desde otros modulos 
  },
  mutations:{
    [COMMIT_SET_STATUS](state,value) {
      state.status = value;
    }
  },
  actions:{
  },
  modules:{
    profile,
    channels,
    messages,
    contacts,
  }
  
});

export default store;