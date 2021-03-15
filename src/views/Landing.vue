<template>
  <div class="overflow-hidden">
    <index-navbar></index-navbar>

    <!-- Hero -->
    <section class="relative overflow-hidden pt-20 mt-1">
        <img class="hidden lg:block absolute inset-0 w-full" :src="lines" alt="">
        <div class="relative  pt-12 lg:pt-20 pb-40">
            <div class="container mx-auto px-4">
            <div class="flex flex-wrap ">
                <div class="w-full lg:w-1/2 px-2 mb-12 md:mb-20 lg:mb-0 flex lg:items-center">
                    <div class="w-full text-center lg:text-left">
                        <div class="max-w-2xl mx-auto lg:mx-0 mb-3">
                            <h2 class="mb-3 text-4xl lg:text-6xl font-bold font-heading">
                                <span>An International Student's</span> 
                                <span class="text-green-600"> Personal <br class="hidden"> Guide</span>
                            </h2>
                        </div>
                        <div class="max-w-xl mx-auto lg:mx-0">
                        <p class="mb-6 mt-6 text-gray-900 leading-loose">
                            The Guide connects international students with tailored opportunities, tools and resources that help them achieve 
                            their career and immigration goals. 
                        </p>
                        <div class="flex pb-8 w-full md:justify-start justify-center items-end">
                          <form action="https://admissiontrackerapp.us1.list-manage.com/subscribe/post?u=d8860953b0b16ce89484143b0&amp;id=7eb4c33354" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                            <div id="mc_embed_signup_scroll">
                            <label for="mce-EMAIL"></label>
                            <input type="email" value="" name="EMAIL" id="mce-EMAIL" placeholder="email address" required class=" email w-full bg-gray-100  border-2 bg-opacity-50 border-green-600 focus:ring-2 focus:ring-green-200 focus:bg-transparent focus:border-green-500 text-base outline-none text-gray-900 py-3 px-14 leading-8 transition-colors duration-200 ease-in-out" >
                              <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                              <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_d8860953b0b16ce89484143b0_7eb4c33354" tabindex="-1" value=""></div>
                              <div class="clear">
                            <input type="submit" value="Join our waiting list" name="subscribe" id="mc-embedded-subscribe" class="button inline-flex text-white bg-green-600 border-0 py-4 px-2 lg:py-4 lg:px-6 focus:outline-none hover:bg-green-600 text-lg"></div>
                              </div>
                          </form>
                            <!-- <div class="relative mr-4 md:w-full lg:w-full xl:w-2/3 w-3/4">
                            <label for="hero-field2" class="leading-7 text-sm text-gray-600"></label>
                            <input type="text" id="hero-field2" placeholder="Join our waiting list" name="hero-field" class="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-900 focus:ring-2 focus:ring-green-200 focus:bg-transparent focus:border-green-500 text-base outline-none text-gray-900 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out">
                            </div>
                            <button class="inline-flex text-white bg-green-500 border-0 py-3 px-3 lg:py-3 lg:px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Sign Up</button> -->
                        </div>
                        <!-- <div>
                            <a class="inline-block mb-3 lg:mb-0 lg:mr-3 w-full lg:w-auto py-2 px-6 leading-loose bg-green-600 hover:bg-green-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200" href="#">Get Started</a>
                            <a class="inline-block w-full lg:w-auto py-2 px-6 border border-green-600 leading-loose font-semibold bg-white hover:bg-gray-50 rounded-l-xl rounded-t-xl transition duration-200" href="#">How it works</a>
                        </div> -->
                        </div>
                    </div>
                </div>
                <div class="w-full lg:w-1/2 px-4 flex items-center justify-center lg:pl-24">
                    <div class="relative" style="z-index: 0;">
                        <img class="max-h-1/4 w-full max-w-4xl object-cover rounded-3xl " :src="students" alt="">
                        <img class="hidden md:block absolute" style="top:-2rem; right: 3rem; z-index: -1;" :src="greendarkup" alt="">
                        <img class="hidden md:block absolute" style="bottom:-2rem; right: -2rem; z-index: -1;" :src="winggreendown" alt="">
                        <img class="hidden md:block absolute" style="top:3rem; right: -3rem; z-index: -1;" :src="grayright" alt="">
                        <img class="hidden md:block absolute" style="bottom:2.5rem; left: -4.5rem; z-index: -1;" :src="grayleft" alt="">
                    </div>
                </div>
            </div>
            </div>
        </div>
        
        </section>


<!-- Features -->
        <section class=" bg-gray-50 ">
            <div class="py-20 -mt-20 bg-gray-50 radius-for-skewed">
              <div class="container lg:mx-1 mx-5 ">
                <div class="flex flex-wrap items-center">
                  <div class="w-5/6 lg:w-1/2 mb-12 lg:mb-0">
                    <div class="max-w-md lg:mx-auto -mt-10">
                      <span class="text-green-600 font-bold">A COMMUNITY-FIRST PLATFORM</span>
                      <h2 class="my-2 text-4xl lg:text-5xl font-bold font-heading">We Help You Navigate Your Way To <span class="text-green-600">Success</span></h2>
                      <div class="mb-6 pt-4 text-gray-900 leading-8 tracking-normal max-w-md lg:max-w-xl">
                        <p>There are over 5.5 million international students in the world  contributing $300bn to the global economy <b>(U.S.A - $45bn).</b></p>  
                        <p class="py-2">
                        Yet, these very important contributors to global economy, innovation and science are poorly supported, left confused by conflicting 
                        immigration policies, often treated with disdain by their hosts, required by local companies to have vague "local" working experience 
                        and are often left stranded.
                        </p>
                        <p>At The Guide, we know, firsthand, how this hurts and having successfully navigated the experience, we want to help others. 
                        We're empowering these students by bridging the gap between them and their goals.</p>
                      </div>
                      
                    </div>
                  </div>
                  <!--  -->
                  <div class="w-5/6 lg:w-1/2 flex flex-wrap lg:pl-6">
                    <div class="mb-8 lg:mb-0 w-full md:w-1/2 px-4">
                      <div class="mb-8 py-6 pl-6 pr-4 shadow rounded bg-white">
                        <span class="mb-4 inline-block p-3 rounded-lg bg-green-200">
                          <svg class="w-10 h-10 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                        </span>
                        <h4 class="mb-2 text-2xl font-bold font-heading">Career Hub</h4>
                        <p class="text-gray-900 leading-loose">
                          A beautiful personal dashboard that provides exclusive access to the right job opportunities with innovative companies who are actually excited and want to work with talented international students like you.
                        </p>
                      </div>
                      <div class="py-6 pl-6 pr-4 shadow rounded bg-white">
                        <span class="mb-4 inline-block p-3 rounded-lg bg-green-200">
                          <svg class="w-10 h-10 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                          </svg>
                        </span>
                        <h4 class="mb-2 text-2xl font-bold font-heading">Immigration Hub</h4>
                        <p class="text-gray-900 leading-loose">
                          Country-specific, successful and well-tested suite of tools and guides that match talented international 
                          students with the right immigration path for them.


                        </p>
                      </div>
                    </div>
                    <div class="w-full md:w-1/2 lg:mt-52 px-4">
                      <div class="mb-8 py-6 pl-6 pr-4 shadow rounded-lg bg-white">
                        <span class="mb-4 inline-block p-3 rounded bg-green-200">
                          <svg class="w-10 h-10 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                          </svg>
                        </span>
                        
        
                        <h4 class="mb-2 text-2xl  font-bold font-heading">Community</h4>
                        <p class="text-gray-900 leading-loose">We provide an online community of like-minds helping international students get access to the specific support and resources they need </p>
                      </div>
                      <!-- <div class="py-6 pl-6 pr-4 shadow rounded-lg bg-white">
                        <span class="mb-4 inline-block p-3 rounded bg-green-200">
                          <svg class="w-10 h-10 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                          </svg>
                        </span>
                        <h4 class="mb-2 text-2xl font-bold font-heading">Immigration Hub</h4>
                        <p class="text-gray-900 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </div> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </section>


 <!-- Section 1 -->
      <section class="py-20">
        <h1 class="sm:text-2xl text-4xl font-medium mb-10 title-font text-center tracking-widest pb-12 uppercase font-bold text-green-600">We're With You All The Way</h1>
          
        <div class="container mx-8">
          <div class="flex flex-wrap">
            <div class="lg:w-1/2 w-5/6 md:w-1/2  order-1 md:order-0 lg:pl-16 lg:pt-10 ">
              <div class="lg:max-w-xl max-w-md ">
                <h2 class="mb-4 text-3xl md:text-5xl text-green-600 font-bold font-heading">During Your Studies</h2>
                <p class="mb-3 leading-loose text-blueGray-400 text-justify">
                    We help you optimize your trajectory matching you with resources that will help you achieve your dreams. 
                    <span class="text-green-600 font-bold"> Think of us as your personal guide. A secret weapon to advance your goals.</span>  <br>
                    Plus a rich community with like-minds and a suite of resources tailored to ease your navigation through your daunting time as an internation student
                </p>
                <!-- <ul class="pb-4">
                    <li class="">
                      <span class="inline-block py-2 px-3 mr-4 text-xs font-semibold bg-green-50 text-green-600 rounded">1</span>
                      <span> A Personal CMS - helping you track your academic and financial goals</span>
                    </li>
                    <li class="py-2">
                      <span class="inline-block py-2 px-3 mr-4 text-xs font-semibold bg-green-200 text-green-600 rounded">1</span>
                      <span> A Career Hub tailored to your preferences. Filled with internships and job opportunities with partner companies who are excited to work with international students </span>
                    </li>
                    <li class="py-2">
                      <span class="inline-block py-2 px-3 mr-4 text-xs font-semibold bg-green-200 text-green-600 rounded">2</span>
                      <span>An online community of international students driven by similar goals like you.</span>
                    </li>
                    <li class="py-2">
                      <span class="inline-block py-2 px-3 mr-4 text-xs font-semibold bg-green-200 text-green-600 rounded">3</span>
                      <span> A Resources Hub &amp; lots more. </span>
                    </li>
                  </ul> -->
                
                <router-link to="/admin">
                  <div class="flex justify-start">
                    <a class="inline-block mb-3 lg:mt-2 lg:mb-0 lg:mr-3 w-full lg:w-auto py-3 px-16 leading-loose bg-green-600 hover:bg-green-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200" href="/admin">Get Started</a>          
                  </div>
                </router-link>
              </div>
            </div>
            <div class="w-5/6 md:w-1/2 px-3 lg:pl-20  order-0 md:order-1 mb-12 lg:pt-1 md:mb-0">
              <img class="sm:max-w-sm rounded-xl lg:max-w-full mx-auto" :src="feature2" alt="" />
            </div>
            
          </div>
        </div>
      </section>

<!-- Section 2 -->
      <section class="py-20">
        <div class="container">
          <div class="flex flex-wrap -mx-3">
            <div class="w-full md:w-1/2 px-10 order-0 lg:pl-24  md:order-1 mb-12 md:mb-0">
              <img class="sm:max-w-sm rounded-xl lg:max-w-full mx-auto" :src="feature1" alt="">
            </div>
            <div class="w-full md:w-1/2 px-10 order-1 md:order-0 lg:pl-32">
              <div class="lg:max-w-2xl max-w-md ">
                <h2 class="mb-4 text-3xl md:text-5xl text-green-600 font-bold font-heading">After Your Studies</h2>
                <p class="mb-4 leading-loose text-blueGray-400 text-justify ">
                    We know how intense the months before and after your graduation are which is why we provide you with the best tools & resources to help you achieve your dreams. 
                 <br>   Matching you with highly-successful and well-tested career and immigration services. 
                    Partnerships with top companies who are excited to work with talented international students like you.

                </p>
                <!-- <ul class="mb-6">
                    <li class="py-2">
                      <span class="inline-block py-2 px-3 mr-4 text-xs font-semibold bg-green-200 text-green-600 rounded">1</span>
                      <span>Career Hub - A post-study career hub with a curated section for premium career services.</span>
                    </li>
                    <li class="py-2">
                      <span class="inline-block py-2 px-3 mr-4 text-xs font-semibold bg-green-200 text-green-600 rounded">2</span>
                      <span>
                        Immigration Hub - Get the best Immigration Strategies unique to each country.
                        </span>
                    </li>
                    <li class="py-2">
                      <span class="inline-block py-2 px-3 mr-4 text-xs font-semibold bg-green-200 text-green-600 rounded">3</span>
                      <span>Add-on services + Exclusive partnerships</span>
                    </li>
                  </ul> -->
                <router-link to="/admin">
                  <div class="flex justify-start">
                    <a class="inline-block mb-3 lg:mt-2 lg:mb-0 lg:mr-3 w-full lg:w-auto py-3 px-16 leading-loose bg-green-600 hover:bg-green-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200" href="/admin">Get Started</a>          
                  </div>
                </router-link>
              </div>
            </div>
            </div>
        </div>
    </section>




<!-- CTA -->
<div class="bg-gray-50">
  <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
    <h2 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
      <span class="block text-3xl lg:text-3xl">We're excited to have you join us.</span>
      <span class="block text-3xl lg:text-4xl text-green-600">Join Our Waiting List Today</span>
    </h2>
    <div class="mt-8 flex lg:mt-8 lg:flex-shrink-0 lg:mr-24">
      <div class="flex pb-8 w-full md:justify-start items-end">
        <div class="">
          <form action="https://admissiontrackerapp.us1.list-manage.com/subscribe/post?u=d8860953b0b16ce89484143b0&amp;id=7eb4c33354" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
            <div id="mc_embed_signup_scroll">
            <label for="mce-EMAIL"></label>
            <input type="email" value="" name="EMAIL" id="mce-EMAIL" placeholder="email address" required class=" email w-full bg-gray-100  border-2 bg-opacity-50 border-green-600 focus:ring-2 focus:ring-green-200 focus:bg-transparent focus:border-green-500 text-base outline-none text-gray-900 py-3 px-24 leading-8 transition-colors duration-200 ease-in-out" >
              <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
              <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_d8860953b0b16ce89484143b0_7eb4c33354" tabindex="-1" value=""></div>
              <div class="clear">
            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button  inline-flex text-white bg-green-600 border-0 py-4 px-2 lg:py-4 lg:px-6 focus:outline-none hover:bg-green-600 text-lg"></div>
              </div>
          </form>

           <!-- <mailchimp-subscribe
            url="https://admissiontrackerapp.us1.list-manage.com/subscribe/post?u=d8860953b0b16ce89484143b0&id=7eb4c33354"
            user-id="xxx"
            list-id="xxx"
            @error="onError"
            @success="onSuccess"
          >
            <template v-slot="{ subscribe, setEmail,  success, loading }">
              <form @submit.prevent="subscribe">
                <input type="email" @input="setEmail($event.target.value)" />
                <input @input="setEmail($event.target.value)" type="email" id="hero-field" placeholder="Join our waiting list" name="hero-field" class="w-full bg-gray-100  border-2 bg-opacity-50 border-green-600 focus:ring-2 focus:ring-green-200 focus:bg-transparent focus:border-green-500 text-base outline-none text-gray-900 py-3 px-24 leading-8 transition-colors duration-200 ease-in-out" />
                <button type="submit">Submit</button>
                <button type="submit" class="inline-flex text-white bg-green-600 border-0 py-4 px-2 lg:py-4 lg:px-6 focus:outline-none hover:bg-green-600 text-lg">Sign Up</button>
                <div v-if="error">{{ error }}</div>
                <div v-if="success">Yay!</div>
                <div v-if="loading">Loading…</div>
              </form>
            </template>
          </mailchimp-subscribe> -->
        <!-- <label for="hero-field" class="lg:leading-7 text-sm text-gray-600"></label> -->
        <!-- <input @input="setEmail($event.target.value)" type="email" id="hero-field" placeholder="Join our waiting list" name="hero-field" class="w-full bg-gray-100  border-2 bg-opacity-50 border-green-600 focus:ring-2 focus:ring-green-200 focus:bg-transparent focus:border-green-500 text-base outline-none text-gray-900 py-3 px-24 leading-8 transition-colors duration-200 ease-in-out" /> -->
        </div>
        <!-- <button type="submit" class="inline-flex text-white bg-green-600 border-0 py-4 px-2 lg:py-4 lg:px-6 focus:outline-none hover:bg-green-600 text-lg">Sign Up</button> -->
    </div>
  </div>
</div>



</div>
   
   <!-- Footer -->
    <home-footer></home-footer>


  </div>
</template>
<script>
import IndexNavbar from "@/components/Navbar/IndexNavbar.vue";
import Footer from '@/components/Footer/Footer.vue'

import lines from "@/assets/images/lines.svg"
import students from "@/assets/images/students.jpeg"
import greendarkup from "@/assets/images/elements/green-dark-up.svg"
import winggreendown from "@/assets/images/elements/wing-green-down.svg"
import grayright from "@/assets/images/elements/bullets-gray-right.svg"
import grayleft from "@/assets/images/elements/bullets-gray-left.svg"
import feature2 from "@/assets/images/commstudents2.jpeg"
import feature1 from "@/assets/images/commstudents.jpeg"
import apphero  from "@/assets/images/app_hero_1.a66466a3.png"
import HomeFooter from '../components/Footer/HomeFooter.vue';

// import MailchimpSubscribe from 'vue-mailchimp-subscribe'

const MailchimpSubscribe = require('vue-mailchimp-subscribe')



export default {
  data() {
    return {
      lines,
      students,
      greendarkup,
      winggreendown,
      grayright,
      grayleft,
      feature2,
      feature1,
      apphero
    };
  },
  components: {
    Footer,
    IndexNavbar,
    HomeFooter,
    MailchimpSubscribe

  },
  methods: {
    onError() {
      // handle error
      console.log('Nope!')
    },
    onSuccess() {
      // handle success
      console.log('Hi!')
    },
  },
};
</script>
