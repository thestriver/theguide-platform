<template>
  <div class="home">
   <home-navbar></home-navbar>
   <!-- <home-intro></home-intro> -->
   <h2 class="text-4xl font-bold text-left lg:mx-20 lg:my-5 ">Welcome, <span class="text-teal-accent-400">Tunde</span> </h2>
   <home-career></home-career>
   <home-imm></home-imm>
   <home-comm></home-comm>
   <home-services></home-services>
   <!-- <home-footer></home-footer> -->
  </div>
</template>

<script>
import HomeCareer from '../components/Cards/Home/HomeCareer.vue'
import HomeComm from '../components/Cards/Home/HomeComm.vue'
import HomeImm from '../components/Cards/Home/HomeImm.vue'
import HomeIntro from '../components/Cards/Home/HomeIntro.vue'
import HomeServices from '../components/Cards/Home/HomeServices.vue'
// import HomeFooter from '../components/Footer/HomeFooter.vue'
import HomeNavbar from '../components/Navbar/HomeNavbar'

export default {
  name: 'Home',
  components: {
    HomeNavbar,
    HomeIntro,
    HomeCareer,
    HomeImm,
    HomeComm,
    // HomeFooter,
    HomeServices
  }
}
</script>
