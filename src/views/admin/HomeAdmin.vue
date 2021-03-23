<template>
    <div class="px-4 bg-gray-900  py-6 mx-5 lg:mx-24 rounded-xl lg:my-14  sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-20 lg:py-20">
      <div class="grid lg:gap-20 gap-6 row-gap-8 lg:grid-cols-2">
        <div class="flex flex-col justify-center text-center lg:py-5  p-5 rounded-2xl bg-white">
          <div class="max-w-xl mb-6 lg:mb-6">
            <div>
              <p class="inline-block px-3 py-px lg:mb-6 lg:mt-5 mb-4 text-xs font-semibold tracking-wider text-gray-100  uppercase rounded-full bg-green-600">
                Find the right career opportunity
              </p>
            </div>
            <h2 class="max-w-lg lg:mb-6  font-sans lg:text-6xl font-bold tracking-tight text-gray-900 text-5xl sm:leading-none">
              Career Hub
              <!-- <span class="inline-block text-green-600">will love</span> -->
            </h2>
            <!-- <p class="text-base text-gray-700 md:text-lg">
              An AI-powered dashboard that matches talented international students like you with the right immigration path. <span class="relative inline-block text-green-600 font-semibold">
                  <span class="relative">
                   
                    Plus tons of tested guides, mini-bootcamps and resources</span>
                    </span>
            </p> -->
          </div>
          <router-link to="/admin/careerbot">
          <a aria-label="" class="inline-flex lg:px-10 lg:py-3 py-3 px-10 rounded-lg items-center font-semibold transition lg:text-xl duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-gray-100 bg-green-600 ">
            Get Started
            <svg class="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
            </svg>
          </a>
          </router-link>
        </div>

        <!-- Second -->
        <div class="relative  justify-center  text-center p-5  lg:py-10 lg:px-10 rounded-2xl bg-white">
            <div class="flex flex-col justify-center">
            <div class="max-w-xl mb-6 text-center ">
                <div>
                <p class="inline-block px-3 py-px mb-2 text-xs font-semibold tracking-wider text-gray-100 uppercase rounded-full bg-green-600">
                    DISCOVER EXCITING IMMIGRATION Pathways
                </p>
                </div>
                <h2 class="max-w-lg mb-1 font-sans lg:text-6xl font-bold tracking-tight text-gray-900 text-4xl sm:leading-none">
                Immigration Hub<br class="hidden md:block" />
                <!-- you
                <span class="inline-block text-green-600">will love</span> -->
                </h2>
                <!-- <p class="text-base text-gray-700 md:text-lg">
                An AI-powered dashboard that matches talented international students like you with the right immigration path. <span class="relative inline-block text-green-600 font-semibold">
                    <span class="relative">
                        Plus tons of tested guides, mini-bootcamps and resources</span>
                        </span>
                </p> -->
            </div>
            <router-link to="/admin/immigration-hub">
            <a aria-label="" class=" text-center inline-flex px-10 py-3 rounded-lg items-center font-semibold transition lg:text-xl duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110  text-gray-100 bg-green-600 ">
                Check It Out
                <svg class="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
                </svg>
                
            </a>
            </router-link>
            
            </div>

        

        </div>
      </div>
    </div>
</template>

<script>
export default {

  data() {
    return {
    
    };
  },
};
</script>