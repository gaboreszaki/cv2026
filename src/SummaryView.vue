<script setup lang="ts">
import StatCard from "@/components/StatCard.vue";
</script>

<template>
  <div class="pop-in">


  <div class="hero text-capitalize ">
    <h1>A reliable software engineer with 25+ years of experience</h1>
    <ul class="pulse">
      <li class="tag ">Chief Technology Officer</li>
      <li class="tag">Lead & Senior Software Engineer</li>
      <li class="tag">DevOp and Cloud Engineer</li>
      <li class="tag">Infrastructure Architect</li>
      <li class="tag">Web & WebApp developer</li>
      <li class="tag">Scrum Master</li>
    </ul>
  </div>

  <div class="stats holder text-xxl">
    <i class="fa-brands fa-laravel"></i>
    <i class="fa-brands fa-php"></i>
    <i class="fa-brands fa-vuejs"></i>
    <i class="fa-brands fa-square-js"></i>
    <i class="fa-brands fa-python"></i>

    <i class="fa-brands fa-docker"></i>
    <i class="fa-brands fa-git-alt"></i>
    <i class="fa-brands fa-github"></i>
    <i class="fa-brands fa-digital-ocean"></i>
    <i class="fa-brands fa-aws"></i>
    <i class="fa-brands fa-jira"></i>
  </div>

  <div class="text-center my-10">
    <h3>I specialize in building High-Impact and Enterprise-Grade Web Apps.</h3>

    <p>My career is defined by a transition from deep technical craftsmanship to strategic leadership,<br>
      where I have successfully mentored engineering teams and driven technological innovation across international borders.</p>

    <p>
      I am currently seeking new challenges in <strong class="text-info">Ireland</strong> or the <strong class="text-info">Netherlands</strong>,<br>
      bringing a proven track record of delivering stable,
      high-quality software solutions. </p>

    <div class="hero ">
      <ul>
        <li class="tag ">Available to Start</li>
        <li class="tag ">Ready to Relocate</li>
        <li class="tag">Citizen of EU</li>
      </ul>
    </div>

  </div>
  </div>
  <div class="card mb-5 pop-in">
    <div class="card-body text-center">


      <p class="mb-5">
          <span class="text-lg">
              My approach to software development
           is backed by a quarter-century of technical evolution </span><br>
        from selling my first Flash-based projects in 2001 to architecting modern, enterprise-grade microservice ecosystems today. </p>

      <div class="stats text-capitalize">
        <stat-card title="BackEnd" :progress="10"/>
        <stat-card title="FrontEnd" :progress="6"/>
        <stat-card title="DevOps" :progress="8"/>
        <stat-card title="Architect" :progress="7"/>
        <stat-card title="management" :progress="8"/>
      </div>

    </div>
  </div>


  <div class="card mb-5 pop-in">
    <div class="card-body">
      <h3>Technical integrity over shortcuts.</h3>
      <p>
        In an industry increasingly saturated with automated, low-quality output,
        I provide expert-level engineering rooted in rigorous standards and logical precision.
        My approach to software development is grounded in several core pillars: </p>
      <ul>
        <li><strong>Reliability:</strong> A commitment to <strong>Test-Driven Development (TDD)</strong> and <strong>PHPUnit</strong> to deliver stable, production-ready code.</li>

        <li><strong>Performance-Driven PHP:</strong> Over 22 years of expertise in <strong>PHP (v5.6–8.5)</strong>,<br>
          with a focus on high-performance applications utilizing <strong>Laravel</strong> and <strong>Microservice Architecture</strong>.
        </li>

        <li><strong>Strict Adherence to Standards:</strong> Implementation of <strong>PSR-12</strong> coding standards and <strong>Object-Oriented Programming (OOP)</strong>.</li>

        <li><strong>Architectural Excellence:</strong> Mastery of <strong>SOLID</strong> principles (SRP, OCP), <strong>DRY</strong> (Don't Repeat Yourself), and <strong>KISS</strong> (Keep It Simple Silly) to ensure long-term maintainability.</li>
      </ul>
    </div>
  </div>

  <div class="card mb-10 pop-in">
    <div class="card-body">
      <h3>Beyond the codebase...</h3>
      <h5>My objective is to build the foundations that allow enterprises to thrive!</h5>

      <p>
        I bridge the gap between application logic and customer requirements,
        ensuring that every line of code serves a clear strategic purpose and every system is built to endure. </p>


    </div>
  </div>

</template>