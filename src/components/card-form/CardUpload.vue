<template>
    <div>
        <form @submit.prevent="this.handleFile()">
            <input type="file" @change="handleUpload($event)">
            <button type="submit">Submit</button>
        </form>
    </div>
</template>
<script>
export default {
    methods: {
        handleFile() {
            console.log(FormData);
        },
        handleUpload (event) {
            console.log(event.target.files)

        }
    }
}
</script>
<style>
    
</style>