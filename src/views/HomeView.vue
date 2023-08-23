<script>
import { RouterView, RouterLink } from "vue-router";
import InputSearch from "@/components/InputSearch.vue";
import ProfileCard from "@/components/ProfileCard.vue";
import ChatItem from "@/components/ChatItem.vue";
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  components: {
    RouterView,
    RouterLink,
    InputSearch,
    ProfileCard,
    ChatItem,
  },
  data() {
    return {
      newMessage: "",
      search: "",
      profile: {
        username: "Me",
        avatar: "/avatars/avatar.jpg",
      },
      channels: [],
    };
  },
  methods: {
    ...mapMutations("messages", ["markAsRead"]),
  },
  computed: {
    // ...mapState(['username']),
    ...mapState(["status"]),
    ...mapGetters("profile", ["firstName"]),
    ...mapGetters("channels", ["getChannel"]),
  }, //usando el spring ... y una arreglo

  // mapState({
  //   username:(state)=>state.username
  // }) otra forma es un objeto
  // username(){
  //   return this.$store.state.username
  // } forma tradicional
};
</script>

<template>
  <div class="home">
    <aside>
      <InputSearch v-model="search" />
      <ProfileCard
        :avatar="profile.avatar"
        :username="firstName(' ')"
        :status="status"
      />
      <RouterLink to="/" class="channels-title"
        >Channels <Icon icon="carbon:hashtag"
      /></RouterLink>
      <div class="channels">
        <ChatItem
          v-for="channel in getChannel(search)"
          :key="channel.id"
          :id="channel.id"
          :name="channel.name"
          :messages="channel.messages"
          @click="markAsRead(channel.id)"
        />
      </div>
    </aside>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.home {
  @apply flex h-screen;
  aside {
    @apply flex flex-col w-80 min-w-max px-6 py-5 gap-4 bg-zinc-800;
    .channels-title {
      @apply flex items-center gap-2 mt-2 ml-3 text-xl font-bold text-neutral-200;
    }
    .channels {
      @apply flex flex-col gap-2 overflow-y-auto;
    }
  }
  main {
    @apply w-full;
  }
}
</style>
