<template>
    <div>
        <h1>{{ this.$props.title }}</h1>
        <div class="card-radio-box">
            <div class="card-radio-box-details" v-for="item, index in this.$props.options" :key="index">
                <input class="card-radio-input" type="radio" name="rarity" :id="item.value" @click="this.handleValue()" :value="item.value" required>
                <label class="card-radio-label" :for="item.value">{{ item.name }}</label>
            </div>
        </div>
    </div>
</template>
<script>
import { useFormStore } from '../../stores/formStore';

export default {
    setup () {
        const formStore = useFormStore();
        return {
            formStore
        }
    },
    props: [
        'options',
        'title',
        'type'
    ],
    methods: {
        handleValue () {
            if(this.$props.type === 'rarity') {
                console.log(event.target.value)
                this.formStore.cardRaritySelected = event.target.value; 
            }
        }
    }
}
</script>
<style scoped>
    .card-radio-box {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .card-radio-label {
        padding-left: 5px;
        cursor: pointer;
    }
    .card-radio-box-details {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .card-radio-input {
        cursor: pointer;
    }
</style>