<template>
    <div>
        <CardLayout v-show="this.cardData != null" :cards="this.getCards()" />
    </div>
</template>
<script>
import { useDeckStore } from '../stores/deckStore';
import { useCardStore } from '../stores/cardStore';
import CardLayout from './CardLayout.vue';

export default {
    data() {
        return {
            cardData: null
        }
    },
    methods: {
        getCards() {
            this.cardData = [];
            console.log(this.deckStore.decks[0].cards)
            this.deckStore.decks[0].cards.forEach((key) => {
                const deckCard = this.cardStore.cards.find((card) => card.key === key);
                if(deckCard != undefined) {
                    this.cardData.push(deckCard)
                }
                console.log(this.cardData)
            })
            return this.cardData;
        }
    },
    setup () {
        const deckStore = useDeckStore();
        const cardStore = useCardStore();
        return {
            deckStore,
            cardStore
        }
    },
    components: {CardLayout}

}
</script>
<style scoped>
    
</style>