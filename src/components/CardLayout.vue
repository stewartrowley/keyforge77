<template>
   <div class="card-container">
      <div v-for="card, index in items" :key="index">
         <img class="card-image" :src="card.imageUri" />
         <h1>{{ card.title }}</h1>
         <h3>{{ card.house }}</h3>
         <!-- <img class="card-house-icon" :src="card.houseIcon" /> -->
         <p>Rarity: {{ card.rarity }}</p>
         <p>Card Type: {{ this.getCardType(card.type) }}</p>
      </div>
   </div>
</template>
<script>
import { useCardStore } from '../stores/cardStore';

export default {
   setup () {
      const cardStore = useCardStore();
      return {
         cardStore
      }
   },
   props: [
    "cards"
   ],
   computed: {
      items() {
         console.log(this.$props.cards)
         return this.$props.cards;
      }
   },
   methods: {
      getCardType (type) {
         return this.cardStore.getCardType(type);
      }
   }
}
</script>
<style scoped>
   .card-container {
      padding: 3rem;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      align-items: center;
      justify-content: center;
   }

   .card-image {
      width: 50%;
   }
   .card-house-icon {
      width: 25%;
   }
</style>