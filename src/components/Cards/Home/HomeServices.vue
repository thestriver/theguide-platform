<template>
  <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div class="grid gap-8 row-gap-5 md:grid-cols-2 cursor-pointer">
      <div class="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
        <div class="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-teal-accent-400 group-hover:scale-x-100"></div>
        <div class="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-teal-accent-400 group-hover:scale-y-100"></div>
        <div class="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-teal-accent-400 group-hover:scale-x-100"></div>
        <div class="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-teal-accent-400 group-hover:scale-y-100"></div>
        <div class="relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row">
          <div class="mb-6 mr-6 lg:mb-0">
            <div class="flex items-center justify-center w-20 h-20 rounded-full bg-teal-accent-400 lg:w-32 lg:h-32">
              <svg class="w-16 h-16 text-accent-teal-400 lg:w-20 lg:h-20" stroke="currentColor" viewBox="0 0 52 52">
                <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
              </svg>
            </div>
          </div>
          <div class="flex flex-col justify-between flex-grow text-left">
            <div>
              <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              COMING SOON
              </p>
            </div>
              
            <div>
              <h6 class="mb-2 font-semibold leading-5 lg:text-3xl">
                Resources Center
              </h6>
              <!-- <p class="mb-2 text-sm text-gray-900">
                Cheese on toast airedale the big cheese. Danish fontina cheesy grin airedale danish fontina taleggio the big cheese macaroni cheese port-salut.
              </p> -->
            </div>
            </div>
        </div>
      </div>
      <div class="relative p-px overflow-hidden transition duration-300 transform border cursor-pointer rounded shadow-sm hover:scale-105 group hover:shadow-xl">
        <div class="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-teal-accent-400 group-hover:scale-x-100"></div>
        <div class="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-teal-accent-400 group-hover:scale-y-100"></div>
        <div class="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-teal-accent-400 group-hover:scale-x-100"></div>
        <div class="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-teal-accent-400 group-hover:scale-y-100"></div>
        <div class="relative flex flex-col h-full p-5 bg-white rounded-sm lg:items-center lg:flex-row">
          <div class="mb-6 mr-6 lg:mb-0">
            <!-- <div class="flex items-center justify-center w-20 h-20 rounded-full bg-teal-accent-400 lg:w-32 lg:h-32">
              <svg class="w-16 h-16 text-accent-teal-400 lg:w-20 lg:h-20" stroke="currentColor" viewBox="0 0 52 52">
                <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
              </svg>
            </div> -->
          </div>
          <div class="flex flex-col justify-between flex-grow text-left">
              <div>
                <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                COMING SOON
                </p>
                </div>
            <div>
               <h6 class="mb-2 font-semibold leading-5 lg:text-3xl">
                Premium Add-ons
              </h6>
              <!-- <p class="mb-2 text-sm text-gray-900">
                A flower in my garden, a mystery in my panties. Heart attack never stopped old Big Bear. I didn't even know we were calling him Big Bear. We never had the chance to.
              </p> -->
            </div>
            <!-- <a href="/" aria-label="" class="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">Learn more</a> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
name: 'HomeServices',
  data() {
    return {
    
    };
  },
};
</script>