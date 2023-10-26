<template>
    <div>
        <input type="number" @change="this.handleNum()">
    </div>
</template>
<script>
export default {
    methods: {
        handleNum () {
            console.log(event.target.value);
        }
    }
}
</script>
<style scoped>
    
</style>