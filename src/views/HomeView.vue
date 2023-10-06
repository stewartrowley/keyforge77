<template>
  <div class="home-container">
    <DropDown />
  </div>
</template>
<script>
import DropDown from '../components/DropDown.vue';
import {useCardStore} from '@/stores/cardStore.js'
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
