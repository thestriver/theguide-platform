<template>
	<div  class="bg-coolGray-100 text-coolGray-900">
		<div  class="container mx-auto grid grid-cols-12">
			<div id="back" class="flex flex-col justify-center col-span-12 align-middle bg-gray-700 bg-no-repeat  lg:col-span-6 lg:h-auto" 
            :style="
            {'background-image': 'url(' + worried + ')', 'background-position': 'center', 'background-size': 'cover'}
            ">
			</div>
			<div class="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-coolGray-300">
				<div class="pt-1 pb-4 space-y-2">
					<p>Hi <strong> Tunde.</strong> </p>
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

                            <!-- <span class="mt-5 block">Picked: {{ picked }}</span> -->
                        </div>
                        <button @click="change()" v-if="display" class="underline bg-teal-accent-400 mt-5" >
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
                            <!-- <span class="mt-6 block">Selected: {{ selected }}</span> -->
                        </label>
                        <button @click="change2()" v-if="display2" class="underline bg-teal-accent-400 mt-5 ">
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

                            <!-- <span class="mt-6 block">Selected: {{ open }}</span> -->
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
		</div>

        <!-- Card -->

        <div v-if="opportunities" id="cardopp" class="mt-5 lg:min-w-full lg:-mx-40   py-2 ">
            <h1 class=" text-teal-accent-400 text-center text-3xl font-bold my-6 ">Exciting Paths You Can Explore</h1>
            <ul>
                <div v-if="
                 selected === 'USA' && open === 'No' || selected === 'USA' && open === 'Yes' || selected === 'Canada' && open === 'Yes' 
                || selected === 'UK' && open === 'Yes' || selected === 'Australia' && open === 'Yes' || selected === 'Germany' && open === 'Yes' 
                 ">
                 <!-- <li class="semi-bold text-xl">USA</li> -->
                 <section class="lg:py-2 sm:py-12 bg-gray-900  text-coolGray-800">
                    <div class="container mx-auto space-y-4">
                        <div class="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                            <div class="flex flex-col bg-white">
                                <div class="flex flex-col flex-1 p-6">
                                    
                                    <a href="#" class="text-md tracking-wider uppercase hover:underline text-green-600">USA</a>
                                    <h3 class="flex-1 py-2 text-lg font-semibold leading-snug">H1-B</h3>
                                    <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-600">
                                        <span>Ease: 3 </span>
                                        <span>
                            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Learn More
                            </button>
                            </span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col bg-white">
                                <div class="flex flex-col flex-1 p-6">
                                    <a href="#" aria-label="OPT"></a>
                                    <a href="#" class="text-md tracking-wider uppercase hover:underline text-green-600">USA</a>
                                    <h3 class="flex-1 py-2 text-lg font-semibold leading-snug">OPT</h3>
                                    <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-600">
                                        <span>Ease: 4.5 </span>
                                        <span>
                            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Learn More
                            </button>
                            </span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col bg-white">
                        <div class="flex flex-col flex-1 p-6">
                            <a href="#" aria-label="O1-visa"></a>
                            <a href="#" class="text-md tracking-wider uppercase hover:underline text-green-600">USA</a>
                            <h3 class="flex-1 py-2 text-lg font-semibold leading-snug">O1-visa</h3>
                            <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-600">
                            <span>Ease: 2.5 </span>
                            <span>
                                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Learn More
                            </button>
                            </span>
                            </div>
                        </div>
                            </div>
                            <div class="flex flex-col bg-white">
                                <div class="flex flex-col flex-1 p-6">
                                    <a href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                                    <a href="#" class="text-md tracking-wider uppercase hover:underline text-green-600">USA</a>
                                    <h3 class="flex-1 py-2 text-lg font-semibold leading-snug">CPT</h3>
                                    <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-600">
                                        <span>Ease: 4 </span>
                                        <span>
                            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Learn More
                            </button>
                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- <li class="semi-bold text-xl">USA</li>
                <li>OPT</li>
                <li>H1-B</li>
                <li>O1-visa</li>

                    <hr class="my-5"> -->
                </div>



                <div class="my-10" v-if="
                 selected === 'Canada' && open === 'No' || selected === 'Canada' && open === 'Yes' ||  selected === 'USA' && open === 'Yes' 
                 || selected === 'UK' && open === 'Yes'  || selected === 'Australia' && open === 'Yes' || selected === 'Germany' && open === 'Yes' 
                 
                 "  >

                 <section class="lg:py-2 sm:py-12 bg-gray-900  text-coolGray-800">
                    <div class="container mx-auto space-y-4">
                        <div class="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                            <div class="flex flex-col bg-white">
                                <div class="flex flex-col flex-1 p-6">
                                    
                                    <a href="#" class="text-md tracking-wider uppercase hover:underline text-red-600">CANADA</a>
                                    <h3 class="flex-1 py-2 text-lg font-semibold leading-snug">PGWP - Post Graduation Work Permit</h3>
                                    <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-600">
                                        <span>Ease: 4.5 </span>
                                        <span>
                            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Learn More
                            </button>
                            </span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col bg-white">
                                <div class="flex flex-col flex-1 p-6">
                                    <a href="#" aria-label="OPT"></a>
                                    <a href="#" class="text-md tracking-wider uppercase hover:underline text-red-600">CANADA</a>
                                    <h3 class="flex-1 py-2 text-lg font-semibold leading-snug">Express Entry - PNP</h3>
                                    <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-600">
                                        <span>Ease: 3.5 </span>
                                        <span>
                            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Learn More
                            </button>
                            </span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col bg-white">
                        <div class="flex flex-col flex-1 p-6">
                            <a href="#" aria-label="O1-visa"></a>
                            <a href="#" class="text-md tracking-wider uppercase hover:underline text-red-600">CANADA</a>
                            <h3 class="flex-1 py-2 text-lg font-semibold leading-snug">Express Entry - CEC</h3>
                            <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-600">
                            <span>Ease: 4 </span>
                            <span>
                                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Learn More
                            </button>
                            </span>
                            </div>
                        </div>
                            </div>
                            <div class="flex flex-col bg-white">
                                <div class="flex flex-col flex-1 p-6">
                                    <a href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                                    <a href="#" class="text-md tracking-wider uppercase hover:underline text-red-600">CANADA</a>
                                    <h3 class="flex-1 py-2 text-lg font-semibold leading-snug">Startup Visa</h3>
                                    <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-600">
                                        <span>Ease: 3.5 </span>
                                        <span>
                            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Learn More
                            </button>
                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- <li class="semi-bold text-xl" >Canada</li>
                <li>Startup Visa</li>
                <li>PGWP - Post Graduation Work Permit</li>

                    <hr class="my-5"> -->
                </div>


                

                <div v-if=" 
                selected === 'UK' && open === 'No' || selected === 'UK' && open === 'Yes' || selected === 'USA' && open === 'Yes' 
                || selected === 'Canada' && open === 'Yes'  || selected === 'Australia' && open === 'Yes' || selected === 'Germany' && open === 'Yes' 
                " >
                    <!-- <li class="semi-bold text-xl" >UK</li>
                    <li>Startup Visa</li>
                    <li>Tier 2</li>
                    <li>Tier 1 - Exceptional Promising Talent</li>
                    <li>Post Study Work Permit</li> -->

                    <section class="lg:py-2 sm:py-12 bg-gray-900  text-coolGray-800">
                    <div class="container mx-auto space-y-4">
                        <div class="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                            <div class="flex flex-col bg-white">
                                <div class="flex flex-col flex-1 p-6">
                                    
                                    <a href="#" class="text-md tracking-wider uppercase hover:underline text-blue-600">U.K</a>
                                    <h3 class="flex-1 py-2 text-lg font-semibold leading-snug"> Post Study Work Permit</h3>
                                    <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-600">
                                        <span>Ease: 4.5 </span>
                                        <span>
                            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Learn More
                            </button>
                            </span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col bg-white">
                                <div class="flex flex-col flex-1 p-6">
                                    <a href="#" aria-label="OPT"></a>
                                    <a href="#" class="text-md tracking-wider uppercase hover:underline text-blue-600">U.K</a>
                                    <h3 class="flex-1 py-2 text-lg font-semibold leading-snug">Tier 2 Work Visa </h3>
                                    <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-600">
                                        <span>Ease: 4 </span>
                                        <span>
                            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Learn More
                            </button>
                            </span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col bg-white">
                        <div class="flex flex-col flex-1 p-6">
                            <a href="#" aria-label="O1-visa"></a>
                            <a href="#" class="text-md tracking-wider uppercase hover:underline text-blue-600">U.K</a>
                            <h3 class="flex-1 py-2 text-lg font-semibold leading-snug">Tier 1 - Exceptional Promising Talent</h3>
                            <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-600">
                            <span>Ease: 3 </span>
                            <span>
                                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Learn More
                            </button>
                            </span>
                            </div>
                        </div>
                            </div>
                            <div class="flex flex-col bg-white">
                                <div class="flex flex-col flex-1 p-6">
                                    <a href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                                    <a href="#" class="text-md tracking-wider uppercase hover:underline text-blue-600">U.K</a>
                                    <h3 class="flex-1 py-2 text-lg font-semibold leading-snug">Startup Visa</h3>
                                    <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-600">
                                        <span>Ease: 4 </span>
                                        <span>
                            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
                selected === 'Australia' && open === 'No' || selected === 'Australia' && open === 'Yes' || selected === 'USA' && open === 'Yes' 
                || selected === 'Canada' && open === 'Yes' || selected === 'UK' && open === 'Yes' || selected === 'Germany' && open === 'Yes' 
                 " >
                 <section class="lg:py-2 sm:py-12 lg:mt-10 text-coolGray-800">
                    <div class="container mx-auto space-y-4">
                        <div class="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                            <div class="flex flex-col border-black border-8 bg-white">
                                <div class="flex flex-col flex-1 p-6">
                                    
                                    <a href="#" class="text-md tracking-wider uppercase hover:underline text-teal-accent-400">Australia</a>
                                    <h3 class="flex-1 py-2 text-lg font-semibold leading-snug">Post Graduation Work Permit</h3>
                                    <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-600">
                                        <span>Ease: 4 </span>
                                        <span>
                            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Learn More
                            </button>
                            </span>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="flex flex-col bg-white">
                                <div class="flex flex-col flex-1 p-6">
                                    <a href="#" aria-label="OPT"></a>
                                    <a href="#" class="text-md tracking-wider uppercase hover:underline text-red-600">CANADA</a>
                                    <h3 class="flex-1 py-2 text-lg font-semibold leading-snug">Express Entry - PNP</h3>
                                    <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-600">
                                        <span>Ease: 4 </span>
                                        <span>
                            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Learn More
                            </button>
                            </span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col bg-white">
                        <div class="flex flex-col flex-1 p-6">
                            <a href="#" aria-label="O1-visa"></a>
                            <a href="#" class="text-md tracking-wider uppercase hover:underline text-red-600">CANADA</a>
                            <h3 class="flex-1 py-2 text-lg font-semibold leading-snug">Express Entry - CEC</h3>
                            <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-600">
                            <span>Ease: 4 </span>
                            <span>
                                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Learn More
                            </button>
                            </span>
                            </div>
                        </div>
                            </div>
                            <div class="flex flex-col bg-white">
                                <div class="flex flex-col flex-1 p-6">
                                    <a href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                                    <a href="#" class="text-md tracking-wider uppercase hover:underline text-red-600">CANADA</a>
                                    <h3 class="flex-1 py-2 text-lg font-semibold leading-snug">Startup Visa</h3>
                                    <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-600">
                                        <span>Ease: 4 </span>
                                        <span>
                            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Learn More
                            </button>
                            </span>
                                    </div>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </section>
                </div>

                

                <div v-if="
                 selected === 'Germany' && open === 'No' || selected === 'Germany' && open === 'Yes' || selected === 'USA' && open === 'Yes' 
                 || selected === 'Canada' && open === 'Yes' || selected === 'UK' && open === 'Yes' 
                 || selected === 'Australia' && open === 'Yes' 
                 "  >
                <!-- <li class="semi-bold text-xl">Germany</li>
                <li>Post Study Permit</li> -->
                 <section class="lg:py-2 sm:py-12 lg:mt-10 text-coolGray-800">
                    <div class="container mx-auto space-y-4">
                        <div class="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                            <div class="flex flex-col border-black border-8 bg-white">
                                <div class="flex flex-col flex-1 p-6">
                                    
                                    <a href="#" class="text-md tracking-wider uppercase hover:underline text-yellow-800">Germany</a>
                                    <h3 class="flex-1 py-2 text-lg font-semibold leading-snug">Post Graduation Work Permit</h3>
                                    <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-600">
                                        <span>Ease: 4 </span>
                                        <span>
                            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Learn More
                            </button>
                            </span>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="flex flex-col bg-white">
                                <div class="flex flex-col flex-1 p-6">
                                    <a href="#" aria-label="OPT"></a>
                                    <a href="#" class="text-md tracking-wider uppercase hover:underline text-red-600">CANADA</a>
                                    <h3 class="flex-1 py-2 text-lg font-semibold leading-snug">Express Entry - PNP</h3>
                                    <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-600">
                                        <span>Ease: 4.5 </span>
                                        <span>
                            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Learn More
                            </button>
                            </span>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col bg-white">
                        <div class="flex flex-col flex-1 p-6">
                            <a href="#" aria-label="O1-visa"></a>
                            <a href="#" class="text-md tracking-wider uppercase hover:underline text-red-600">CANADA</a>
                            <h3 class="flex-1 py-2 text-lg font-semibold leading-snug">Express Entry - CEC</h3>
                            <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-600">
                            <span>Ease: 4.5 </span>
                            <span>
                                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Learn More
                            </button>
                            </span>
                            </div>
                        </div>
                            </div>
                            <div class="flex flex-col bg-white">
                                <div class="flex flex-col flex-1 p-6">
                                    <a href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                                    <a href="#" class="text-md tracking-wider uppercase hover:underline text-red-600">CANADA</a>
                                    <h3 class="flex-1 py-2 text-lg font-semibold leading-snug">Startup Visa</h3>
                                    <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-coolGray-600">
                                        <span>Ease: 4.5 </span>
                                        <span>
                            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Learn More
                            </button>
                            </span>
                                    </div>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </section>
                </div>
            </ul>

           <div class=" border-2 border-teal-accent-400 lg:px-10 lg:mt-10 rounded-xl ">
                <p class="lg:my-1">  <span class="bg-teal-accent-400 px-2 py-1 rounded-full ">Coming Soon <br> </span> Our Resource Center will contain loads of in-depth, tested and trusted how-to guides on each Recommended path. Plus success stories from international students 
            who have navigated such path successfully. </p>
           </div>
            

        </div>
      
	</div>
</template>

<script>
import worried from "@/assets/images/worried.jpeg"
export default {
    data() {
        return {
            worried,
            picked: '',
            open: '',
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