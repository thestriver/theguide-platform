<template>
    <div class="text-left rounded-xl px-4 py-14 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16">
      <div class="flex flex-col max-w-screen-lg overflow-hidden bg-white border border-green-600 rounded shadow-sm lg:flex-row sm:mx-auto">
        <div class="relative lg:w-1/2">
          <img :src="studentscomm1" alt="" class="object-cover w-full lg:absolute h-80 lg:h-full" />
          <svg class="absolute top-0 right-0 hidden h-full text-white lg:inline-block" viewBox="0 0 20 104" fill="currentColor">
            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104"></polygon>
          </svg>
        </div>
        <div class="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
          <div>
            <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                COMING SOON
            </p>
          </div>
          <h5 class="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
            COMMUNITY
          </h5>
          <p class="mb-5 text-gray-800">
            <span class="font-bold">With The Guide</span>, you join a goal-driven, country-specific community of like-minds. Together, we navigate the common hurdles international students face. We learn, grow and prosper together. 
          </p>
          <div class="flex items-center">
            <!-- <button
              type="submit"
              class="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-accent-400 hover:bg-green-500 focus:shadow-outline focus:outline-none"
            >
              JOIN TODAY
            </button> -->
            <!-- <div class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
             <div v-scroll-to="{ element: '#home-scroll', duration: 1000  }" class="text-black text-4xl cursor-pointer" >Scroll</div>
            </div> -->
          </div>
        </div>
        
      </div>
    </div>
</template>

<script>
import studentscomm1 from '@/assets/images/commstudents2.jpeg' 

export default {
name: 'HomeImm',
  data() {
    return {
      studentscomm1
    };
  },
  // methods: {
  //     scroll() {  
  //     document.getElementById('home-scroll').scrollIntoView({
  //       behavior: "smooth"
  //     });
  //   }
  // }
};
</script>
  