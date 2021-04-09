<template>
	<section class="p-6  text-gray-900">
		<div class="pt-10 mx-16 pb-4 space-y-2">
			<img class="hidden lg:block absolute top-0 left-0 mt-64 pt-40 text-green-600" src="@/assets/images/blue-dot-left-bars.svg" alt="">
			<img class="hidden lg:block absolute top-0 right-0 mt-40" src="@/assets/images/yellow-dot-right-shield.svg" alt="">
			<div class="hidden lg:block absolute top-0 left-0 mt-64 pt-64 ml-20">
				<svg viewBox="0 0 52 24" fill="currentColor" class="absolute top-0 left-0 z-0 hidden w-32  text-green-600 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
					<defs>
					<pattern id="192913ce-1f29-4abd-b545-0fbccfd2b0ec" x="0" y="0" width=".135" height=".30">
						<circle cx="1" cy="1" r=".7"></circle>
					</pattern>
					</defs>
					<rect fill="url(#192913ce-1f29-4abd-b545-0fbccfd2b0ec)" width="52" height="24"></rect>
				</svg>
			</div>
			<p class="text-3xl">Welcome <strong class="text-green-600 "> {{ userProfile.name }} </strong></p>
			<p>Please complete the form below to help us provide personalized career and immigration offers for you. </p>
		</div>
		<div class="container flex flex-col p-6 mx-auto rounded-xl shadow-xl border bg-white">
			<div class="mt-2 gap-6 p-6 rounded-md border shadow-sm bg-white">
					<span class="text-gray-900">For what visa category are you looking for a job? </span>   
					<label class="inline-flex items-center">
						<input type="radio" class="form-radio text-green-500" name="OPT" value="OPT" v-model="dataCollected.pickedVisa" />
						<span class="ml-2">OPT</span>
					</label>
					<label class="inline-flex items-center ml-6">
					<input type="radio" class="form-radio" name="Tier 2" value="Tier 2" v-model="dataCollected.pickedVisa" />
					<span class="ml-2">Tier 2</span>
					</label>
					<label class="inline-flex items-center ml-4">
					<input type="radio" class="form-radio" name="Internship" value="Internship" v-model="dataCollected.pickedVisa" />
					<span class="ml-2">Internship</span>
					</label>
					<label class="inline-flex items-center lg:ml-4">
					<input type="radio" class="form-radio" name="PGWP" value="PGWP" v-model="dataCollected.pickedVisa" />
					<span class="ml-2">PGWP</span>
					</label>
					<label class="inline-flex items-center ml-4">
					<input type="radio" class="form-radio text-red-800 " name="H1b" value="H1b" v-model="dataCollected.pickedVisa" />
					<span class="ml-2">H1b</span>
					</label>

					<span class="mt-5 block">Picked: {{ dataCollected.pickedVisa }}</span>
				<div class="mt-2">
					<span class="text-gray-900 mr-6">
						Part-time or Full Time?
					</span>
					<label class="inline-flex items-center">
					<input type="radio" class="form-radio" name="Part-Time" value="Part-Time" v-model="dataCollected.openTime" />
					<span class="ml-2">Part-Time</span>
					</label>
					<label class="inline-flex items-center ml-6">
					<input type="radio" class="form-radio" name="Full-Time" value="Full-Time" v-model="dataCollected.openTime" />
					<span class="ml-2">Full-Time</span>
					</label>

					<span class="my-6 block">Selected: {{ dataCollected.openTime }}</span>
				</div>
			</div>
			<div class="pt-6 pb-4 space-y-2">
				<div class="mt-4 gap-6 p-6 rounded-md shadow-sm border bg-white">
				<span class="text-gray-900">How worried are you about your after-studies immigration future?</span>                
                        <div class="mt-2">
                            <label class="inline-flex items-center">
                                <input type="radio" class="form-radio text-green-500" name="1" value="1" v-model="dataCollected.pickedNumber" />
                                <span class="ml-2">1</span>
                            </label>
                            <label class="inline-flex items-center ml-6">
                            <input type="radio" class="form-radio" name="2" value="2" v-model="dataCollected.pickedNumber" />
                            <span class="ml-2">2</span>
                            </label>
                            <label class="inline-flex items-center ml-6">
                            <input type="radio" class="form-radio" name="3" value="3" v-model="dataCollected.pickedNumber" />
                            <span class="ml-2">3</span>
                            </label>
                            <label class="inline-flex items-center ml-6">
                            <input type="radio" class="form-radio" name="4 " value="4" v-model="dataCollected.pickedNumber" />
                            <span class="ml-2">4</span>
                            </label>
                            <label class="inline-flex items-center ml-6">
                            <input type="radio" class="form-radio text-red-800 " name="5" value="5" v-model="dataCollected.pickedNumber" />
                            <span class="ml-2">5</span>
                            </label>
                            <span class="mt-5 block">Picked: {{ dataCollected.pickedNumber }}</span>
                        </div>          
						<div>
							<label class="block mt-4">
							<span class="text-gray-900">Which country are you currently studying?</span>
							<select v-model="dataCollected.selected" class="w-1/4 ml-10 border-green-600 ">
								<option disabled value="">Please select one</option>
								<option v-for="option in options" :key="option.id" :value="option.value" class="block mt-1 form-select" >
								{{ option.text }} 
								</option>
							</select>
							<span class="mt-6 block">Selected: {{ dataCollected.selected }}</span>
							</label>		
						</div>
                        <div class="mt-2">
                            <span class="text-gray-900 mr-6">Are you open to exploring other wonderful countries with great work and immigration options after your studies?</span>
                            <label class="inline-flex items-center">
                            <input type="radio" class="form-radio" name="Yes" value="Yes" v-model="dataCollected.open" />
                            <span class="ml-2">Yes</span>
                            </label>
                            <label class="inline-flex items-center ml-6">
                            <input type="radio" class="form-radio" name="No" value="No" v-model="dataCollected.open" />
                            <span class="ml-2">No</span>
                            </label>
                            <span class="mt-6 block">Selected: {{ dataCollected.open }}</span>
                        </div>
				</div>
			</div>
			<button @click="visa()"
				type="submit"
				class="mt-8 inline-flex items-center justify-center h-12 lg:px-52 px-24 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-600 hover:bg-green-400 focus:shadow-outline focus:outline-none"
			>Submit
			</button>
		</div>
	</section>
</template>
<script>
import { mapState } from 'vuex'

export default {
	data(){
		return {
			dataCollected: {
				pickedVisa: '',
				openTime: '',
				pickedNumber: '',
				open: '',
				selected: 'USA'
			},
			options: [
                { text: 'USA', value: 'USA' },
                { text: 'Canada', value: 'Canada' },
                { text: 'UK', value: 'UK' },
                { text: 'Australia', value: 'Australia' },
                { text: 'Germany', value: 'Germany' }
                // { text: 'Others', value: 'Others' }
			],
		}
	},
	methods: {
		visa(){
            this.$store.dispatch('createDataFetch', {
				pickedVisa: this.dataCollected.pickedVisa, openTime: this.dataCollected.openTime, 
				pickedNumber: this.dataCollected.pickedNumber,
				open: this.dataCollected.open, selected: this.dataCollected.selected
			})
            this.$router.push('/admin/')
        }
	},
	computed: {
    ...mapState(['userProfile'])
  },
}
</script>
