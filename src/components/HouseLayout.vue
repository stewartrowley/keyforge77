<template>
    <div>
        <img :src="getHouseBanner">
        <h1>{{ this.$props.house }}</h1>
        <div>
            <h3>Decks</h3>
            <!-- <div v-for="deck, index in this.keyforgeHouseDecks()" :key="index">
                <h1>{{ deck.name }}</h1>
            </div> -->
        </div>
        <div>Pods</div>
        <div>Cards</div>
    </div>
</template>
<script>
import { useDeckStore } from '../stores/deckStore';
import { useHouseStore } from '../stores/houseStore';

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
        const houseStore = useHouseStore();
        return {
            deckStore, houseStore
        }
    },
    computed: {
        getHouseBanner () {
            let url;
            console.log(this.houseStore.getHouses)
            this.houseStore.getHouses.forEach((item) => {
                if (this.$props.house === item.house) {
                    url = item.houseBanner;
                }
            })
            return url
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