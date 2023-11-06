<template>
  <div class="home-container">
    <CardForm />
  </div>
</template>
<script>
import {useCardStore} from '@/stores/cardStore.js'
import CardForm from '../components/card-form/CardForm.vue';
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
    CardForm,
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
