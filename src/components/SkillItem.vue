<script setup lang="ts">

import Progressbar from "@/components/Progressbar.vue";
import moment from 'moment'
import type {SkillGroup, SkillItemData} from '@/interfaces/Skill'

defineProps<{
    skill: SkillGroup
}>()

</script>

<template>
    <div class="" :class="skill.class" >

        <div class="flex justify-between py-2 dotted-border-t" v-for="item in (skill.data as SkillItemData[])" v-if="skill.data_type === 'object'">
            <!-- Icon & Text -->
            <div class="flex">
                <div style="width: 40px">
                    <i v-if="item.icon" class="text-xl" :class="item.icon"></i>
                </div>
                <div class="ms-2 text-sm ">
                    <div class="text-capitalize">{{ item.name }}</div>
                    <div class="" v-if="item.versions">{{ item.versions }}</div>
                </div>
            </div>
            <!-- Progressbar -->
            <div class="" style="width: 30%">
                <div class="" v-if="item.knowledge_level">
                    <Progressbar :progress="item.knowledge_level" :class="item.date_ended || !item.date_started ? 'inactive': '' "/>
                </div>
                <div class="text-sm text-center" v-if="item.date_started">
                    {{ item.date_ended ? moment(item.date_ended, "YYYY").diff(moment(item.date_started, "YYYY"), "years") : moment().diff(moment(item.date_started, "YYYY"), "years") }}
                    year(s)
                </div>
            </div>

        </div>

        <div class="" v-if="skill.data_type === 'array'">
                <ul class="list ">
                    <li class="pb-1" v-for="item in (skill.data as string[])">{{ item }}</li>
                </ul>
        </div>

    </div>

</template>

<style scoped>

</style>