import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import Prism from 'prismjs';
import 'prismjs/components/prism-json';

export default defineNuxtPlugin((nuxtApp) => {
  VMdEditor.use(vuepressTheme, {
    Prism
  });
  nuxtApp.vueApp.use(VMdEditor);
})