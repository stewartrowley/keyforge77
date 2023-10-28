<template>
    <div>
        <h1>{{ this.$props.title }}</h1>
        <div class="card-radio-box">
            <div class="card-radio-box-details" v-for="item, index in this.$props.options" :key="index">
                <input class="card-radio-input" type="radio" name="rarity" :id="item.value" :value="item.value" >
                <label class="card-radio-label" :for="item.value">{{ item.name }}</label>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: [
        'options',
        'title'
    ]
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