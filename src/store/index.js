import { createStore } from 'vuex'
import * as fb from '../firebase'
import router from '../router/index'
// import account from './modules/account'
import createPersistedState from "vuex-persistedstate";

// realtime firebase connection - necessary to update in real time as changes are made to the postsCollection in the database.
//.where("userName", "==", store.state.userProfile.name)

fb.formDataCollection.onSnapshot(snapshot => {
  // fb.formDataUserSpecific.onSnapshot(snapshot => {
  let dataCollectedArray = []
  //we then take that data and atach an id that will make the lookup in the future easy.
  snapshot.forEach(doc => {
    let dataCollected = doc.data()
    // console.log(2, dataCollected)
    dataCollected.id = doc.id
    
    dataCollectedArray.push(dataCollected)
    
  })
  //then a mutation to commit that to state
  store.commit('setDataCollected', dataCollectedArray)
})


const store = createStore({
  state: {
    userProfile: {},
    getDataCollected: [],
    id: 1,
    // pickedVisa: '',
    agreedToPrivacy: false
  },
  plugins: [createPersistedState()],
  mutations: {
    setUserProfile(state, val) {
      state.userProfile = val
      
    },
    //updating pickedvisa state.
    // setPickedVisa(state, pickedVisa) {
    //   // console.log(pickedVisa)
    //   state.pickedVisa = pickedVisa
    // },
    // setDataFetch(state, dataCollected){
    //   // console.log(dataCollected)
    //   state.getDataCollected = dataCollected
    // },
    setDataCollected(state, val) {
      state.getDataCollected = val
      // console.log(3, state.getDataCollected)
    },
    
    agreePrivacyPolicy(state) {
      localStorage.setItem('agreedToPrivacy', true);
      state.agreedToPrivacy = true;
    },
    setId(state, id){
      state.id = id
    }
  },
  actions: {
      // login
      async login({ dispatch }, form) {
        // sign user in
        const { user } = await fb.auth.signInWithEmailAndPassword(form.email, form.password)
    
        // fetch user profile and set in state
        dispatch('fetchUserProfile', user)

        router.push('/admin')
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
        // if (router.currentRoute.path === '/login') {
        //   router.push(router.currentRoute.path)
        // }
        // if(this.$route === '/login'){
        //   router.push('/admin')
        // }
        
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
      
        //3. fetch user profile and set in state and triggers fetchuserProfile async function and push to admin
        dispatch('fetchUserProfile', user)

        router.push('/details')
      },
        // logout the user
      async logout({ commit }) {
        await fb.auth.signOut()
      
        // clear userProfile and redirect to /login
        commit('setUserProfile', {})
        router.push('/login')
      },
      //update user name and title in settings
      async updateProfile({ dispatch }, user) {
        const userId = fb.auth.currentUser.uid
        // update user object
         // eslint-disable-next-line no-unused-vars
        const userRef = await fb.usersCollection.doc(userId).update({
          name: user.name
        })
        dispatch('fetchUserProfile', { uid: userId })

        // const formDataDocs = await fb.formDataCollection.where('userId', '==', userId).get();
        // formDataDocs.forEach(doc => {
        //     fb.formDataCollection.doc(doc.id).update({
        //       pickedVisa: pickedVisa,
        //       open: open,
        //       openTime: openTime
        //     })
        // })
      
        
      },
      async updatePref({ dispatch }, user) {
        const userId = fb.auth.currentUser.uid
        // update user object
         // eslint-disable-next-line no-unused-vars
        const formDataRef = await fb.usersCollection.doc(userId).formDataCollection.doc().update({
          name: user.name,
          title: user.title
        })
      
        dispatch('fetchUserProfile', { uid: userId })
      },
      //firebase storage of createDataFetch
      // eslint-disable-next-line no-unused-vars
      async createDataFetch({ state, commit }, dataCollected) {
        await fb.formDataCollection.add({
          createdOn: new Date(),
          pickedVisa: dataCollected.pickedVisa, openTime: dataCollected.openTime, pickedNumber: dataCollected.pickedNumber,
		open: dataCollected.open, selected: dataCollected.selected,
          userId: fb.auth.currentUser.uid,
          userName: state.userProfile.name
        })
      },
      async createId({ commit }, id) {
        commit('setId', id)
      }
  },
  modules: {
  }
})


export default store;