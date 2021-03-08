import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import VueScrollTo from 'vue-scrollto'
import "@fortawesome/fontawesome-free/css/all.min.css";
// import VueSlickCarousel from 'vue-slick-carousel'
// import { Splitpanes, Pane } from 'splitpanes'
// import 'splitpanes/dist/splitpanes.css'


let app;

app = createApp(App)
app.use(store)
app.use(router)
app.use(VueScrollTo)
// app.use(Splitpanes)
// app.use(Pane)
app.mount('#app')


// createApp(App).use(store).use(router).use(VueScrollTo).use(Splitpanes, Pane).mount('#app')
