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
        <div class="flex-half" v-for="skill in skillStore.skills">
            <div class="card">
                <div class="card-body">
                    <h4>{{ skill.title }}</h4>

                    <div class=" dotted-border-t py-3 my-1">

                        <ul class="list">
                            <li class="text-muted text-italic" v-for="item in skill.note">{{ item }}</li>
                        </ul>
                    </div>

                    <div class="flex justify-between dotted-border-t py-2" v-for="item in skill.data">

                        <div class="flex align-center">
                            <i v-if="item.icon" class="text-xl" :class="item.icon"></i>

                            <div class="ms-2 text-sm text-capitalize">
                                {{ item.name }}
                                {{item.versions}}
                            </div>
                        </div>

                        <div class="flex-col flex-third">
                            <div class="" v-if="item.knowledge_level">
                                <Progressbar :progress="item.knowledge_level * 2"/>
                            </div>

                            <div class="text-sm text-center">
                                {{ item.date_ended ? moment(item.date_ended, "YYYY").diff(moment(item.date_started, "YYYY"), "years") : moment().diff(moment(item.date_started, "YYYY"), "years") }}
                                year(s)
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <!-- prototype:data item-->


        </div>

    </div>

</template>

<style scoped>

</style>