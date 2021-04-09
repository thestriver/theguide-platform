<template>
  <home-navbar></home-navbar>
  <section class="settings w-full max-w-md p-8 space-y-3 rounded-xl bg-coolGray-50 text-coolGray-800" >
    <div class="col1">
      <h3 class="text-2xl font-bold ">Profile Settings</h3>
      <p class="block text-gray-600">Update your profile</p>

      <transition name="fade">
        <p v-if="showSuccess" class="success block text-green-600">Profile updated</p>
      </transition>
      
      <form @submit.prevent>
        <div v-for=" datat in getDataCollected" :key="datat.id" >
        <div v-if=" datat.userName == userProfile.name " >
          <label for="name">Name</label>
          <input v-model.trim="name" type="text" :placeholder="userProfile.name" class="my-5 mx-5 px-2 border border-green-900" id="name" />
          
          <br>
           <label for="title">Visa Type</label>
           <input v-model.trim="pickedVisa" type="text" :placeholder="datat.pickedVisa" class="my-5 mx-5 px-2 border border-green-900" id="title" />
            
            <div class="mt-2">
              <span class="text-gray-900 mr-6">Are you open to exploring other wonderful countries 
                with great work and immigration options after your studies? Current Choice: <span class="underline text-green-600 ">{{datat.open}}</span> </span> <br>
              <label class="inline-flex items-center"> 
              <input type="radio" class="form-radio" name="Yes" value="Yes" v-model="open" />
              <span class="ml-2">Yes</span>
              </label>
              <label class="inline-flex items-center ml-6">
              <input type="radio" class="form-radio" name="No" value="No" v-model="open" />
              <span class="ml-2">No</span>
              </label>
            </div>

            <div class="mt-2">
              <span class="text-gray-900 mr-6">
                Part-time or Full Time? Current Choice: <span class="underline text-green-400">{{ datat.openTime }}</span>
              </span>
              <label class="inline-flex items-center">
              <input type="radio" class="form-radio" name="Part-Time" value="Part-Time" v-model="openTime" />
              <span class="ml-2">Part-Time</span>
              </label>
              <label class="inline-flex items-center ml-6">
              <input type="radio" class="form-radio" name="Full-Time" value="Full-Time" v-model="openTime" />
              <span class="ml-2">Full-Time</span>
              </label>

              <!-- <span class="my-6 block">Selected: {{ openTime }}</span> -->
            </div>
        </div>
      </div>
       

        <button @click="updatePref()" class="button mt-10 px-8 py-3 rounded-md bg-teal-accent-400 text-coolGray-50">Update Profile</button>
      </form>
    </div>
  </section>
</template>


<script>
import { mapState } from 'vuex'
import HomeNavbar from '../components/Navbar/HomeNavbar.vue'

export default {
  components: { HomeNavbar },
  data() {
    return {
      name: '',
      title: '',
      open: '',
      openTime: '',
      pickedVisa: '',
      showSuccess: false
    }
  },
  computed: {
    ...mapState(['userProfile' , 'getDataCollected']),
    filteredPref(){
       const filteredPr = this.getDataCollected.filter( dat => dat.userName  == this.userProfile.name )
       return filteredPr
    }
  },
  methods: {
    updatePref() {   
        this.$store.dispatch('updateProfile', {
        name: this.name !== '' ? this.name : this.userProfile.name,
        pickedVisa: this.pickedVisa !== '' ? this.pickedVisa: this.pickedVisa,
        open: this.open !== '' ? this.open: this.open,
        openTime: this.openTime !== '' ? this.openTime: this.openTime
       
    })
        this.name = ''
        this.title = ''
        this.open =  '',
        this.openTime = '',
        this.pickedVisa = ''

        this.showSuccess = true

        setTimeout(() => {
            this.showSuccess = false
        }, 2000)

        this.$router.push('/admin')
    }
  }
}
</script>