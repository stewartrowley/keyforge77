<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useCardStore } from './stores/cardStore';
import { useDeckStore } from './stores/deckStore';
import { useSetStore } from './stores/setStore';
const deckStore = useDeckStore();
const cardStore = useCardStore();
const setStore = useSetStore();
cardStore.setCards();
deckStore.setDecks();
setStore.setHouses();

</script>

<template>
  <header>
    <div class="nav-container">
      <div class="nav-logo-box">
        <img class="nav-logo" src="./assets/keyforge-cards/keychart-logo.png" />
        <h1 class="nav-logo-text">KeyChart</h1>
      </div>
      <div>
          <img src="./assets/keyforge-logos/keyforge_banner-tight.jpg" class="logo-banner" />
        </div>
      <nav class="nav-box">
        <RouterLink class="nav-link" to="/">Home</RouterLink>
        <RouterLink class="nav-link" to="/decks">Decks</RouterLink>
        <RouterLink class="nav-link" to="/pods">Pods</RouterLink>
        <RouterLink class="nav-link" to="/cards">Cards</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
.logo-banner {
  width: 100%;
  height: 100%;
}
.nav-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
  justify-content: center;
  background-color: black;
  padding: 1rem;
}
.nav-box {
  display: flex;
  flex-direction: row;
  justify-self: flex-end;
  /* justify-content: space-between; */
}
.nav-logo-box {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-self: flex-start;
  /* justify-content: space-evenly; */
}
.nav-logo-text {
  padding-left: 1rem;
  font-family: 'Dancing Script', cursive;
  font-size: 60px;
  font-weight: 700;
  color: #fed73b;
}
.nav-logo {
  width: 20%;
}
.nav-link {
  color: #FFFFFF;
  padding: 1rem 1rem;
}
.nav-link:hover {
  background-color: #FFFFFF;
  color: navy;
}
</style>
