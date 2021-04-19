import { createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { auth } from './firebase'
import './index.css'
import VueScrollTo from 'vue-scrollto'
import "@fortawesome/fontawesome-free/css/all.min.css";

// import { VueMailchimpEmailSignupForm } from "vue-mailchimp-email-signup-form";
// import VueSlickCarousel from 'vue-slick-carousel'
// import { Splitpanes, Pane } from 'splitpanes'
// import 'splitpanes/dist/splitpanes.css'

// const VueMailchimpEmailSignupForm = require('vue-mailchimp-email-signup-form'); 
// // Vue.component("vue-mailchimp-email-signup-form", VueMailchimpEmailSignupForm);

let app;


auth.onAuthStateChanged(user => {
    if (!app) {
        
        app = createApp(App)
        app.use(store)
        app.use(router)
        app.use(VueScrollTo)
       
        // app.use(VueMailchimpEmailSignupForm)
        // app.use(Splitpanes)
        // app.use(Pane)
        app.mount('#app')
    }
    
    //maintains the user logic state on reload
    if (user) {
        store.dispatch('fetchUserProfile', user)
        // store.dispatch('dataFetch')
    }

    // this.$store.commit('initialiseStore')
    
    
})


// createApp(App).use(store).use(router).use(VueScrollTo).use(Splitpanes, Pane).mount('#app')
