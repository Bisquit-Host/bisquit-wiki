<script setup>
import DefaultTheme from "vitepress/theme";
import { onMounted } from "vue";
import { useData, useRouter } from "vitepress";
import mediumZoom from "medium-zoom";
import VPNavBarSearch from "vitepress/dist/client/theme-default/components/VPNavBarSearch.vue";
import VPImage from "vitepress/dist/client/theme-default/components/VPImage.vue";

const { Layout } = DefaultTheme;
const router = useRouter();
const { site, theme } = useData();

const setupMediumZoom = () => {
  mediumZoom("[data-zoomable]", {
    background: "transparent",
  });
};

onMounted(setupMediumZoom);
router.onAfterRouteChange = setupMediumZoom;
</script>

<template>
  <Layout>
    <template #sidebar-nav-before>
      <a href="/" class="sidebar-logo">
        <VPImage v-if="theme.logo" class="logo" :image="theme.logo" />
        <span class="brand-text" v-if="theme.siteTitle" v-html="theme.siteTitle"></span>
        <span class="brand-text" v-else>{{ site.title }}</span>
      </a>
      <div class="sidebar-search">
        <VPNavBarSearch />
      </div>
    </template>
  </Layout>
</template>

<style>
.medium-zoom-overlay {
  backdrop-filter: blur(5rem);
}

.medium-zoom-overlay,
.medium-zoom-image--opened {
  z-index: 999;
}

/* Logo at top of sidebar */
.sidebar-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 4px 0 20px 0;
  text-decoration: none;
  color: var(--vp-c-text-1);
}

.sidebar-logo .logo {
  height: 28px;
  width: auto;
}

.sidebar-logo .brand-text {
  font-size: 18px;
  font-weight: 800;
  letter-spacing: 0.02em;
  color: var(--vp-c-text-1);
}

/* Sidebar search box wrapper */
.sidebar-search {
  margin: 0 0 28px 0;
}

.sidebar-search .VPNavBarSearch {
  flex-grow: 0;
  padding-left: 0;
  display: block;
  width: 100%;
}

.sidebar-search .VPNavBarSearchButton {
  width: 100%;
  height: 42px;
  padding: 10px 14px !important;
  background-color: #1a1a1a !important;
  border: 1px solid #3a3a3a !important;
  border-radius: 10px !important;
  color: var(--vp-c-text-2) !important;
  font-size: 14px !important;
  transition: border-color 0.2s, background-color 0.2s;
  gap: 10px !important;
  justify-content: flex-start !important;
}

.sidebar-search .VPNavBarSearchButton:hover {
  border-color: var(--vp-c-brand-1) !important;
  background-color: #1f1f1f !important;
}

.sidebar-search .VPNavBarSearchButton .text {
  flex-grow: 1;
  text-align: left;
  font-size: 14px !important;
  color: var(--vp-c-text-2);
}

.sidebar-search .VPNavBarSearchButton .keys {
  padding: 3px 7px !important;
  background: #262626 !important;
  border: 1px solid #3a3a3a !important;
  border-radius: 5px !important;
}

.sidebar-search .VPNavBarSearchButton .vpi-search {
  color: var(--vp-c-text-2);
  font-size: 16px;
}

/* Hide search from top navbar (now lives in sidebar) */
.VPNavBar .VPNavBarSearch {
  display: none !important;
}

/* Hide the original NavBarTitle (logo) in the top bar — moved into sidebar */
.VPNavBar .VPNavBarTitle,
.VPNavBar > .wrapper > .container > .title {
  display: none !important;
}
</style>
