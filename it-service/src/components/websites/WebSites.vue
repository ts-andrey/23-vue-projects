<template>
  <section class="web">
    <video class="video" src="../../assets/video/web-bg-video.mp4" muted autoplay loop></video>
  </section>
</template>

<script></script>

<style scoped>
.web {
  position: relative;
  z-index: 1;
}
.video {
  width: 100vw;
  height: calc(100vh - var(--size-header-height));

  position: fixed;
  left: 0;
  right: 0;
  top: var(--size-header-height);
  bottom: 0;
  z-index: -1;

  object-fit: cover;
  opacity: 20%;
}
</style>
