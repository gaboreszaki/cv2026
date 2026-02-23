<script setup lang="ts">
import { reactive, computed } from 'vue'

const props = defineProps({
    progress: Number
})

const stat = reactive({
    progress: props.progress
})

const percent = computed(()=>{
    return stat.progress ? "width: " + stat.progress * 10 + "%" : 'width:  0%'
})
</script>

<template>
    <div class="progressbar">
        <span :style="percent" >&nbsp;</span>
    </div>
</template>

<style scoped>

</style>