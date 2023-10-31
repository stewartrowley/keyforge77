<template>
    <div>
        <h3>Card Image</h3>
        <form @submit.prevent="this.handleFile()">
            <input class="card-upload-btn" type="file" @change="handleUpload($event)">
        </form>
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
    methods: {
        handleFile() {
            console.log(FormData);
        },
        handleUpload (event) {
            console.log(event.target.files)
            this.formStore.imageSelected = event.target.files;

        }
    }
}
</script>
<style>
    .card-upload-btn {
        background-color: forestgreen;
        color: white;
        border: none;
        padding: 1rem;
        cursor: pointer;
    }
</style>