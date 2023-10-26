<template>
    <div v-for="item, index in this.$props.options" :key="index">
        <label :for="item.value">{{ item.name }}</label>
        <input type="radio" name="rarity" :id="item.value" :value="item.value" >
    </div>
</template>
<script>
export default {
    props: [
        'options'
    ]
}
</script>
<style scoped>
    
</style>