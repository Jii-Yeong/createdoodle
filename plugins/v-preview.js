import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import hljs from 'highlight.js';

export default defineNuxtPlugin((nuxtApp) => {
  VMdPreview.use(vuepressTheme, {
    Hljs: hljs,
  });
  nuxtApp.vueApp.use(VMdPreview);
})