<template>
  <div
    id="message-bar"
    class="flex h-full flex-col w-[240px] min-w-[240px] max-w-[240px] bg-secondary-925"
  >
    <div class="h-[48px] border-b-2 border-b-secondary-950">
      <SearchBar />
    </div>
    <div class="flex-1">
      <ul>
        <RouteButton :active="true">
          Amigos
        </RouteButton>
        <RouteButton>Nitro</RouteButton>
        <RouteButton>Loja</RouteButton>
      </ul>

      <div class="flex flex-row text-secondary-300 px-4 mt-3 mb-1">
        <span class="flex-1 font-bold text-sm">Mensagens Diretas</span>
        <div class="w-[25px] text-right">
          <button>+</button>
        </div>
      </div>

      <ul>
        <FriendButton />
        <FriendButton />
        <FriendButton />
      </ul>
    </div>

    
    <UserStatus />
  </div>
</template>

<script setup>
  import SearchBar from "./SearchBar/SearchBar.vue";
  import RouteButton from "./Buttons/RouteButton.vue";
  import FriendButton from "./Buttons/FriendButton.vue";
  import UserStatus from "./UserStatus/UserStatus.vue";
</script>