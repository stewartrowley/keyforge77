<template>
    <div>
        <h1>{{ this.$props.house }}</h1>
        <div>
            <h3>Decks</h3>
            <div v-for="deck, index in this.keyforgeHouseDecks()" :key="index">
                <h1>{{ deck.name }}</h1>
            </div>
        </div>
        <div>Pods</div>
        <div>Cards</div>
    </div>
</template>
<script>
import { useDeckStore } from '../stores/deckStore';

export default {
    data() {
        return {
            decks: []
        }
    },
    props: [
     'house'
    ],
    setup() {
        const deckStore = useDeckStore();
        return {
            deckStore
        }
    },
    methods: {
        keyforgeHouseDecks ()  {
            this.decks.pop();
            this.deckStore.decks.forEach((item) => {
                if(item.houses.includes(this.$props.house)) {
                    this.decks.push(item);
                }
            })
            return this.decks
        }
    }
}
</script>
<style scoped>
    
</style>