
<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route =useRoute();
onMounted(()=>{
    console.log(route.params.id);
})
</script>
<template>

    <h1>blog</h1>
    <h2>{{ route.params }}</h2>
</template>