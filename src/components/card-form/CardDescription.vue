<template>
    <div class="card-description-container">
        <label>{{ this.$props.label }}</label>
        <textarea @change="this.handleTextDescription()"></textarea>
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
        'label'
    ],
    methods: {
        handleTextDescription () {
            this.formStore.cardDescription = event.target.value;
        }
    }

}
</script>
<style scoped>
    .card-description-container {
        display: flex;
        flex-direction: column;
    }
</style>