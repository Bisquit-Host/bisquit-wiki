<script setup>
import { computed } from 'vue';

const props = defineProps({
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

const hasLinks = computed(() => props.bisquitLink || props.modrinthLink || props.bmLink || props.githubLink);
</script>

<template>
  <div class="plugin-card">
    <div class="plugin-card__header">
      <div v-if="hasLinks" class="plugin-card__links">
        <a v-if="bisquitLink" :href="bisquitLink">
          <img src="/bisquit.webp" class="plugin-card__icon">
        </a>
        <a v-if="modrinthLink" :href="modrinthLink" target="_blank">
          <img src="/modrinth.webp" class="plugin-card__icon sex">
        </a>
        <a v-if="bmLink" :href="bmLink" target="_blank">
          <img src="/bm.webp" class="plugin-card__icon sex">
        </a>
        <a v-if="githubLink" :href="githubLink" target="_blank">
          <img src="/github.webp" class="plugin-card__icon sex" :title="name">
        </a>
      </div>
      <h3 class="plugin-card__title" title="Платный">
        <b v-if="isPremium" style="color:lightgreen">₽</b> {{ name }}
      </h3>
    </div>
    <keks>
      <slot></slot>
    </keks>
  </div>
</template>
