import VMdPreview from '@kangc/v-md-editor/lib/preview';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import Prism from 'prismjs';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import 'prismjs/components/prism-json';


export default defineNuxtPlugin((nuxtApp) => {
  VMdPreview.use(vuepressTheme, {
    Prism,
  });
  nuxtApp.vueApp.use(VMdPreview);
})