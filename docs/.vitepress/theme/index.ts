// https://vitepress.dev/guide/custom-theme
import Layout from "./Layout.vue";
import './style.css'
import DefaultTheme from "vitepress/theme";
import PluginCard from './PluginCard.vue'
import keks from './keks.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('PluginCard', PluginCard)
    app.component('keks', keks)
  }
};
