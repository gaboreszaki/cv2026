<script setup lang="ts">


import {useHistoryStore} from "@/stores/history.ts";
import em = CSS.em;


const historyStore = useHistoryStore()

// employments = historyStore.employments;

</script>
<template>
  <div class="timeline-card" v-for="job in historyStore.employments " key="employments.id">

    <div class="date">
      {{job.date_from}}
    </div>
    <div class="card">
      <div class="image">
        <img :src="job.image" alt="illustration">
      </div>
      <div class="card-body">
        <h2 class="mb-2">{{job.position}}</h2>
        <h6 class="m-0">{{job.company_name}} <a v-if="job.company_web_url" href="{{job.company_web_url}}">Website</a> <a v-if="job.company_web_url" href="{{job.company_web_url}}">Linkedin</a></h6>
        <h6 class="m-0">{{job.company_location}} / {{job.country}}</h6>

        <div class="my-4">

          <span v-for="hat in job.hats" class="tag">{{hat}}</span>

        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloribus dolorum earum facere, in inventore labore libero modi quis rem temporibus voluptas voluptatibus voluptatum! Culpa enim natus quas reiciendis reprehenderit!</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloribus dolorum earum facere, in inventore labore libero modi quis rem temporibus voluptas voluptatibus voluptatum! Culpa enim natus quas reiciendis reprehenderit!</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloribus dolorum earum facere, in inventore labore libero modi quis rem temporibus voluptas voluptatibus voluptatum! Culpa enim natus quas reiciendis reprehenderit!</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta doloribus dolorum earum facere, in inventore labore libero modi quis rem temporibus voluptas voluptatibus voluptatum! Culpa enim natus quas reiciendis reprehenderit!</p>

      </div>
    </div>

  </div>
</template>