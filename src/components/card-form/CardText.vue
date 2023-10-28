<template>
    <div class="card-text-container">
        <label>{{ this.$props.label }}</label>
        <input type="text" @change="this.handleText()">
    </div>
</template>
<script>
export default {
    props: [
        'label',
        'type'
    ],
    methods: {
        handleText() {
            switch(this.$props.type) {
              case 'cardKey':
                this.formStore.cardKeySelected = event.target.value;
                break;
              case 'cardTitle':
                this.formStore.cardTitleSelected = event.target.value;
                break;
              default:
                // code block
            }
        }
    }
}
</script>
<style scoped>
    .card-text-container {
        display: flex;
        flex-direction: column;
    }
</style>