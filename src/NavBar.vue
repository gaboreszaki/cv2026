<script setup lang="ts">

</script>

<template>

    <nav>

        <div class="nav-items-left">
            <router-link class="btn" to="/"> Summary</router-link>
            <router-link class="btn" to="/skills"> Skills</router-link>
            <router-link class="btn" to="/history">  Work History</router-link>

        </div>
        <div class="logo"  >
            <img src="/src/assets/images/cv-logo.svg" alt="logo"  height="20" class="inline-block"/>
            <span class="text-lg text-bold"> Gabor Eszaki </span>
        </div>
        <div class="nav-items-right">
            <router-link class="btn high-lite" to="/download"><i class="fa-solid fa-file-pdf"></i> Download</router-link>
        </div>

    </nav>

    <!--    <nav class="grid grid-6">-->
    <!--        <div class="logo ">Gabor Eszaki <span class="text-sm "> CV-2026 </span> </div>-->
    <!--        <div class="grid-col-span-4 text-center">-->
    <!--            <div class="nav-items">-->
    <!--                <router-link class="btn" to="/"><i class="fa-regular fa-rectangle-list"></i> Summary</router-link>-->
    <!--                <router-link class="btn" to="/skills"><i class="fa-solid fa-swatchbook"></i> Skills</router-link>-->
    <!--                <router-link class="btn" to="/history"><i class="fa-solid fa-business-time"></i> Work History</router-link>-->

    <!--            </div>-->
    <!--        </div>-->
    <!--        <div class="text-right">-->
    <!--            <router-link class="btn high-lite" to="/download"><i class="fa-solid fa-file-pdf"></i> Download</router-link>-->
    <!--        </div>-->
    <!--    </nav>-->
</template>

<style scoped>

</style>