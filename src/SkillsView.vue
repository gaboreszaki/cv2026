<script setup lang="ts">
import {useSkillStore} from "@/stores/skill.ts"
import Progressbar from "@/components/Progressbar.vue";
import moment from 'moment'

const skillStore = useSkillStore()
</script>

<template>
    <!-- container-->
    <div class="flex gap-col-2">
        <!--  prototype-->
        <div class="flex-half flex-wa" v-for="skill in skillStore.skills">
            <div class="card">
                <div class="card-body">
                    <h4>{{ skill.title }}</h4>
                    <div class=" dotted-border-t py-3 my-1" v-if="skill.note">
                        <ul class="list" v-if="Array.isArray( skill.note )">
                            <li class="text-muted text-italic" v-for="item in skill.note">{{ item }}</li>
                        </ul>
                        <p v-else>
                            {{skill.note}}
                        </p>
                    </div>
                    <h5 class="mb-2" v-if="skill.sub_title" >{{ skill.sub_title }}:</h5>
                    <div class="flex justify-between dotted-border-t py-2" v-for="item in skill.data">
                        <div class="flex align-center">
                            <i v-if="item.icon" class="text-xl" :class="item.icon"></i>
                            <div class="ms-2 text-sm ">
                                <span class="text-capitalize">
                                    {{ item.name }}
                                </span><br>
                                {{ item.versions }}
                            </div>
                        </div>
                        <div class="flex-col flex-third">
                            <div class="" v-if="item.knowledge_level">
                                <Progressbar :progress="item.knowledge_level" :class="item.date_ended ? 'inactive': '' "/>
                            </div>
                            <div class="text-sm text-center">
                                {{ item.date_ended ? moment(item.date_ended, "YYYY").diff(moment(item.date_started, "YYYY"), "years") : moment().diff(moment(item.date_started, "YYYY"), "years") }}
                                year(s)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>