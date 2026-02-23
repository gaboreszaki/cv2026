<script setup lang="ts">

import moment from 'moment'

import {useHistoryStore} from "@/stores/history.ts"

const image_location = "/src/assets/images/workhistory/"

const formatYearsMonths = (from: string, until: string) => {
    const totalMonths = moment(until).diff(moment(from), "months");
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    return `${years} year${years === 1 ? "" : "s"} ${months} month${months === 1 ? "" : "s"}`;
};

const historyStore = useHistoryStore()

// employments = historyStore.employments;

</script>
<template>
    <div class="timeline-card" v-for="job in historyStore.employments " key="employments.id">
        <div class="date">
            <div class="text-rotate-90">
                {{ moment(job.date_from, "YYYY-MM-DD").format("YYYY") }}
            </div>
        </div>
        <div class="card">
            <div class="card-circle-image ">
                <img :src="image_location + job.image" alt="illustration">
            </div>
            <div class="card-body">
                <h2 class="mb-2">{{ job.position }}</h2>
                <h6 class="m-0">{{ job.company_name }}
                    <a v-if="job.company_web_url" :href="job.company_web_url">Website</a>
                    <a v-if="job.company_li_url" :href="job.company_li_url">Linkedin</a>
                </h6>
                <h6 class="m-0">{{ job.company_location }} / {{ job.country }}</h6>
                <div class="text-xs">
                    TOS: {{ formatYearsMonths(job.date_from, job.date_until) }} ( From {{ moment(job.date_from, "YYYY-MM-DD").format("YYYY MMM") }} to {{ moment(job.date_until, "YYYY-MM-DD").format("YYYY MMM") }} )
                </div>
                <div class="my-4">
                    <span v-for="hat in job.hats" class="tag">{{ hat }}</span>
                </div>
                <div class="flex">
                    <div class="flex-half" v-if="job.responsibilities">
                    <span class="text-bold">
                      Responsibilities:
                    </span>
                        <ul>
                            <li v-for="responsibility in job.responsibilities">
                                {{ responsibility }}
                            </li>
                        </ul>
                    </div>
                    <div class="flex-half" v-if="job.highlights && Array.isArray(job.highlights) ">
                    <span class="text-bold">
                        Highlights:
                    </span>
                        <ul>
                            <li v-for="highlight in job.highlights">
                                {{ highlight }}
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="flex justify-evenly  gap-col-2 mt-5">
                    <div class="flex-col flex-quarter sub-card" v-for="stack in job.tech_stack">
                        <span class="text-light  mb-1">
                            {{ stack.name }}
                        </span>
                        <ul class="list">
                            <li class="" v-for="stackItem in stack.items">
                                {{ stackItem }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>