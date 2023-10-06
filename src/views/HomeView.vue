<template>
  <div class="home-container">
    <DropDown />
    <DeckLayout />
    <!-- <img src="../assets/keyforge-cards/age-of-ascension/dust_imp.png" /> -->
  </div>
</template>
<script>
import DropDown from '../components/DropDown.vue';
import {useCardStore} from '@/stores/cardStore.js'
import DeckLayout from '../components/DeckLayout.vue';
export default {
  setup () {
    const cardStore = useCardStore();

    return {
      cardStore
    }
  },
  mounted () {
    console.log(this.cardStore.AoACards);
  },
  components: {
    DropDown,
    DeckLayout
}
}
</script>
<style scoped>
  .home-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
