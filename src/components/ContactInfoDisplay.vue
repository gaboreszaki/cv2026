<script setup lang="ts">

let original_phone = "KzM1MzgzMzUyMjAzNg=="
let original_email = "bXIuZ2Fib3IuZXN6YWtpQGdtYWlsLmNvbQ=="


//
// let decodedEmail = atob(original_email)
// let decodedPhone = atob(original_phone)

function decode(str: string) {
    return atob(str)
}

</script>

<template>

    <div class="">
        {{ decode(original_email)}}
    </div>

    <div class="">
        {{ decode(original_phone)}}
    </div>

</template>

<style scoped>

</style>