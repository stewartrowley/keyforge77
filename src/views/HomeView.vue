<template>
  <div class="home-container">
    <DropDown />
    <Card />
  </div>
</template>
<script>
import DropDown from '../components/DropDown.vue';
import Card from '../components/Card.vue';
import {useCardStore} from '@/stores/cardStore.js'
export default {
  setup () {
    const cardStore = useCardStore();

    return {
      cardStore
    }
  },
  mounted () {
    console.log(this.cardStore.cardsData);
  },
  components: {
    DropDown,
    Card
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
