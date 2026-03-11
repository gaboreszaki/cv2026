<script setup lang="ts">

import InfoDiv from "@/components/InfoDiv.vue";
</script>

<template>
    <div class="footer">

        <div class="container">
            <h5 class="mb-2"> Contact Info &amp; links: </h5>
            <div class=" grid grid-5 text-sm">
                <info-div title="Name" text="Gabor Eszaki" icon="fa-solid fa-user"/>
                <info-div title="Email" text="bXIuZ2Fib3IuZXN6YWtpQGdtYWlsLmNvbQ==" type="email" icon="fa-solid fa-at"/>
                <info-div title="Phone" text="KzM1MyA4MyAzNTIgMjAgMzY=" type="phone" icon="fa-solid fa-phone"/>
                <info-div title="Current location" text="Hungary" icon="fa-solid fa-location-dot"/>
                <info-div title="Visa" text="EU Citizen" icon="fa-solid fa-passport"/>
                <info-div title="GitHub" text="https://github.com/gaboreszaki/" type="link" icon="fa-brands fa-github"/>
                <info-div title="Gist" text="https://gist.github.com/gaboreszaki" type="link" icon="fa-brands fa-github-alt"/>
                <info-div title="Linkedin" text="https://www.linkedin.com/in/gaboreszaki/" type="link" icon="fa-brands fa-linkedin"/>
                <div class="grid grid-col-span-2 text-center align-center">
                    <!--            <h3> Download CV </h3>-->
                    <a href="" class="btn btn-primary round-10 px-5 py-2">
                        <font-awesome-icon icon="fa-solid fa-download"/>
                        Download as PDF
                    </a>
                </div>
            </div>

            <div class="grid gap-2 mt-3">
                <div class="sub-card text-center text-muted ">
                    This site dont use any cookies, we dont share any data with any third party. <br>
                    No CSS framework was used. This website and it's css framework was created from scratch. <br>
                    The <a href="https://github.com/gaboreszaki/cv2026" target="_blank">sourcecode of this website</a> is public under Apache License 2.0
                </div>
                <div class="text-center align-center">
                    <span class="text-muted">  Website last updated: </span> 2026-03-11 | <span class="text-muted">
                        Data last updated:
                    </span> 2026-03-11
                </div>
            </div>


        </div>
    </div>
</template>
