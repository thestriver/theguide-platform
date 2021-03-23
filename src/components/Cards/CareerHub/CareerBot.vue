<template>
    <section class="p-6 bg-coolGray-100 text-coolGray-800">
        <card-category class="hidden lg:block "></card-category>
        <div class="container mx-auto lg:mt-10">
            <span class="block mb-2 text-lg font-medium tracking-widest text-center uppercase text-teal-accent-400">Career Bot</span>
            <h2 class="text-4xl font-bold text-center text-coolGray-900">Interacting With Our Career Bot is Easy</h2>
            <!-- <div class="grid gap-6 my-16 lg:grid-cols-3 mx-auto lg:mx-16">
                <div class="flex flex-col p-8 space-y-4 rounded-md bg-teal-accent-400">
                    <div class="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-white text-coolGray-50">1</div>
                    <p class="text-lg font-semibold">
                        <b>Fill -</b> Click the start button and fill the form
                    </p>
                </div>
                <div class="flex flex-col p-8 space-y-4 rounded-md bg-teal-accent-400">
                    <div class="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-white text-coolGray-50">2</div>
                    <p class="text-lg font-semibold">
                        <b>Submit - </b>Click the submit button
                    </p>
                </div>
                <div class="flex flex-col p-8 space-y-4 rounded-md bg-teal-accent-400">
                    <div class="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full bg-white text-coolGray-50">3</div>
                    <p class="text-lg font-semibold">
                        <b>Voila! </b>You get matched with the right immigration path.
                    </p>
                </div>
            </div> -->
            <section class="text-gray-900">
                <div class="container max-w-xl py-4 mx-auto space-y-10 lg:px-8 lg:max-w-7xl">
                    <div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div>
                            <div class="mt-12 space-y-8">
                            <div class="flex">
                                <div class="flex-shrink-0">
                                <div class="flex items-center justify-center w-12 h-12 rounded-md bg-teal-accent-400 text-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                </div>
                                <div class="ml-4">
                                <h4 class="text-lg font-medium leading-6 text-gray-900">Step 1:</h4>
                                <p class="mt-2 text-gray-600">Click the start button and fill the form</p>
                                </div>
                            </div>
                            
                            <div class="flex">
                                <div class="flex-shrink-0">
                                <div class="flex items-center justify-center w-12 h-12 rounded-md bg-teal-accent-400 text-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                </div>
                                <div class="ml-4">
                                <h4 class="text-lg font-medium leading-6 text-gray-900">Step 3:</h4>
                                <p class="mt-2 text-gray-600">Voila! You get matched with career opportunities that suits your preferences.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="flex mt-10 lg:-mt-20">
                                <div class="flex-shrink-0">
                                <div class="flex items-center justify-center w-12 h-12 rounded-md bg-teal-accent-400 text-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                </div>
                                <div class="ml-4">
                                <h4 class="text-lg font-medium leading-6 text-gray-900">Step 2</h4>
                                <p class="mt-2 text-gray-600">Submit - Click the submit button</p>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
        
        </div>
    </section>

	<section class="bg-coolGray-100 text-coolGray-800">
		<div class="container flex flex-col justify-center mx-auto ">
			<div class="flex flex-col divide-y px-8 lg:px-12 xl:px-32 divide-coolGray-300">
					
                    <button @click="reveal()" 
                    v-scroll-to="{ element: '#careerquiz', duration: 1000  }" 
                    class="py-2 px-2  outline-none bg-teal-accent-400 rounded-xl  cursor-pointer focus:underline">START</button>

                     <transition name="fade" id="careerquiz" class="lg:mt-8">
                        <div v-show="show" class="px-4 pb-4">
                            <career-bot-quiz></career-bot-quiz>
                        </div>
                     </transition>
				
				
			</div>
		</div>
	</section>
</template>

<script>

import CardCategory from './CardCategory.vue'
import CareerBotQuiz from './CareerBotQuiz.vue'

export default {
  components: {CareerBotQuiz, CardCategory  },
  data() {
      return {
          show: false,
      }
  },
  methods: {
      reveal() {
          this.show = !this.show
      }
  },
  
    
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>