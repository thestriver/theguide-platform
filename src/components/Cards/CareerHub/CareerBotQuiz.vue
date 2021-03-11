<template>
	<div  class="bg-coolGray-100 text-coolGray-900">
		<div  class="container mx-auto grid grid-cols-12">
			<div id="back" class="flex flex-col justify-center col-span-12 align-middle bg-gray-700 bg-no-repeat  lg:col-span-6 lg:h-auto" 
            :style="
            {'background-image': 'url(' + dream + ')', 'background-position': 'center', 'background-size': 'cover'}
            ">
			</div>
			<div class="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-coolGray-300">
				<div class="pt-1 pb-4 space-y-2">
					<p>Hi <strong> Tunde.</strong> Your Career Bot Here!  </p>
                    <!-- <p>You're not alone in the hustle to succeed. There are millions of international students like you worried over their future too.</p> -->

                    <p>I understand how stressful sieving through hundreds of job opportunities to find the right one. Please answer the questions below  
                        so I can guide you towards our curated opportunities.</p>
                    <p>I'm excited to help you find your next job. Let's get started.</p>
				</div>
				<div class="pt-6 pb-4 space-y-2">
					<div class="mt-4">

                        <span class="text-gray-700">For what visa category are you looking for a job? </span>                
                        <div class="mt-2">
                            <label class="inline-flex items-center">
                                <input type="radio" class="form-radio text-green-500" name="OPT" value="OPT" v-model="pickedVisa" />
                                <span class="ml-2">OPT</span>
                            </label>
                            <label class="inline-flex items-center ml-6">
                            <input type="radio" class="form-radio" name="Tier 2" value="Tier 2" v-model="pickedVisa" />
                            <span class="ml-2">Tier 2</span>
                            </label>
                            <label class="inline-flex items-center ml-4">
                            <input type="radio" class="form-radio" name="Internship" value="Internship" v-model="pickedVisa" />
                            <span class="ml-2">Internship</span>
                            </label>
                            <label class="inline-flex items-center ml-4">
                            <input type="radio" class="form-radio" name="PGWP" value="PGWP" v-model="pickedVisa" />
                            <span class="ml-2">PGWP</span>
                            </label>
                            <label class="inline-flex items-center ml-4">
                            <input type="radio" class="form-radio text-red-800 " name="H1b" value="H1b" v-model="pickedVisa" />
                            <span class="ml-2">H1b</span>
                            </label>

                            <span class="mt-5 block">Picked: {{ pickedVisa }}</span>
                        </div>
                        <button @click="change()" v-if="display" class="underline bg-teal-accent-400 mt-5" >
                            Next
                        </button>


                        <transition name="fade" class="lg:mt-8">
                        <div v-if="show" class="mt-2">
                            <span class="text-gray-700 mr-6">
                                Part-time or Full Time?
                            </span>
                            <label class="inline-flex items-center">
                            <input type="radio" class="form-radio" name="Part-Time" value="Part-Time" v-model="openTime" />
                            <span class="ml-2">Part-Time</span>
                            </label>
                            <label class="inline-flex items-center ml-6">
                            <input type="radio" class="form-radio" name="Full-Time" value="Full-Time" v-model="openTime" />
                            <span class="ml-2">Full-Time</span>
                            
                            </label>

                            <span class="my-6 block">Selected: {{ openTime }}</span>

                            
                            <!-- <button @click="change2()" v-if="display2" class="underline bg-teal-accent-400 mt-5 ">
                            Next
                            </button> -->
                            <router-link to="/career-hub">
                                <button
                                type="submit" v-if="submitted" 
                                class="mt-8 inline-flex items-center justify-center h-12 lg:px-52 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-accent-400  focus:shadow-outline focus:outline-none"
                                >Submit</button>
                            </router-link>

                        </div>

                        
                    </transition>  

                    <!-- <transition name="fade" class="lg:mt-8">
                        <div>
                            <label v-if="show" class="block mt-4">
                            <span class="text-gray-700">Which country are you currently studying?</span>
                            <select v-model="selected" class="w-1/4">
                                <option disabled value="">Please select one</option>
                                <option v-for="option in options" :key="option.id" :value="option.value" class="block mt-1 form-select" >
                                {{ option.text }} 
                                </option>
                            </select>
                            <span class="mt-6 block">Selected: {{ selected }}</span>
                        </label>
                        <button @click="change2()" v-if="display2" class="underline bg-teal-accent-400 mt-5 ">
                            Next
                        </button>
                        </div>
                    </transition> -->


                    <!-- <transition name="fade" class="lg:mt-8">
                        <div v-if="show2" class="mt-2">
                            <span class="text-gray-700 mr-6">
                                Part-time or Full Time?
                            </span>
                            <label class="inline-flex items-center">
                            <input type="radio" class="form-radio" name="Part-Time" value="Part-Time" v-model="openTime" />
                            <span class="ml-2">Part-Time</span>
                            </label>
                            <label class="inline-flex items-center ml-6">
                            <input type="radio" class="form-radio" name="Full-Time" value="Full-Time" v-model="openTime" />
                            <span class="ml-2">Full-Time</span>
                            </label>

                            <span class="mt-6 block">Selected: {{ openTime }}</span>
                        </div>
                    </transition>   -->

                    </div>

				</div>

                
			</div>
		</div>

        <!-- Card -->

        <!-- <div v-if="opportunities" id="cardopp" class="mt-5 bg-gray-100 lg:px-20 py-2 ">
            <h1 class=" text-teal-accent-400 font-bold my-6 ">Recommended Paths For You</h1>
            <ul>
                <div v-if="
                 selected === 'USA' && open === 'No' || selected === 'USA' && open === 'Yes' || selected === 'Canada' && open === 'Yes' 
                || selected === 'UK' && open === 'Yes' || selected === 'Australia' && open === 'Yes' || selected === 'Germany' && open === 'Yes' 
                 ">
                <li class="semi-bold text-xl">USA</li>
                <li>OPT</li>
                <li>H1-B</li>
                <li>O1-visa</li>

                    <hr class="my-5">
                </div>



                <div v-if="
                 selected === 'Canada' && open === 'No' || selected === 'Canada' && open === 'Yes' ||  selected === 'USA' && open === 'Yes' 
                 || selected === 'UK' && open === 'Yes'  || selected === 'Australia' && open === 'Yes' || selected === 'Germany' && open === 'Yes' 
                 
                 "  >
                <li class="semi-bold text-xl" >Canada</li>
                <li>Startup Visa</li>
                <li>PGWP - Post Graduation Work Permit</li>

                    <hr class="my-5">
                </div>


                

                <div v-if=" 
                selected === 'UK' && open === 'No' || selected === 'UK' && open === 'Yes' || selected === 'USA' && open === 'Yes' 
                || selected === 'Canada' && open === 'Yes'  || selected === 'Australia' && open === 'Yes' || selected === 'Germany' && open === 'Yes' 
                " >
                    <li class="semi-bold text-xl" >UK</li>
                    <li>Startup Visa</li>
                    <li>Tier 2</li>
                    <li>Tier 1 - Exceptional Promising Talent</li>
                    <li>Post Study Work Permit</li>

                    <hr class="my-5">
                </div>
                

                <div v-if="
                selected === 'Australia' && open === 'No' || selected === 'Australia' && open === 'Yes' || selected === 'USA' && open === 'Yes' 
                || selected === 'Canada' && open === 'Yes' || selected === 'UK' && open === 'Yes' || selected === 'Germany' && open === 'Yes' 
                 " >
                <li class="semi-bold text-xl">Australia</li>
                <li>Post Graduate Work permit</li>

                    <hr class="my-5">
                </div>

                

                <div v-if="
                 selected === 'Germany' && open === 'No' || selected === 'Germany' && open === 'Yes' || selected === 'USA' && open === 'Yes' 
                 || selected === 'Canada' && open === 'Yes' || selected === 'UK' && open === 'Yes' 
                 || selected === 'Australia' && open === 'Yes' 
                 "  >
                <li class="semi-bold text-xl">Germany</li>
                <li>Post Study Permit</li>
                </div>
            </ul>

            <p class="lg:my-14">  <span class="bg-teal-accent-400  ">Coming Soon:</span> Our Resource Center will contain loads of in-depth, tested and trusted how-to guides on each Recommended path. Plus success stories from international students 
            who have navigated such path successfully. </p>
            

        </div> -->
      
	</div>
</template>

<script>
import dream from "@/assets/images/dream-job.jpeg"
export default {
    data() {
        return {
            dream,
            pickedVisa: '',
            openTime: '',
            opportunities: false,
            submitted: false,
            show: false,
            show2: false,
            display: true,
            display2: false,
            showComponent: true,
            selected: 'USA',
            options: [
                { text: 'USA', value: 'USA' },
                { text: 'Canada', value: 'Canada' },
                { text: 'UK', value: 'UK' },
                { text: 'Australia', value: 'Australia' },
                { text: 'Germany', value: 'Germany' }
                // { text: 'Others', value: 'Others' }
            ]
        }
    },
    methods: {
        change() {
            this.show = !this.show,
            this.display = false
            this.display2 = true,
            this.submitted = true
            
        },
        change2() {
            this.show2 = !this.show2,
            this.display2 = false
            this.submitted = true
        },
        openOpportunities() {
            this.opportunities = true,
            this.showComponent = false
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