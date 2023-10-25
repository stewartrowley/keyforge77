<template>
    <div class="search-bar-container">
        <input type="text" class="search-bar"/>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .search-bar {
        width: 400px;
        padding: 1rem 0;
        border: 1px solid black;
        border-radius: 8px;
        font-size: 1rem;
    }
    .search-bar-container {
        margin: 2rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>