<template>
    <section class="py-3 md:py-16 overflow-x-hidden">
        <div v-for=" section in immidata" :key="section.id" class="container px-4 mx-auto">
            <div v-if="section.id === id " class="flex flex-wrap lg:flex-nowrap">
            <div  class="w-full lg:w-3/5">
                <div  class="py-1 lg:pr-32">
                    <div class="mb-4">
                        <span class="text-base py-1 px-3 text-gray-900 font-semibold bg-green-400 rounded-xl">Immigration Guides</span>
                        <div class="flex my-6 space-x-2 ">
                            <img :src=section.logo alt="usalogo" class=" w-10 inline-flex " >
                            <a href="#" class="flex text-xl tracking-wider uppercase text-blue-900">{{section.country}}</a>
                        </div>
                        <h2 class="text-4xl mt-3 font-bold font-heading">{{section.Visatype}}</h2>
                    </div>
                    <div class="flex items-start py-4">
                        <div class="w-8 mr-5 text-green-400">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                        </div>
                        <div>
                        <h3 class="mb-2 text-xl font-semibold font-heading">Overview</h3>
                        <p class="text-gray-700 leading-loose">
                            {{section.overview}}    
                        </p>
                        </div>
                    </div>
                    <div class="flex items-start py-4">
                        <div class="w-8 mr-5 text-green-400">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                        </svg>
                        </div>
                        <div>
                        <h3 class="mb-2 text-xl font-semibold font-heading">Requirements:</h3>
                        <ul v-for="requirem in section.requirements" :key="requirem.id" class="text-gray-700 list-disc leading-loose" >
                            <li>{{requirem}}</li>
                        </ul>
                        </div>
                    </div>
                    <div class="flex items-start py-4">
                        <div class="w-8 mr-5 text-green-400">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
                        </svg>
                        </div>
                        <div>
                        <h3 class="mb-2 text-xl font-semibold font-heading">Other details</h3>
                        <ul v-for="oth in section.others" :key="oth.id" class="text-gray-700 list-disc leading-loose">
                            <li>{{oth}}</li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="relative w-full lg:w-2/5 my-12 lg:my-0">
                <img class="relative mx-auto rounded-xl w-full z-10" :src=section.image alt="">
                <img class="absolute top-0 left-0 w-40 -ml-12 -mt-12" src="@/assets/images/blob-tear.svg" alt="">
                <div class="flex items-start lg:py-16">
                    <div class="w-8 mr-5 text-green-400">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                    </svg>
                    </div>
                    <div>
                        <h3 class="mb-2 text-xl font-semibold font-heading">Need Help?</h3>
                        <p class="text-gray-700 leading-loose">
                            Do you still have more questions? Reach out to our immigration experts or join the discussion in our community of international students just like you.  
                        </p>
                        <div class="py-3">
                            <a class="block sm:inline-block py-4 px-4 mb-4 sm:mb-0 sm:mr-3 text-base text-white text-center font-semibold leading-none bg-green-400 hover:bg-green-700 rounded" href="#">
                                Ask Our Experts</a>
                            <a class="block sm:inline-block py-4 px-4 text-base text-white text-center font-semibold leading-none bg-teal-accent-400 hover:bg-green-700 rounded" href="#">
                                Join the discussion</a>
                        </div>
                        <router-link to="/admin/immigration-hub" >
                            <div class="lg:pt-20 flex  text-gray-700 ">
                                <i class="fas fa-long-arrow-alt-left py-1 px-2"></i>
                                <p class="underline">Back</p>
                            </div>
                        </router-link>
                    </div>
                    
                </div>
            </div>
            </div>
        </div>
    </section>
</template>
<script>
import immidata from '@/immidata.json'
export default {
    data() {
        return {
            immidata,
            id: this.$store.state.id
        }
    }
    
}
</script>