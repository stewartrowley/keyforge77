<template>
    <div class="card-description-container">
        <label>{{ this.$props.label }}</label>
        <textarea></textarea>
    </div>
</template>
<script>
export default {
    props: [
        'label'
    ]
}
</script>
<style scoped>
    .card-description-container {
        display: flex;
        flex-direction: column;
    }
</style>