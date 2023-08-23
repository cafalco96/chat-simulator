const module = {
  namespaced: true,
  state() {
    return {
      messages: [
        {
          id: 1,
          author: 1,
          message: "Hola 👀",
          timestamp: new Date().toLocaleTimeString(),
          read: false,
          channelId: 1,
        },
        {
          id: 2,
          author: 2,
          message: "Hooooli",
          timestamp: new Date().toLocaleTimeString(),
          read: false,
          channelId: 1,
        },
      ],
    };
  },
  getters: {
    getMessages: (state) => (channelId) =>
      state.messages.filter((msg) => msg.channelId === parseInt(channelId)),
    getUnreadMessages:
      (state, getters, rootState, rootGetters) => (channelId) => {
        return getters
          .getMessages(channelId)
          .filter((msg) => msg.read === false).length;
      },
  },
  mutations: {
    markAsRead(state, channelId) {
      state.messages.forEach((message) => {
        if (message.channelId === channelId) {
          message.read = true;
        }
      });
    },
    addMessage(state, newMessage) {
      if (newMessage != "") {
        state.messages.push({
          id: Date.now(),
          author: 1,
          message: newMessage,
          timestamp: new Date().toLocaleTimeString(),
          read: true,
          channelId: parseInt(state.messages[0].channelId),
        });
      }
    },
  },
};
export default module;
