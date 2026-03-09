<script setup lang="ts">

</script>

<template>
    <div class="logo display-only-print text-center"  >
        <img src="/src/assets/images/cv-logo.svg" alt="logo"  height="20" class="logo-image "/>
        <span class="text-lg text-bold"> Gabor Eszaki </span>
    </div>

    <nav class="display-only-screen">
        <div class="nav-items-left">
            <router-link class="btn" to="/"> Summary</router-link>
            <router-link class="btn" to="/skills"> Skills</router-link>
            <router-link class="btn" to="/history">  Work History</router-link>
        </div>
        <div class="logo"  >
            <img src="/src/assets/images/cv-logo.svg" alt="logo"  height="20" class="logo-image "/>
            <span class="text-lg text-bold"> Gabor Eszaki </span>
        </div>
        <div class="nav-items-right">
            <router-link class="btn btn-highlight" disabled to="/download">Contact & Download</router-link>
        </div>

    </nav>

</template>

<style scoped>

</style>