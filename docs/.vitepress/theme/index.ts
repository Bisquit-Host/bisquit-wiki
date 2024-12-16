// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import Layout from "./Layout.vue";
import './style.css'
import DefaultTheme from "vitepress/theme";

export default {
  extends: DefaultTheme,
  Layout,
};
