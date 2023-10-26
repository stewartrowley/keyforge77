<template>
    <div>
        <div class="house-layout-banner-box" :style="this.handleBackground(houseData)">
            <img :src="houseData.houseIcon" >
            <h1>{{ this.$props.house }}</h1>
        </div>
        <img class="house-layout-banner" :src="getHouseBanner">
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
    props: [
     'house'
    ],
    data() {
        return {
            decks: []
        }
    },
    setup() {
        const deckStore = useDeckStore();
        const houseStore = useHouseStore();
        return {
            deckStore, houseStore
        }
    },
    computed: {
        houseData () {
            let houseData;
            this.houseStore.houses.forEach((item) => {
                if(item.house === this.$props.house) {
                    houseData = item
                }
            })
            return houseData;
        },
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
        },
        handleBackground (houseData) {
            return {
                'background-color': houseData.houseColor
            }
        }
    }
}
</script>
<style scoped>
.house-layout-banner-box {
 display:  flex;
 flex-direction: row;
 align-items: center;
}
.house-layout-banner {
    object-fit: fill;
    width: 50%;
    height: 220px;
}
</style>