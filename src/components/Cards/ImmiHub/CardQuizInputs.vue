<template>
	<div  class="bg-coolGray-100 text-coolGray-900">
		<!-- <div  class="container mx-auto grid grid-cols-12">
			<div id="back" class="flex flex-col justify-center col-span-12 align-middle bg-gray-700 bg-no-repeat  lg:col-span-6 lg:h-auto" 
            :style="
            {'background-image': 'url(' + worried + ')', 'background-position': 'center', 'background-size': 'cover'}
            ">
			</div>
			<div class="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-coolGray-300">
				<div class="pt-1 pb-4 space-y-2">
					<p>Hi <strong> {{ userProfile.name }} </strong> </p>
                    <p>You're not alone in the hustle to succeed. There are millions of international students like you worried over their future too.</p>

                    <p>We understand how stressful post-study options can be which is why we created this bot to guide you towards likely options</p>
				</div>
				<div class="pt-6 pb-4 space-y-2">
					<div class="mt-4">

                        <span class="text-gray-700">How worried are you about your after-studies immigration future?</span>                
                        <div class="mt-2">
                            <label class="inline-flex items-center">
                                <input type="radio" class="form-radio text-green-500" name="1" value="1" v-model="picked" />
                                <span class="ml-2">1</span>
                            </label>
                            <label class="inline-flex items-center ml-6">
                            <input type="radio" class="form-radio" name="2" value="2" v-model="picked" />
                            <span class="ml-2">2</span>
                            </label>
                            <label class="inline-flex items-center ml-6">
                            <input type="radio" class="form-radio" name="3" value="3" v-model="picked" />
                            <span class="ml-2">3</span>
                            </label>
                            <label class="inline-flex items-center ml-6">
                            <input type="radio" class="form-radio" name="4 " value="4" v-model="picked" />
                            <span class="ml-2">4</span>
                            </label>
                            <label class="inline-flex items-center ml-6">
                            <input type="radio" class="form-radio text-red-800 " name="5" value="5" v-model="picked" />
                            <span class="ml-2">5</span>
                            </label>

                            <span class="mt-5 block">Picked: {{ picked }}</span>
                        </div>
                        <button @click="change()" v-if="display" class="rounded lg:px-1 lg:py-1 bg-teal-accent-400 mt-5" >
                            Next
                        </button>

                    <transition name="fade" class="lg:mt-8">
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
                        <button @click="change2()" v-if="display2" class="rounded lg:px-1 lg:py-1 bg-teal-accent-400 mt-5 ">
                            Next
                        </button>
                        </div>
                    </transition>


                    <transition name="fade" class="lg:mt-8">
                        <div v-if="show2" class="mt-2">
                            <span class="text-gray-700 mr-6">Are you open to exploring other wonderful countries with great work and immigration options after your studies?</span>
                            <label class="inline-flex items-center">
                            <input type="radio" class="form-radio" name="Yes" value="Yes" v-model="open" />
                            <span class="ml-2">Yes</span>
                            </label>
                            <label class="inline-flex items-center ml-6">
                            <input type="radio" class="form-radio" name="No" value="No" v-model="open" />
                            <span class="ml-2">No</span>
                            </label>

                            <span class="mt-6 block">Selected: {{ open }}</span>
                        </div>
                    </transition>  

                    </div>

				</div>

                <button  v-scroll-to="{ 
                    el: '#cardopp',
                    easing: [.6, .80, .30, 1.9],
                    duration: 2000 
                }"
                type="submit" v-if="submitted" @click="openOpportunities()"
                class="mt-8 inline-flex items-center justify-center h-12 px-5 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-accent-400  focus:shadow-outline focus:outline-none"
                >Submit</button>

			</div>
		</div> -->

        <!-- {{ filteredArr }}

        <div v-for=" arr in filteredArr" :key="arr.id" >
            <div v-if=" arr.selected == 'UK' " >
                <h1> Visa : {{ arr.pickedVisa }} </h1>
                <h1> Open : {{ arr.open }} </h1>
            </div>
        </div> -->

        <!-- Card -->

        <div v-for=" arr in filteredArr" :key="arr.id"  id="cardopp" class="mt-5 lg:mx-10   py-2 ">
            <h1 class=" text-green-400 text-center text-3xl font-bold my-6 ">Exciting Paths You Can Explore</h1>
            <ul class="my-10"  >
                <div v-if="
                 arr.selected === 'USA' && arr.open === 'No' || arr.selected === 'USA' && arr.open === 'Yes' || arr.selected === 'Canada' && arr.open === 'Yes' 
                || arr.selected === 'UK' && arr.open === 'Yes' || arr.selected === 'Australia' && arr.open === 'Yes' || arr.selected === 'Germany' && arr.open === 'Yes' 
                 ">
                 
                 <section class="lg:py-2 sm:py-12   text-coolGray-800">
                    <div class="container mx-auto space-y-4">
                        <div class="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                            <div class="flex flex-col border rounded-lg " 
                            :style="{'background-image':'url('+ usa +')', 'opacity': '1.5', 'background-position': 'center', 'background-size': 'cover'}"
                            >  
                            <div class="flex flex-col flex-1 p-6" >
                                    <div class="flex space-x-2 ">
                                        <img src="@/assets/images/usa-4.svg" alt="usalogo" class=" w-10 inline-flex " >
                                        <a href="#" class="flex text-xl tracking-wider uppercase text-blue-900">USA</a>
                                    </div>
                                    
                                    <div class="flex py-5">
                                        <h3 class="flex-1 text-2xl font-bold text-blue leading-snug">H1-B</h3>
                                        <p class="bg-blue-900 px-2 py-1 rounded-lg text-lg text-white" >3 years</p>
                                    </div>
                                    <div class="flex flex-wrap justify-between pt-3 space-x-4 text-xs text-coolGray-600">
                                        <span class="text-white text-sm bg-black px-2 py-2 rounded-md ">Ease: 3 / 5 </span>
                                        <span>
                                        <button @click="viewGuide(1)" type="submit" class="inline-flex justify-center py-1 px-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-white hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Learn More
                                        </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                             <div class="flex flex-col border rounded-lg " 
                            :style="{'background-image':'url('+ usa +')', 'opacity': '1.5', 'background-position': 'center', 'background-size': 'cover'}"
                            >  
                            <div class="flex flex-col flex-1 p-6" >
                                    <div class="flex space-x-2 ">
                                        <img src="@/assets/images/usa-4.svg" alt="usalogo" class=" w-10 inline-flex " >
                                        <a href="#" class="flex text-xl tracking-wider uppercase text-blue-900">USA</a>
                                    </div>
                                    
                                    <div class="flex py-5">
                                        <h3 class="flex-1 text-2xl font-bold text-blue leading-snug">OPT</h3>
                                        <p class="bg-blue-900 px-2 py-1 rounded-lg text-lg text-white" >1-3 years</p>
                                    </div>
                                    <div class="flex flex-wrap justify-between pt-3 space-x-4 text-xs text-coolGray-600">
                                        <span class="text-white text-sm bg-black px-2 py-2 rounded-md ">Ease: 4.5 / 5 </span>
                                        <span>
                                        <button @click="viewGuide(2)" type="submit" class="inline-flex justify-center py-1 px-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-white hover:text-green-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Learn More
                                        </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col border rounded-lg " 
                            :style="{'background-image':'url('+ usa +')', 'opacity': '1.5', 'background-position': 'center', 'background-size': 'cover'}"
                            >  
                            <div class="flex flex-col flex-1 p-6" >
                                    <div class="flex space-x-2 ">
                                        <img src="@/assets/images/usa-4.svg" alt="usalogo" class=" w-10 inline-flex " >
                                        <a href="#" class="flex text-xl tracking-wider uppercase text-blue-900">USA</a>
                                    </div>
                                    
                                    <div class="flex py-5">
                                        <h3 class="flex-1 text-2xl font-bold text-blue leading-snug">O-1 visa</h3>
                                        <p class="bg-blue-900 px-2 py-1 rounded-lg text-lg text-white" >3 years</p>
                                    </div>
                                    <div class="flex flex-wrap justify-between pt-3 space-x-4 text-xs text-coolGray-600">
                                        <span class="text-white text-sm bg-black px-2 py-2 rounded-md ">Ease: 2.5 / 5 </span>
                                        <span>
                                        <button @click="viewGuide(3)" type="submit" class="inline-flex justify-center py-1 px-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-white hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Learn More
                                        </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col border rounded-lg " 
                            :style="{'background-image':'url('+ usa +')', 'opacity': '1.5', 'background-position': 'center', 'background-size': 'cover'}"
                            >  
                            <div class="flex flex-col flex-1 p-6" >
                                    <div class="flex space-x-2 ">
                                        <img src="@/assets/images/usa-4.svg" alt="usalogo" class=" w-10 inline-flex " >
                                        <a href="#" class="flex text-xl tracking-wider uppercase text-blue-900">USA</a>
                                    </div>
                                    
                                    <div class="flex py-5">
                                        <h3 class="flex-1 text-2xl font-bold text-blue leading-snug">CPT</h3>
                                        <p class="bg-blue-900 px-2 py-0 rounded-lg text-lg text-white" >1 year</p>
                                    </div>
                                    <div class="flex flex-wrap justify-between pt-3 space-x-4 text-xs text-coolGray-600">
                                        <span class="text-white text-sm bg-black px-2 py-2 rounded-md ">Ease: 4 / 5 </span>
                                        <span>
                                        <button @click="viewGuide(4)" type="submit" class="inline-flex justify-center py-1 px-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-white hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Learn More
                                        </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
              
                </div>



                <div class="my-10" v-if="
                 arr.selected === 'Canada' && arr.open === 'No' || arr.selected === 'Canada' && arr.open === 'Yes' ||  arr.selected === 'USA' && arr.open === 'Yes' 
                 || arr.selected === 'UK' && arr.open === 'Yes'  || arr.selected === 'Australia' && arr.open === 'Yes' || arr.selected === 'Germany' && arr.open === 'Yes' 
                 
                 "  >

                 <section class="lg:py-2 sm:py-12   text-coolGray-800">
                    <div class="container mx-auto space-y-4">
                        <div class="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                            <div class="flex flex-col border rounded-lg " 
                            :style="{'background-image':'url('+ canada +')', 'opacity': '0.9', 'background-position': 'center', 'background-size': 'cover'}"
                            >  
                            <div class="flex flex-col flex-1 p-6" >
                                    <div class="flex space-x-2 ">
                                        <img src="@/assets/images/canada-logo.svg" alt="usalogo" class=" w-10 inline-flex " >
                                        <a href="#" class="flex text-xl font-semibold tracking-wider uppercase text-red-900">CANADA</a>
                                    </div>
                                    
                                    <div class="flex py-5">
                                        <h3 class="flex-1 text-2xl font-bold text-white  leading-snug">PGWP</h3>
                                        <p class="bg-red-900 px-2 py-1 rounded-lg text-lg text-white" >0.6 - 3 years</p>
                                    </div>
                                    <div class="flex flex-wrap justify-between pt-3 space-x-4 text-xs text-coolGray-600">
                                        <span class="text-white text-sm bg-black px-2 py-2 rounded-md ">Ease: 4 / 5 </span>
                                        <span>
                                        <button @click="viewGuide(5)" type="submit" class="inline-flex justify-center py-1 px-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-red-600 hover:bg-white hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Learn More
                                        </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                             <div class="flex flex-col border rounded-lg " 
                            :style="{'background-image':'url('+ canada +')', 'opacity': '0.9', 'background-position': 'center', 'background-size': 'cover'}"
                            >  
                            <div class="flex flex-col flex-1 p-6" >
                                    <div class="flex space-x-2 ">
                                        <img src="@/assets/images/canada-logo.svg" alt="usalogo" class=" w-10 inline-flex " >
                                        <a href="#" class="flex text-xl font-semibold tracking-wider uppercase text-red-900">CANADA</a>
                                    </div>
                                    
                                    <div class="flex py-5">
                                        <h3 class="flex-1 text-2xl font-bold text-white  leading-snug">PNP</h3>
                                        <p class="bg-red-900 px-2 py-1 rounded-lg text-lg text-white" >PR</p>
                                    </div>
                                    <div class="flex flex-wrap justify-between pt-3 space-x-4 text-xs text-coolGray-600">
                                        <span class="text-white text-sm bg-black px-2 py-2 rounded-md ">Ease: 2.5 / 5 </span>
                                        <span>
                                        <button @click="viewGuide(6)" type="submit" class="inline-flex justify-center py-1 px-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-red-600 hover:bg-white hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Learn More
                                        </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col border rounded-lg " 
                            :style="{'background-image':'url('+ canada +')', 'opacity': '0.9', 'background-position': 'center', 'background-size': 'cover'}"
                            >  
                            <div class="flex flex-col flex-1 p-6" >
                                    <div class="flex space-x-2 ">
                                        <img src="@/assets/images/canada-logo.svg" alt="usalogo" class=" w-10 inline-flex " >
                                        <a href="#" class="flex text-xl font-semibold tracking-wider uppercase text-red-900">CANADA</a>
                                    </div>
                                    
                                    <div class="flex py-5">
                                        <h3 class="flex-1 text-2xl font-bold text-white  leading-snug">Express Entry</h3>
                                        <p class="bg-red-900 px-2 py-1 rounded-lg text-lg text-white" >PR</p>
                                    </div>
                                    <div class="flex flex-wrap justify-between pt-3 space-x-4 text-xs text-coolGray-600">
                                        <span class="text-white text-sm bg-black px-2 py-2 rounded-md ">Ease: 3 / 5 </span>
                                        <span>
                                        <button @click="viewGuide(7)" type="submit" class="inline-flex justify-center py-1 px-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-red-600 hover:bg-white hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Learn More
                                        </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col border rounded-lg " 
                            :style="{'background-image':'url('+ canada +')', 'opacity': '0.9', 'background-position': 'center', 'background-size': 'cover'}"
                            >  
                            <div class="flex flex-col flex-1 p-6" >
                                    <div class="flex space-x-2 ">
                                        <img src="@/assets/images/canada-logo.svg" alt="usalogo" class=" w-10 inline-flex " >
                                        <a href="#" class="flex text-xl font-semibold tracking-wider uppercase text-red-900">CANADA</a>
                                    </div>
                                    
                                    <div class="flex py-5">
                                        <h3 class="flex-1 text-2xl font-bold text-white  leading-snug">Startup Visa</h3>
                                        <p class="bg-red-900 px-2 py-1 rounded-lg text-lg text-white" >PR</p>
                                    </div>
                                    <div class="flex flex-wrap justify-between pt-3 space-x-4 text-xs text-coolGray-600">
                                        <span class="text-white text-sm bg-black px-2 py-2 rounded-md ">Ease: 2.5 / 5 </span>
                                        <span>
                                        <button @click="viewGuide(8)" type="submit" class="inline-flex justify-center py-1 px-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-red-600 hover:bg-white hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Learn More
                                        </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                </div>


                

                <div v-if=" 
                arr.selected === 'UK' && arr.open === 'No' || arr.selected === 'UK' && arr.open === 'Yes' || arr.selected === 'USA' && arr.open === 'Yes' 
                || arr.selected === 'Canada' && arr.open === 'Yes'  || arr.selected === 'Australia' && arr.open === 'Yes' || arr.selected === 'Germany' && arr.open === 'Yes' 
                " >
                    <section class="lg:py-2 sm:py-12   text-coolGray-800">
                    <div class="container mx-auto space-y-4">
                        <div class="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                            <div class="flex flex-col border rounded-lg " 
                            :style="{'background-image':'url('+ uk +')', 'opacity': '0.9', 'background-position': 'center', 'background-size': 'cover'}"
                            >  
                            <div class="flex flex-col flex-1 p-6" >
                                    <div class="flex space-x-2 ">
                                        <img src="@/assets/images/united-kingdom-2.svg" alt="usalogo" class=" w-10 inline-flex " >
                                        <a href="#" class="flex text-xl font-semibold tracking-wider uppercase text-blue-900">U.K</a>
                                    </div>
                                    
                                    <div class="flex py-5">
                                        <h3 class="flex-1 text-2xl font-bold  text-white  leading-snug">Post-Study</h3>
                                        <p class="bg-blue-900 px-2 py-1 rounded-lg text-lg text-white">2 years</p>
                                    </div>
                                    <div class="flex flex-wrap justify-between pt-3 space-x-4 text-xs text-coolGray-600">
                                        <span class="text-white text-sm bg-black px-2 py-2 rounded-md ">Ease: 4.5 / 5 </span>
                                        <span>
                                        <button @click="viewGuide(9)" type="submit" class="inline-flex justify-center py-1 px-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-white hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Learn More
                                        </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col border rounded-lg " 
                            :style="{'background-image':'url('+ uk +')', 'opacity': '0.9', 'background-position': 'center', 'background-size': 'cover'}"
                            >  
                            <div class="flex flex-col flex-1 p-6" >
                                    <div class="flex space-x-2 ">
                                        <img src="@/assets/images/united-kingdom-2.svg" alt="usalogo" class=" w-10 inline-flex " >
                                        <a href="#" class="flex text-xl font-semibold tracking-wider uppercase text-blue-900">U.K</a>
                                    </div>
                                    
                                    <div class="flex py-5">
                                        <h3 class="flex-1 text-2xl font-bold text-white   leading-snug">Tier 2</h3>
                                        <p class="bg-blue-900 px-2 py-1 rounded-lg text-lg text-white">5 years</p>
                                    </div>
                                    <div class="flex flex-wrap justify-between pt-3 space-x-4 text-xs text-coolGray-600">
                                        <span class="text-white text-sm bg-black px-2 py-2 rounded-md ">Ease: 4 / 5 </span>
                                        <span>
                                        <button @click="viewGuide(10)" type="submit" class="inline-flex justify-center py-1 px-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-white hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Learn More
                                        </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col border rounded-lg " 
                            :style="{'background-image':'url('+ uk +')', 'opacity': '0.9', 'background-position': 'center', 'background-size': 'cover'}"
                            >  
                            <div class="flex flex-col flex-1 p-6" >
                                    <div class="flex space-x-2 ">
                                        <img src="@/assets/images/united-kingdom-2.svg" alt="usalogo" class=" w-10 inline-flex " >
                                        <a href="#" class="flex text-xl font-semibold tracking-wider uppercase text-blue-900">U.K</a>
                                    </div>
                                    
                                    <div class="flex py-5">
                                        <h3 class="flex-1 text-2xl font-bold text-white   leading-snug">Tier 1 (E)</h3>
                                        <p class="bg-blue-900 px-2 py-1 rounded-lg text-lg text-white">5+ years</p>
                                    </div>
                                    <div class="flex flex-wrap justify-between pt-3 space-x-4 text-xs text-coolGray-600">
                                        <span class="text-white text-sm bg-black px-2 py-2 rounded-md ">Ease: 4 / 5 </span>
                                        <span>
                                        <button @click="viewGuide(11)" type="submit" class="inline-flex justify-center py-1 px-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-white hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Learn More
                                        </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col border rounded-lg " 
                            :style="{'background-image':'url('+ uk +')', 'opacity': '0.9', 'background-position': 'center', 'background-size': 'cover'}"
                            >  
                            <div class="flex flex-col flex-1 p-6" >
                                    <div class="flex space-x-2 ">
                                        <img src="@/assets/images/united-kingdom-2.svg" alt="usalogo" class=" w-10 inline-flex " >
                                        <a href="#" class="flex text-xl font-semibold tracking-wider uppercase text-blue-900">U.K</a>
                                    </div>
                                    
                                    <div class="flex py-5">
                                        <h3 class="flex-1 text-2xl font-bold text-white   leading-snug">Startup Visa</h3>
                                        <p class="bg-blue-900 px-2 py-1 rounded-lg text-lg text-white">2 years</p>
                                    </div>
                                    <div class="flex flex-wrap justify-between pt-3 space-x-4 text-xs text-coolGray-600">
                                        <span class="text-white text-sm bg-black px-2 py-2 rounded-md ">Ease: 3.5 / 5 </span>
                                        <span>
                                        <button @click="viewGuide(12)" type="submit" class="inline-flex justify-center py-1 px-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-white hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Learn More
                                        </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                </div>
                

                <div v-if="
                arr.selected === 'Australia' && arr.open === 'No' || arr.selected === 'Australia' && arr.open === 'Yes' || arr.selected === 'USA' && arr.open === 'Yes' 
                || arr.selected === 'Canada' && arr.open === 'Yes' || arr.selected === 'UK' && arr.open === 'Yes' || arr.selected === 'Germany' && arr.open === 'Yes' 
                 " >
                 <section class="lg:py-2 sm:py-12 lg:mt-10 text-coolGray-800">
                    <div class="container mx-auto space-y-4">
                        <div class="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                            <div class="flex flex-col border rounded-lg " 
                            :style="{'background-image':'url('+ aus +')', 'opacity': '0.9', 'background-position': 'center', 'background-size': 'cover'}"
                            >  
                            <div class="flex flex-col flex-1 p-6" >
                                    <div class="flex space-x-2 ">
                                        <img src="@/assets/images/australia-2.svg" alt="usalogo" class=" w-10 h-8 inline-flex " >
                                        <a href="#" class="flex text-xl font-semibold tracking-wider uppercase text-blue-900">Australia</a>
                                    </div>
                                    
                                    <div class="flex py-5">
                                        <h3 class="flex-1 text-2xl font-bold text-white   leading-snug">Post study</h3>
                                        <p class="bg-black px-2 py-1 rounded-lg text-lg text-white">2-4 years</p>
                                    </div>
                                    <div class="flex flex-wrap justify-between pt-3 space-x-4 text-xs text-coolGray-600">
                                        <span class="text-white text-sm bg-black px-2 py-2 rounded-md ">Ease: 4 / 5 </span>
                                        <span>
                                        <button @click="viewGuide(13)" type="submit" class="inline-flex justify-center py-1 px-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-white hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Learn More
                                        </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col border rounded-lg " 
                            :style="{'background-image':'url('+ aus +')', 'opacity': '0.9', 'background-position': 'center', 'background-size': 'cover'}"
                            >  
                            <div class="flex flex-col flex-1 p-6" >
                                    <div class="flex space-x-2 ">
                                        <img src="@/assets/images/australia-2.svg" alt="usalogo" class=" w-10 h-8 inline-flex " >
                                        <a href="#" class="flex text-xl font-semibold tracking-wider uppercase text-blue-900">Australia</a>
                                    </div>
                                    
                                    <div class="flex py-5">
                                        <h3 class="flex-1 text-2xl font-bold text-white   leading-snug">Residence Visa</h3>
                                        <p class="bg-black px-2 py-1 rounded-lg text-lg text-white">PR</p>
                                    </div>
                                    <div class="flex flex-wrap justify-between pt-3 space-x-4 text-xs text-coolGray-600">
                                        <span class="text-white text-sm bg-black px-2 py-2 rounded-md ">Ease: 3.5 / 5 </span>
                                        <span>
                                        <button @click="viewGuide(14)" type="submit" class="inline-flex justify-center py-1 px-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-600 hover:bg-white hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Learn More
                                        </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                </div>

                

                <div v-if="
                 arr.selected === 'Germany' && arr.open === 'No' || arr.selected === 'Germany' && arr.open === 'Yes' || arr.selected === 'USA' && arr.open === 'Yes' 
                 || arr.selected === 'Canada' && arr.open === 'Yes' || arr.selected === 'UK' && arr.open === 'Yes' 
                 || arr.selected === 'Australia' && arr.open === 'Yes' 
                 "  >
               
                 <section class="lg:py-2 sm:py-12 lg:mt-10 text-coolGray-800">
                    <div class="container mx-auto space-y-4">
                        <div class="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                            <div class="flex flex-col border rounded-lg " 
                            :style="{'background-image':'url('+ ger +')', 'opacity': '0.9', 'background-position': 'center', 'background-size': 'cover'}"
                            >  
                            <div class="flex flex-col flex-1 p-6" >
                                    <div class="flex space-x-2 ">
                                        <img src="@/assets/images/germanyc.svg" alt="usalogo" class=" w-10 inline-flex " >
                                        <a href="#" class="flex text-xl font-semibold tracking-wider uppercase text-yellow-900">Germany</a>
                                    </div>
                                    
                                    <div class="flex py-5">
                                        <h3 class="flex-1 text-2xl font-bold text-white   leading-snug">Post Study</h3>
                                        <p class="bg-yellow-900 px-2 py-1 rounded-lg text-lg text-white">18 months</p>
                                    </div>
                                    <div class="flex flex-wrap justify-between pt-3 space-x-4 text-xs text-coolGray-600">
                                        <span class="text-white text-sm bg-black px-2 py-2 rounded-md ">Ease: 4 / 5 </span>
                                        <span>
                                        <button @click="viewGuide(15)" type="submit" class="inline-flex justify-center py-1 px-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-yellow-900 hover:bg-white hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Learn More
                                        </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col border rounded-lg " 
                            :style="{'background-image':'url('+ ger +')', 'opacity': '0.9', 'background-position': 'center', 'background-size': 'cover'}"
                            >  
                            <div class="flex flex-col flex-1 p-6" >
                                    <div class="flex space-x-2 ">
                                        <img src="@/assets/images/germanyc.svg" alt="usalogo" class=" w-10 inline-flex " >
                                        <a href="#" class="flex text-xl font-semibold tracking-wider uppercase text-yellow-900">Germany</a>
                                    </div>
                                    
                                    <div class="flex py-5">
                                        <h3 class="flex-1 text-2xl font-bold text-white   leading-snug">Work Permit</h3>
                                        <p class="bg-yellow-900 px-2 py-1 rounded-lg text-lg text-white">2-4 years</p>
                                    </div>
                                    <div class="flex flex-wrap justify-between pt-3 space-x-4 text-xs text-coolGray-600">
                                        <span class="text-white text-sm bg-black px-2 py-2 rounded-md ">Ease: 3 / 5 </span>
                                        <span>
                                        <button @click="viewGuide(16)" type="submit" class="inline-flex justify-center py-1 px-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-yellow-900 hover:bg-white hover:text-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Learn More
                                        </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                </div>
            </ul>

           <!-- <div class=" border-2 border-teal-accent-400 lg:px-10 px-2 py-2 mt-10 rounded-xl ">
                <p class="lg:my-1">  <span class="bg-teal-accent-400 px-2 py-1 rounded-full ">Coming Soon <br> </span> Our Resource Center will contain loads of in-depth, tested and trusted how-to guides on each Recommended path. Plus success stories from international students 
            who have navigated such path successfully. </p>
           </div> -->
            

        </div>
      
	
    </div>
</template>

<script>
import { mapState } from 'vuex'
import usa from "@/assets/images/empire-state.jpeg"
import canada from "@/assets/images/can4.jpg"
import uk from "@/assets/images/uk2.jpg"
import aus from "@/assets/images/aus1.jpeg"
import ger from "@/assets/images/ger2.jpg"
export default {
    data() {
        return {
            usa, canada, uk, aus, ger,
            picked: '',
            selected: '',
            open: '',
            opportunities: false,
            submitted: false,
            show: false,
            show2: false,
            display: true,
            display2: false,
            showComponent: true,
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
        viewGuide(id){
            this.$store.dispatch('createId', id)
            this.$router.push('/admin/immguides')
        },
        change() {
            this.show = !this.show,
            this.display = false
            this.display2 = true
            
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
    },
     computed: {
    ...mapState(['userProfile', 'getDataCollected']),
    filteredArr(){
      let filt = []
      for ( let i = 0 ; i < this.getDataCollected.length; i++ ){
        if(this.getDataCollected[i].userName === this.userProfile.name ){
          filt.push(this.getDataCollected[i])
        }
      }
      // const filteredData = this.getDataCollected.filter( dat => dat.userName  == this.userProfile.name )
      // const filt = filteredData
      //  return filteredData
      // console.log(6, filt)
      return filt
      
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