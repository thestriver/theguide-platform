<template>
<div class="relative w-full h-full py-40 min-h-screen">
  
  <div class="absolute top-0 w-full h-full bg-gray-900 bg-no-repeat bg-full">
    <PasswordReset v-if="showPasswordReset" @close="togglePasswordReset()"></PasswordReset>
     <!-- LOGIN -->
    <div v-if="showLoginForm" class="container mx-auto px-4 h-full"
    :class="{ 'animate-pulse': !showLoginForm }"
    >
    <div class="flex content-center items-center justify-center h-full">    
      <div class="w-full lg:w-4/12 ">
        <div
          class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0"
        >
          <!-- <div class="rounded-t mb-0 px-6 py-6">
            <div class="text-center mb-3">
              <h6 class="text-gray-600 text-sm font-bold">
                Sign in with
              </h6>
            </div>
            <div class="btn-wrapper text-center">
              <button
                class="bg-white active:bg-gray-100 text-gray-800 px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button"
              >
                <img alt="..." class="w-5 mr-1" :src="github" />
                Github
              </button>
              <button
                class="bg-white active:bg-gray-100 text-gray-800  px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button"
              >
                <img alt="..." class="w-5 mr-1" :src="google" />
                Google
              </button>
            </div>
            <hr class="mt-6 border-b-1 border-gray-400" />
          </div> -->
          <div class="flex-auto px-4 lg:px-10 py-10 pt-5">
            <img :src="logo" alt="logo" class=" rounded  mx-auto w-2/3 py-4">
            <div class="text-gray-500 text-center mb-3 font-bold">
              <small>Sign in with your credentials</small>
            </div>
            <form @click.prevent>
              <div :class="{ error: v$.loginForm.email.$errors.length }" class="relative w-full mb-3">
                <label
                  class="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email
                </label>
                <input
                  type="email"
                  class="px-3 py-3 required placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  placeholder="Email"
                  v-model.trim="loginForm.email"
                />
                <div class="input-errors" v-for="(error, index) of v$.loginForm.email.$errors" :key="index" >
                  <span v-if="v$.loginForm.email.$error" class="error-msg text-xs text-red-700" id="">{{ error.$message }}</span>
                </div>
              </div>

              <div :class="{ error: v$.loginForm.password.$errors.length }" class="relative w-full mb-3">
                <label
                  class="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Password
                </label>
                <input
                  type="password"
                  class="px-3 py-3 required placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  placeholder="Password"
                  v-model.trim="loginForm.password"
                />
                <div class="input-errors" v-for="(error, index) of v$.loginForm.password.$errors" :key="index" >
                  <span v-if="v$.loginForm.password.$error" class="error-msg text-xs text-red-700" id="">{{ error.$message }}</span>
                </div>
              </div>
              <!-- <div>
                <label class="inline-flex items-center cursor-pointer">
                  <input
                    id="customCheckLogin"
                    type="checkbox"
                    class="form-checkbox text-gray-800 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                  />
                  <span class="ml-2 text-sm font-semibold text-gray-700">
                    Remember me
                  </span>
                </label>
              </div> -->

              <div class="text-center mt-6">
                <button
                  class="bg-gray-900 text-white hover:bg-green-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="button"
                  @click="login()"
                >
                  Log In
                </button>
                <div v-if="showAnimation" class="relative flex justify-center items-center mt-4">
                  <div class="inline-block animate-spin ease duration-300 w-5 h-5 bg-black mx-2"></div>
                  <div class="inline-block animate-ping ease duration-300 w-5 h-5 bg-black mx-2"></div>
                  <div class="inline-block animate-pulse ease duration-300 w-5 h-5 bg-black mx-2"></div>
                  <div class="inline-block animate-bounce ease duration-300 w-5 h-5 bg-black mx-2"></div>
                </div>
                <span class="text-red-700 text-sm "> {{alerted}} </span>
              </div>
            </form>
          </div>
        </div>
        <div class="flex flex-wrap mt-6 relative cursor-pointer ">
          <!-- <button class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" v-on:click="this.toggleModal()">
            Password Reset
          </button> -->
          <div class="w-1/2">
            <a @click="togglePasswordReset()" class="text-gray-300">
              <h5 class="hover:text-gray-600 text-md">Forgot password?</h5>
            </a>
          </div>
          <div class="w-1/2 text-right cursor-pointer">
            <a @click="toggleForm()" class="text-gray-300">
              <h5 class="hover:text-green-600 text-md " >Create new account</h5>
            </a>
          </div>
          <div class="pt-6 w-full cursor-pointer text-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ">
            <router-link
        to="/"
        class="text-sm py-2 px-4 underline font-normal block w-full whitespace-no-wrap bg-transparent text-white"
            >Or Homepage?</router-link>
          </div>
        </div>
      </div>
    </div>
    </div>

   <!-- SIGN UP -->
   <div v-else class="container mx-auto w-full lg:w-2/3 h-full">
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-8/12 px-4">
        <div
          class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0"
        >
          <!-- <div class="rounded-t mb-0 px-6 py-6">
            <div class="text-center mb-3">
              <h6 class="text-gray-600 text-sm font-bold">
                Sign up with
              </h6>
            </div>
            <div class="btn-wrapper text-center">
              <button
                class="bg-white active:bg-gray-100 text-gray-800  px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button"
              >
                <img alt="..." class="w-5 mr-1" :src="github" />
                Github
              </button>
              <button
                class="bg-white active:bg-gray-100 text-gray-800 px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button"
              >
                <img alt="..." class="w-5 mr-1" :src="google" />
                Google
              </button>
            </div>
            <hr class="mt-6 border-b-1 border-gray-400" />
          </div> -->
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0" >
            <img :src="logo" alt="logo" class=" rounded  mx-auto w-1/2 py-4">
            <div class="text-gray-500 text-center pt-4 mb-3 font-bold">
              
              <h2>Please sign up with your credentials</h2>
              <p class="text-3xl"><strong class="text-red-600 "> {{ console.log(store.state.loginError )}} </strong></p>
            </div>
            <form @submit.prevent>
              <div  class="relative w-full mb-3">
                <!-- :class="{ error: v$.signupForm.name.$errors.length }" -->
                <label
                  class="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Name
                </label>
                <input
                  type="name"
                  class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  placeholder="Name"
                  v-model.trim="signupForm.name"
                />
                <div class="input-errors" v-for="(error, index) of v$.signupForm.name.$errors" :key="index" >
                  <span v-if="v$.signupForm.name.$error" class="error-msg text-xs text-red-700" id="">{{ error.$message }}</span>
                </div>
              </div>

              <div :class="{ error: v$.signupForm.email.$errors.length }" class="relative w-full mb-3">
                <label
                  class="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email
                </label>
                <input
                  type="email"
                  class="required px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  placeholder="Email"
                  v-model.trim="signupForm.email"
                />
                <div class="input-errors" v-for="(error, index) of v$.signupForm.email.$errors" :key="index" >
                  <span v-if="v$.signupForm.email.$error" class="error-msg text-xs text-red-700" id="">{{ error.$message }}</span>
                </div>
              </div>

              <div :class="{ error: v$.signupForm.password.$errors.length }" class="relative w-full mb-3">
                <label
                  class="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Password
                </label>
                <input
                  type="password"
                  class="px-3 py-3 required placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                  placeholder="Password"
                  v-model.trim="signupForm.password"
                />
                <div class="input-errors" v-for="(error, index) of v$.signupForm.password.$errors" :key="index" >
                  <span v-if="v$.signupForm.password.$error" class="error-msg text-xs text-red-700" id="">{{ error.$message }}</span>
                  
                </div>
              </div>
              <br class=""><span class="pt-40" :style="{ 'margin-top': '2000'}" >
                    <!-- status: {{ v$.validate()}} -->
                  </span>
              <div>
                
                <!-- <label class="inline-flex items-center cursor-pointer">
                  <input
                    id="customCheckLogin"
                    type="checkbox"
                    class="form-checkbox text-gray-800 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                     v-model.trim="checkboxed"
                  />
                  <span class="ml-2 text-xs font-semibold text-gray-700">
                   By signing up, you agree to our <span class="text-green-500 cursor-pointer ">Terms and Conditions</span> and our <span class="text-green-500 cursor-pointer">Privacy Policy </span>
                  </span>
                </label> -->
                
              </div>
              
              <div class="text-center mt-6">
                <button
                 @click="signup"
                  class="bg-gray-900 text-white hover:bg-green-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="submit"
            
                >
                  Create Account
                </button>
                
                <span class="text-red-700 text-sm "> {{loge }} </span>
                <span class="text-red-700 text-sm "> {{alerted}} </span>
                
                <div v-if="showAnimation" class="relative flex justify-center items-center mt-4">
                  <div class="inline-block animate-spin ease duration-300 w-5 h-5 bg-black mx-2"></div>
                  <div class="inline-block animate-ping ease duration-300 w-5 h-5 bg-black mx-2"></div>
                  <div class="inline-block animate-pulse ease duration-300 w-5 h-5 bg-black mx-2"></div>
                  <div class="inline-block animate-bounce ease duration-300 w-5 h-5 bg-black mx-2"></div>
                </div>
              </div>
            </form>
          </div>
        </div>
         <div class="flex flex-wrap mt-6 relative">
          <div class="w-1/2 text-xl mx-auto underline text-center text-gray-300 cursor-pointer">
            <a @click="toggleForm()">
              <small>Back to Login</small>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  </div>
</div>
</template>
<script>
import { mapState } from 'vuex'
import useVuelidate from '@vuelidate/core'
import { required, helpers,  email, minLength } from '@vuelidate/validators'

import logo from "@/assets/images/Logo(2)copy.png";
import PasswordReset from '@/components/PasswordReset'

export default {
  components: {
    PasswordReset
  },
  setup: () => ({ v$: useVuelidate() }), 
  data() {
    return {
      // v$: useVuelidate(),
      // github,
      // google,
      // registerBg2
      loge :'',
      alerted: '',
      logo,
      loginForm: {
        email: '',
        password: ''
      },
      signupForm: {
        name: '',
        title: '',
        email: '',
        password: ''
      },
      checkboxed: '',
      showLoginForm: true,
      showPasswordReset: false,
      showAnimation: false
    };
  },
  validations () {
    const containsNumber = (value) => /[0-9]/.test(value);
    const containsSpecial = (value) => /[#?!@$%^&*-]/.test(value);
    return {
      loginForm: {
        email: { required: helpers.withMessage('This field cannot be empty', required), email },
        password: { required: helpers.withMessage('This field cannot be empty', required), }
      },
      signupForm: {
        name: { required: helpers.withMessage('This field cannot be empty', required), minLengthValue: minLength(3), },
        email: { required: helpers.withMessage('This field cannot be empty', required), email },
        password: { required: helpers.withMessage('This field cannot be empty', required), 
        containsNumber: helpers.withMessage('Password has to contain a number', containsNumber)  ,
        containsSpecial: helpers.withMessage('Password has to contain a special character', containsSpecial)  ,
        // valid: function (value) {
        //   const containsUppercase = /[A-Z]/.test(value);
        //   const containsLowercase = /[a-z]/.test(value);
        //   const containsNumber = /[0-9]/.test(value);
        //   const containsSpecial = /[#?!@$%^&*-]/.test(value);
        //   return (
        //     containsUppercase &&
        //     containsLowercase &&
        //     containsNumber &&
        //     containsSpecial
        //   );
        // }, 
        minLength: helpers.withMessage(
      ({
        $params
      }) => `Your password must have a min length of ${$params.min}`,
      minLength(6), ),
      }
      }
    }
  },
  methods: {
    toggleForm() {
      this.showLoginForm = !this.showLoginForm
    },
    togglePasswordReset() {
      this.showPasswordReset = !this.showPasswordReset
    },
    login() {
      this.v$.$validate() // checks all inputs
      // console.log(this.v$)
      if (this.v$.$errors.length <= 5) { // if ANY fail validation
        // alert('Form successfully submitted.')
        this.showAnimation = !this.showAnimation
        this.$store.dispatch('login', {
          email: this.loginForm.email,
          password: this.loginForm.password
          })

      } else {
        this.alerted = 'Wrong details. Please fill the correct information'
      }

    //https://firebase.google.com/docs/auth/web/manage-users#send_a_user_a_verification_email

    // if (this.v$.$error) return
    // this.showAnimation = !this.showAnimation
    // this.$store.dispatch('login', {
    //   email: this.loginForm.email,
    //   password: this.loginForm.password
    //   })
    },
    signup() {
      this.v$.$validate() // checks all inputs
      console.log(this.v$)
      if (this.v$.$errors.length <= 2) { // if ANY fail validation
        // alert('Form successfully submitted.')
        this.showAnimation = !this.showAnimation
        this.$store.dispatch('signup', {
        email: this.signupForm.email,
        password: this.signupForm.password,
        name: this.signupForm.name,
        title: this.signupForm.title
        })  
      } else {
        this.alerted = 'Please fill the correct details'
      }
      // this.v$.$touch()
      // if (this.$v.$invalid){
      //   console.log('poo')
      // }
      // else{
      //    console.log('works!')
      // }
     
     

      // this.showAnimation = !this.showAnimation
      // this.$store.dispatch('signup', {
      // email: this.signupForm.email,
      // password: this.signupForm.password,
      // name: this.signupForm.name,
      // title: this.signupForm.title
      // })  
      
      
    }
  },
  computed: {
    ...mapState(['loginError', 'errArr']),
    

  },
};
</script>
