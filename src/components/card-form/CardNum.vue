<template>
    <div class="card-num-container">
        <label>{{ this.$props.label }}</label>
        <input type="number" @change="this.handleNum($event)">
    </div>
</template>
<script>
export default {
    props: [
        'label',
        'type'
    ],
    methods: {
        handleNum (event) {
            console.log(event.target.value);
            switch(this.$props.type) {
              case 'aember':
                this.formStore.C = event.target.value;
                break;
              case 'damage':
                this.formStore.damageSelected = event.target.value;
                break;
              case 'capture': 
                this.formStore.captureSelected = event.target.value;
                break;
              case 'drawCard': 
                this.formStore.drawCardSelected = event.target.value;
                break;
              case 'power': 
                this.formStore.powerSelected = event.target.value;
                break;
              case 'armor': 
                this.formStore.armorSelected = event.target.value;
                break;
              default:
                // code block
            }
        }
    }
}
</script>
<style scoped>
    .card-num-container {
        display: flex;
        flex-direction: column;
    }
</style>