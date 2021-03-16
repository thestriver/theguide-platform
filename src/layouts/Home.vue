<template>
  <div class="home">
   <home-navbar v-if="showNav"></home-navbar>
   <!-- <home-intro></home-intro> -->
   <h2 class="text-4xl font-bold text-left mx-24 my-10 ">Welcome, <span class="text-green-600 font-bold "> {{ userProfile.name }}  </span> </h2>
   <home-admin></home-admin>

   <!-- <home-career></home-career>
   <home-imm></home-imm> -->
   <!-- <home-comm></home-comm> -->
   <!-- <home-services></home-services> -->
   <!-- <home-footer></home-footer> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'

import HomeCareer from '../components/Cards/Home/HomeCareer.vue'
import HomeComm from '../components/Cards/Home/HomeComm.vue'
import HomeImm from '../components/Cards/Home/HomeImm.vue'
import HomeAdmin from '../views/admin/HomeAdmin.vue'
import HomeIntro from '../components/Cards/Home/HomeIntro.vue'
import HomeServices from '../components/Cards/Home/HomeServices.vue'
// import HomeFooter from '../components/Footer/HomeFooter.vue'
import HomeNavbar from '@/components/Navbar/HomeNavbar.vue'

export default {
  name: 'Home',
  components: {
    HomeNavbar,
    HomeIntro,
    HomeCareer,
    HomeImm,
    HomeComm,
    // HomeFooter,
    HomeServices,
    HomeAdmin
  },
  computed: {
    ...mapState(['userProfile']),
    showNav() {
      return Object.keys(this.userProfile).length > 1
    }
  },
}
</script>
