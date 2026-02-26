<script setup lang="ts">
import SkillItem from "@/components/SkillItem.vue";
import {useSkillStore} from "@/stores/skill.ts"
import StatCard from "@/components/StatCard.vue";

const skillStore = useSkillStore()
let skills = skillStore.skills.sort((a,b) => a.order - b.order);


</script>

<template>
    <!-- container-->
    <div class="grid grid-5 text-capitalize mb-2">
        <stat-card title="BackEnd" :progress="10"/>
        <stat-card title="FrontEnd" :progress="6"/>
        <stat-card title="DevOps" :progress="7"/>
        <stat-card title="Architect" :progress="8"/>
        <stat-card title="management" :progress="8"/>
    </div>

    <div class="grid grid-3 mb-5">
        <!--  prototype-->

        <div class="card" :class="skill.class" v-for="skill in skills">
            <div class="card-body">
                <h4 class="mb-3">{{ skill.title }}</h4>
                <skill-item :class="skill.class" :skill="skill" />
            </div>
        </div>

    </div>
</template>

<style scoped>

</style>