import { createStore } from 'vuex'
import * as fb from '../firebase'
import router from '../router/index'


const store = createStore({
  state: {
    userProfile: {}
  },
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val
    }
  },
  actions: {
      // login
      async login({ dispatch }, form) {
        // sign user in
        const { user } = await fb.auth.signInWithEmailAndPassword(form.email, form.password)
    
        // fetch user profile and set in state
        dispatch('fetchUserProfile', user)
      },
      async fetchUserProfile({ commit }, user) {
        // fetch user profile
        const userProfile = await fb.usersCollection.doc(user.uid).get()
    
        // set user profile in state
        commit('setUserProfile', userProfile.data())
        
        // change route to admin dashboard
        // router.push('/admin')
        //below replaces above
        // //ensuring when a user reloads on /settings for example it doesnt take them dashboard i.e '/'
        if (router.currentRoute.path === '/login') {
          router.push('/admin')
        }
      },
       // SiGNUP
      async signup({ dispatch }, form) {
        // 1. You first create a user for sign user up
        const { user } = await fb.auth.createUserWithEmailAndPassword(form.email, form.password)
      
        //2. create user profile object in userCollections that you can thereafter manipulate
        await fb.usersCollection.doc(user.uid).set({
          name: form.name,
          title: form.title
        })
      
        //3. fetch user profile and set in state
        dispatch('fetchUserProfile', user)
      },
        // logout the user
      async logout({ commit }) {
        await fb.auth.signOut()
      
        // clear userProfile and redirect to /login
        commit('setUserProfile', {})
        router.push('/login')
      }
  },
  modules: {
  }
})


export default store;