<template>
    <div class="card-text-container">
        <label>{{ this.$props.label }}</label>
        <input type="text" @change="this.handleText()">
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
        'label',
        'type'
    ],
    methods: {
        handleText() {
            console.log(event.target.value);
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