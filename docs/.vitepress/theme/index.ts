// https://vitepress.dev/guide/custom-theme
import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue";
import PluginCard from "./PluginCard.vue";
import keks from "./keks.vue";
import "./style.css";

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('PluginCard', PluginCard)
    app.component('keks', keks)
  }
};
