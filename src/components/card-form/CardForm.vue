<template>
    <div>
        <CardDropdown :options="setOptions" type="set"/>
        <CardDropdown :options="cardTypeOptions" type="cardType"/>
        <CardDropdown :options="cardHouseOptions" type="cardHouse"/>
        <CardNum />
        <CardText />
        <CardNum />
        <CardNum />
        <CardNum />
        <CardNum />
        <CardRadio :options="cardRarityOptions" />
        <CardDescription />
        <CardCheckBox :options="cardEffectOptions" />
    </div>
</template>
<script>
import CardDescription from './CardDescription.vue';
import CardDropdown from './CardDropdown.vue';
import CardNum from './CardNum.vue';
import CardRadio from './CardRadio.vue';
import CardText from './CardText.vue';
import CardCheckBox from './CardCheckBox.vue'

export default {
    data() {
        return {
            setOptions: [
                {value: "CotA", name: "Call to The Archons"},
                {value: "AoA", name: "Age of Ascencion"},
                {value: "WC", name: "Worlds Collide"},
                {value: "MM", name: "Mass Mutations"},
                {value: "DT", name: "Dark Tidings"},
                {value: "WoE", name: "Winds of Exchange"}
            ],
            cardTypeOptions: [
                {value: 'action', name: "Action"},
                {value: 'creature', name: "Creature"},
                {value: 'artifact', name: "Artifact"},
                {value: 'upgrade', name: "Upgrade"}
            ],
            cardHouseOptions: [
                {value: 'brobnar', name: 'Brobnar'},
                {value: 'dis', name: 'Dis'},
                {value: 'ekwidon', name: 'Ekwidon'},
                {value: 'logos', name: 'Logos'},
                {value: 'mars', name: 'Mars'},
                {value: 'sanctum', name: 'Sanctum'},
                {value: 'saurian', name: 'Saurian'},
                {value: 'shadows', name: 'Shadows'},
                {value: 'star alliance', name: 'Star Alliance'},
                {value: 'unfathomable', name: 'Unfathomable'},
                {value: 'untamed', name: 'untamed'}
            ],
            cardRarityOptions: [
                {value: 'common', name: "Common"},
                {value: 'uncommon', name: "Uncommon"},
                {value: 'rare', name: "Rare"},
                {value: 'special', name: "Special"}
            ],
            cardEffectOptions: [
                {value: 'neutral', name: "Neutral"},
                {value: 'play', name: "Play"},
                {value: 'action', name: "Action"},
                {value: 'fight', name: "Fight"},
                {value: 'reap', name: "Reap"},
                {value: 'omni', name: "Omni"},
                {value: 'destroyed', name: "Destroyed"},
                {value: 'before fight', name: "Before Fight"},
                {value: 'after Fight', name: "After Fight"},
                {value: 'after reap', name: "After Reap"},
            ]
        };
    },
    components: { CardDropdown, CardNum, CardRadio, CardDescription, CardText, CardCheckBox }
}
</script>
<style scoped>
    
</style>