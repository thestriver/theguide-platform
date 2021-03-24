<template>
  <home-navbar></home-navbar>
  <section class="settings w-full max-w-md p-8 space-y-3 rounded-xl bg-coolGray-50 text-coolGray-800" >
    <div class="col1">
      <h3 class="text-2xl font-bold ">Profile Settings</h3>
      <p class="block text-gray-600">Update your profile</p>

      <transition name="fade">
        <p v-if="showSuccess" class="success block text-green-600">profile updated</p>
      </transition>

      <form @submit.prevent>
        <label for="name">Name</label>
        <input v-model.trim="name" type="text" :placeholder="userProfile.name" class="my-5 mx-5 px-2 border border-green-900" id="name" />
        
        <br>

        <label for="title">Visa Type</label>
        <input v-model.trim="title" type="text" :placeholder="userProfile.title" class="my-5 mx-5 px-2 border border-green-900" id="title" />

        <button @click="updateProfile()" class="button px-8 py-3 rounded-md bg-teal-accent-400 text-coolGray-50">Update Profile</button>
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
      showSuccess: false
    }
  },
  computed: {
    ...mapState(['userProfile'])
  },
  methods: {
    updateProfile() {
        this.$store.dispatch('updateProfile', {
        name: this.name !== '' ? this.name : this.userProfile.name,
        title: this.title !== '' ? this.title : this.userProfile.title
    })
        this.name = ''
        this.title = ''

        this.showSuccess = true

        setTimeout(() => {
            this.showSuccess = false
        }, 2000)

        this.$router.push('/admin')
    }
  }
}
</script>