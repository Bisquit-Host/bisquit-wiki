<script setup>
defineProps({
  name: {
    type: String,
    required: true
  },
  isPremium: {
    type: Boolean,
    default: false
  },
  bisquitLink: {
    type: String,
    default: ''
  },
  modrinthLink: {
    type: String,
    default: ''
  },
  bmLink: {
    type: String,
    default: ''
  },
  githubLink: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <div class="flex">
    <h3>
      <b v-if="isPremium" style="color:lightgreen">$</b> {{ name }}
    </h3>
    <a v-if="bisquitLink" :href="bisquitLink">
      <img src="/bisquit.webp">
    </a>
    <a v-if="modrinthLink" :href="modrinthLink" target="_blank">
      <img src="/modrinth.webp" class="sex">
    </a>
    <a v-if="bmLink" :href="bmLink" target="_blank">
      <img src="/bm.webp" class="sex">
    </a>
    <a v-if="githubLink" :href="githubLink" target="_blank">
      <img src="/github.webp" class="sex" :title="name">
    </a>
  </div>
  <keks>
    <slot></slot>
  </keks>
</template>