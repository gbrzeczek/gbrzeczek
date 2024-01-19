<script setup lang="ts">
import LinkSymbol from '@/components/LinkSymbol.vue'
</script>

<template>
  <section>
    <h2>
      Personal website -
      <a class="accent" href="https://github.com/gbrzeczek/gbrzeczek.github.io" target="_blank"
        ><LinkSymbol :icon-size="24" />GitHub</a
      >
    </h2>
    <p>
      This simple <span class="accent">personal website</span> was created partly as a way to get
      myself out there, and partly as a way to learn the basics of <span class="accent">Vue</span>.
      It's a single-page application with a few components, deployed on
      <span class="accent">Github Pages</span>.
    </p>
  </section>
  <section>
    <h2>
      Trip Planner - in progress -
      <a class="accent" href="https://github.com/gbrzeczek/travel-planner" target="_blank"
        ><LinkSymbol :icon-size="24" />GitHub</a
      >
    </h2>
    <p>
      A project I'm currently working on - a web application for
      <span class="accent">planning trips</span>. It will allow the user to plan the spots to visit,
      routes and accommodation. The app is based on a <span class="accent">.NET</span> web API and
      an <span class="accent">Angular</span> frontend with Tailwind CSS.
    </p>
  </section>
  <section>
    <h2>Video converters</h2>
    <p>
      A set of applications, converting the company's internal file format containing
      <span class="accent">binary data</span> into a video file. The apps also perform
      <span class="accent">video post-processing</span>, such as adding overlays and creating mosaic
      videos. One of the components also performs image inference using an internal AI API and draws
      the resulting bounding boxes on the video.
    </p>
    <p>
      The apps are written in <span class="accent">C#</span> and wrap around
      <span class="accent">FFmpeg</span> and <span class="accent">OpenCV</span>. The converters are
      deployed in a distributed manner using <span class="accent">Docker Swarm</span> - they started
      as a single Windows service and gradually evolved, as complexity increased.
    </p>
  </section>
  <section>
    <h2>
      Voting machine -
      <a class="accent" href="https://youtu.be/BABlTRHFsPk" target="_blank"
        ><LinkSymbol :icon-size="24" />YouTube</a
      >
    </h2>
    <p>
      A university project - a prototype of a voting system based on
      <span class="accent">ATMega 328P</span> for the main station and
      <span class="accent">ATtiny 85</span> for remaining stations, with the ability to vote via the
      internet using a basic Python application. The biggest challenge was handling both the local
      and remote functionality using the not-very-huge memory of the
      <span class="accent">microcontroller</span>. The project was hardware-focused, so the web
      functionality was only thrown in as an extra, and could be improved upon heavily.
    </p>
  </section>
</template>

<style scoped>
h2 {
  font-weight: 500;
}

section {
  padding-bottom: 15px;
}
</style>
