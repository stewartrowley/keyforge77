<template>
  <div>
    <!-- <SearchBar /> -->
    <CardGallery :cards="getCards" />
  </div>
</template>
<script>
import CardGallery from '../components/CardGallery.vue'
// import SearchBar from '../components/SearchBar.vue'
import { useCardStore } from '../stores/cardStore'
import { useDeckStore } from '../stores/deckStore'
export default {
  components: { CardGallery },
  setup() {
    const cardStore = useCardStore()
    const deckStore = useDeckStore()
    return {
      cardStore,
      deckStore
    }
  },
  computed: {
    getCards() {
      console.log(this.deckStore.decks)
      const cardIds = []
      this.deckStore.decks.forEach((card) => {
        cardIds.push(...card.cards)
      })
      let uniqueCards = cardIds.filter((c, index) => {
        return cardIds.indexOf(c) === index
      })
      this.cardStore.cards.forEach((card) => {
        if (uniqueCards.includes(card.key)) {
            card.isOwn = true
        } else {
            card.isOwn = false
        }
      })

      return this.cardStore.cards;
    }
  }
}
</script>
<style scoped></style>
