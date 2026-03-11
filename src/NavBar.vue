<script setup lang="ts">

</script>

<template>
    <div class="logo display-only-print text-center"  >
        <a href="/" >
        <img src="/src/assets/images/cv-logo.svg" alt="logo"  height="20" class="logo-image "/>
        <span class="text-lg text-bold"> Gabor Eszaki </span>
        </a>
    </div>

    <nav class="display-only-screen">
        <div class="nav-items-left">
            <router-link class="btn" to="/"> Summary</router-link>

        </div>
        <div class="logo"  >
            <img src="/src/assets/images/cv-logo.svg" alt="logo"  height="20" class="logo-image "/>
            <span class="text-lg text-bold"> Gabor Eszaki </span>
        </div>
        <div class="nav-items-right">
            <router-link class="btn" to="/skills"> Skills</router-link>
            <router-link class="btn" to="/history">  Work History</router-link>
        </div>

    </nav>

</template>

<style scoped>

</style>