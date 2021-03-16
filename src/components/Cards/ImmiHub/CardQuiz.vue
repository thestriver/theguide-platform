<template>
    <section class="p-6 bg-coolGray-100 text-coolGray-800">
        <div class="container mx-auto lg:mt-10">
            <span class="block mb-2 text-lg font-medium tracking-widest text-center uppercase text-teal-accent-400">Immigration Bot</span>
            <h2 class="text-4xl font-bold text-center text-coolGray-900">Interacting With Our Immigration Bot is Easy</h2>
            <div class="grid gap-6 my-16 lg:grid-cols-3 mx-auto lg:mx-16">
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
            </div>
        </div>
    </section>

	<section class="bg-coolGray-100 text-coolGray-800">
		<div class="container flex flex-col justify-center p-4 mx-auto md:p-2">
			<div class="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-coolGray-300">
					
                    <button @click="reveal()" v-scroll-to="{ element: '#immquiz', duration: 1000  }" class="py-2 px-2  outline-none bg-teal-accent-400 rounded-xl  cursor-pointer focus:underline">START</button>

                     <transition name="fade" id="immquiz" class="lg:mt-8">
                        <div v-show="show" class="px-4 pb-4">
                            <card-quiz-inputs></card-quiz-inputs>
                        </div>
                     </transition>
				
				
			</div>
		</div>
	</section>
</template>

<script>
import CardQuizInputs from './CardQuizInputs.vue'
export default {
  components: { CardQuizInputs },
  data() {
      return {
          show: false,
      }
  },
  methods: {
      reveal() {
          this.show = !this.show
      }
  }
    
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