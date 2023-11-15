import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

router.beforeEach((to, from, next) => {
    const childTitle = to.matched[0]?.meta.title || 'Your Main Title';
    const mainTitle = to.meta.title || '';
    document.title = childTitle ? `${childTitle} - ${mainTitle}` : mainTitle;
    next();
  });
createApp(App).use(Quasar, quasarUserOptions).use(router).mount('#app')
