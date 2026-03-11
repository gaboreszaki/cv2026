<script setup lang="ts">
import {computed, ref} from 'vue'

const props = defineProps<{
    title: string
    text: string
    type?: 'email' | 'phone' | 'link'
    icon?: string
}>()

const isRevealed = ref(false)

function decodeBase64(value: string): string {
    try {
        return atob(value)
    } catch {
        return value
    }
}

function revealText() {
    isRevealed.value = true
}

const revealedText = computed(() => {
    return isRevealed.value ? decodeBase64(props.text) : ''
})
</script>

<template>



        <div class=" sub-card text-center">
            <span class="">
                <font-awesome-icon :icon="icon" :alt="title" v-if="icon"/>
                <span v-else>{{ title }}: </span>
            </span>
            <span class="text-bold" v-if="!type">{{ text }}</span>
            <span class="text-bold" v-else-if="type === 'email' || type === 'phone'">
                <a v-if="!isRevealed" class="btn" type="button" @click="revealText"> Click to Reveal</a>
                <span v-else class="text-bold">
                    <a :href="'mailto:' + revealedText" v-if="type === 'email'">{{ revealedText }}</a>
                    <a :href="'tel:' + revealedText" v-if="type === 'phone'">{{ revealedText }}</a>
                </span>
            </span>
            <span class="text-bold" v-else-if="type === 'link'">
                <a :href="text" target="_blank">{{title}} <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square" /> </a>
            </span>

        </div>


</template>

<style scoped>

</style>