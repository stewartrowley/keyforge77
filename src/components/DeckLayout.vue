<template>
    <div>
        <div class="deck-layout-deck">
            <h1 class="deck-layout-name">{{ deckStore.decks[0].name }}</h1>
            <div class="deck-layout-icons">
                <div class="deck-icon-box" v-for="house, index in deckStore.decks[0].houses" :key="index" :style="this.handleBackground(house)">
                    <img class="deck-icon" :src="this.getHouseIcon(house)" />
                    <h3>{{ house }}</h3>
                </div>
            </div>
        </div>
        <CardLayout v-show="this.cardData != null" :cards="this.getCards()" />
    </div>
</template>
<script>
import { useDeckStore } from '../stores/deckStore';
import { useCardStore } from '../stores/cardStore';
import { useSetStore } from '../stores/setStore';
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
        },
        getHouseIcon (house) {
            let houseIcon;
            this.setStore.houses.forEach((element) => {
                if (element.house === house) {
                    houseIcon = element.houseIcon;
                }
            })
            return houseIcon;
        },
        handleBackground(item) {
            console.log(item)
            let houseColor;
            this.setStore.houses.forEach((element) => {
                if (element.house === item) {
                    houseColor = element.houseColor;
                }
            })
            return {
                'background-color': houseColor
            }
        }
    },
    setup () {
        const deckStore = useDeckStore();
        const cardStore = useCardStore();
        const setStore = useSetStore();
        return {
            deckStore,
            cardStore,
            setStore
        }
    },
    components: {CardLayout}

}
</script>
<style scoped>
.deck-layout-deck {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 2rem;
    border: 1px solid black;

}
.deck-layout-icons {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}
.deck-icon-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
}
.deck-icon {
    width: 80px;
    height: 80px;
}
    .deck-layout-name {
        text-align: center;
        padding-top: 2rem;
    }
</style>