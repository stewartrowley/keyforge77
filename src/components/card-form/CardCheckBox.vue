<template>
    <div>
        <h1>{{ this.$props.title }}</h1>
        <div class="card-check-box">
            <div class="card-check-box-details" v-for="item, index in this.$props.options" :key="index">
                <input class="card-check-box-input" type="checkbox" name="effect" :id="item.value" :value="item.value" >
                <label class="card-check-box-label" :for="item.value">{{ item.name }}</label>
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
    .card-check-box {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    .card-check-box-details {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .card-check-box-label {
        cursor: pointer;
        padding-left: 5px;
    }
     .card-check-box-input {
        cursor: pointer;
    }
</style>