<script setup>
import DefaultTheme from "vitepress/theme";
import { onMounted } from "vue";
import { useData, useRouter } from "vitepress";
import mediumZoom from "medium-zoom";
import VPImage from "vitepress/dist/client/theme-default/components/VPImage.vue";
import LocalSearch from "./LocalSearch.vue";

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
    <template #nav-bar-content-before>
      <div class="nav-search">
        <LocalSearch />
      </div>
    </template>

    <template #sidebar-nav-before>
      <a href="/" class="sidebar-logo">
        <VPImage v-if="theme.logo" class="logo" :image="theme.logo" />
        <span class="brand-text" v-if="theme.siteTitle" v-html="theme.siteTitle"></span>
        <span class="brand-text" v-else>{{ site.title }}</span>
      </a>
      <div class="sidebar-search">
        <LocalSearch :global-shortcut="false" />
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

.nav-search {
  width: 220px;
  margin-right: 12px;
  pointer-events: auto;
}

.nav-search .local-search-button {
  height: 34px;
  border-radius: 8px;
}

.nav-search .local-search-keys {
  display: none;
}

@media (max-width: 767px) {
  .nav-search {
    width: 42px;
    margin-right: 8px;
  }

  .nav-search .local-search-button {
    justify-content: center;
    padding: 8px;
  }

  .nav-search .local-search-label,
  .nav-search .local-search-keys {
    display: none;
  }
}

@media (min-width: 960px) {
  .VPNavBar.has-sidebar .nav-search {
    display: none;
  }
}

/* Hide the original NavBarTitle (logo) in the top bar — moved into sidebar */
.VPNavBar .VPNavBarTitle,
.VPNavBar > .wrapper > .container > .title {
  display: none !important;
}
</style>
