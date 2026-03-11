<script setup lang="ts">
import NavBar from "@/NavBar.vue";
import FooterView from "@/FooterView.vue";
</script>

<template>
    <div class="container">
        <nav-bar/>

        <main>
            <router-view/>
        </main>


    </div>
    <footer-view />

</template>

<style scoped></style>
