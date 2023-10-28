<template>
    <div>
        <h1>Keyforge Card Data</h1>
        <div>
            <CardDropdown :options="getCardTypeOptions" type="cardType" label="Card Type" placeholder="Select Card Type"/>
        </div>

        <CardDropdown v-if="getCardTypeShow" :options="getSetOptions" type="set" label=" Card Set" placeholder="Select Card Set"/>
        <div v-if="getSetHousesSelected != null">
            <div>
                <CardDropdown :options="getSetHouses" type="cardHouse" label="Card House" placeholder="Select Card House"/>
            </div>
            <CardText label="Card Key" type="cardKey"/>
            <CardText label="Card Title" type="cardTitle"/>
            <CardDescription label="Card Description" />
            <div>
                <h1>Bonus Icons</h1>
                <div>
                    <CardNum label="Aember" type="aember" />
                    <CardNum label="Damage" type="damage"/>
                    <CardNum label="Capture" type="capture"/>
                    <CardNum label="Draw Card" type="drawCard"/>
                </div>
            </div>
            <div>
                <CardNum label="Power" type="power"/>
                <CardNum label="Armor" type="armor"/>
            </div>
            <CardRadio :options="getCardRarityoptions" title="Card Rarity" />
            <CardCheckBox :options="getCardEffectOptions" title="Card Effect"/>
        </div>
        <button @click="this.handleCardSubmission">Add Card</button>
    </div>
</template>
<script>
import { useFormStore } from '../../stores/formStore';
import CardDescription from './CardDescription.vue';
import CardDropdown from './CardDropdown.vue';
import CardNum from './CardNum.vue';
import CardRadio from './CardRadio.vue';
import CardText from './CardText.vue';
import CardCheckBox from './CardCheckBox.vue'

export default {
    setup () {
        const formStore = useFormStore();
        return {
            formStore
        }
    },
    computed: {
        getCardTypeShow () {
            return this.formStore.cardTypeShow;
        },
        getSetOptions () {
            return this.formStore.getSetOptions;
        },
        getCardTypeOptions () {
            return this.formStore.getCardTypeOptions;
        },
        getCardEffectOptions () {
            return this.formStore.getCardEffectOptions;
        },
        getCardRarityoptions () {
            return this.formStore.getCardRarityOptions;
        },
        getSetHouses () {
           return this.formStore.setHouses;
        },
        getSetHousesSelected () {
            return this.formStore.setHouses;
        }
    },
    // data() {
    //     return {

    //     };
    // },
    methods: {
        handleCardSubmission () {
            this.formStore.cardSubmission;
        }
    },
    components: { CardDropdown, CardNum, CardRadio, CardDescription, CardText, CardCheckBox }
}
</script>
<style scoped>
    
</style>