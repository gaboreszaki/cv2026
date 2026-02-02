<script setup lang="ts">
import { reactive, computed } from 'vue'

const props = defineProps({
  title: String,
  progress: Number
})

const stat = reactive({
  title: props.title,
  progress: props.progress
})

const percent = computed(()=>{
  return stat.progress ? "width: " + stat.progress * 10 + "%" : 'width:  0%'
})

// let progressPercent:string = 'width:' + props.progress * 10 +'%'

</script>

<template>
  <div class="stat"  data-value="A1">
    <div class="stat-title">
      {{ title }}
    </div>
    <div class="progressbar">
      <span :style="percent">&nbsp;</span></div>
  </div>
</template>

<style scoped>

</style>