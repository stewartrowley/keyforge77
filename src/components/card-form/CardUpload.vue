<template>
    <div>
        <form @submit.prevent="this.handleFile()">
            <input type="file" @change="handleUpload($event)">
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
    
</style>