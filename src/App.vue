<script setup lang="ts">
import NavBar from "@/NavBar.vue";
</script>

<template>
    <div class="container">
        <nav-bar/>

        <main>
            <router-view/>
        </main>
    </div>

</template>

<style scoped></style>
