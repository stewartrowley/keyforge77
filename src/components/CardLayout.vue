<template>
   <div class="card-container">
      <div class="card-box" v-for="card, index in items" :key="index">
         <div>
            <img class="card-image" :src="card.imageUri" />
         </div>
         <div class="card-text">
            <h1 class="card-layout-title">{{ card.title }}</h1>
            <h3>{{ card.house }}</h3>
            <!-- <img class="card-house-icon" :src="card.houseIcon" /> -->
            <p>Rarity: {{ card.rarity }}</p>
            <p>Card Type: {{ this.getCardType(card.type) }}</p>
         </div>
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
      },
      // getImage(image) {
      //    const parseImage = JSON.stringify(image)
      //    console.log(parseImage);
      //    return parseImage;
      // }
   }
}
</script>
<style scoped>
   .card-container {
      margin: 2rem 2rem;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
      align-items: center;
      justify-content: center;
      gap: 10px;
   }
   .card-box {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-evenly;
   }
.card-layout-title {
   font-size: 20px;
   font-weight: 700;
}
   .card-text {
      font-size: 15px;
   }

   .card-image {
      width: 100%;
   }
   .card-house-icon {
      width: 25%;
   }
</style>