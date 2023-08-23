const module = {
  namespaced: true,
  state() {
    return {
      channels: [
        { id: 1, name: "chanel 1", messages: [] },
        { id: 2, name: "chanel 2", messages: [] },
        { id: 3, name: "chanel 3", messages: [] },
      ],
    };
  },
  getters: {
    getChannel: (state,getters,rootState,rootGetters) => (search) =>{
      return state.channels.filter((channel)=>channel.name.toLowerCase().includes(search.toLowerCase())).map((channel)=>{
        const messages = rootGetters['messages/getUnreadMessages'](channel.id);
        return {
          ...channel,
          messages
        }
      });
    },
  },

};
export default module;
