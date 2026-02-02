<script setup lang="ts"></script>

<template>
  <div class="container">


    <nav>
      <div class="logo">Gabor Eszaki <span class="text-sm">
          CV-2026
      </span></div>
      <div class="nav-items">
        <router-link class="btn" to="/"> <i class="fa-regular fa-rectangle-list"></i> Summary</router-link>
        <router-link class="btn" to="/about"><i class="fa-solid fa-swatchbook"></i> Skills</router-link>
        <router-link class="btn" to="/about"><i class="fa-solid fa-business-time"></i> Work History</router-link>
        <router-link class="btn high-lite" to="/about"><i class="fa-solid fa-file-pdf"></i> Download </router-link>
      </div>
    </nav>

    <main>
      <router-view/>
    </main>
  </div>

</template>

<style scoped></style>
