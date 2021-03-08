<template>
    <div class="relative pt-1 lg:mb-20 mx-5 border lg:mx-1 lg:mt-6 lg:py-2 ">
          <div class="mb-40">
            <div  v-for="job in data" v-bind:key="job.id" class="max-w-full mx-10 mb-10 bg-white rounded-3xl flex">

                <div class="flex lg:w-6/12 py-5">

                    <div class="ml-6 mr-5">
                        <img class="h-24 w-24 rounded-full" :src=job.logo alt="" />
                    </div>

                    <div class="ml-5">
                        <div class="text-lg inline-flex leading-8 font-bold text-teal-accent-400 pr-3">{{job.company}}</div>
                        <!-- <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-teal-accent-400 text-green-800 mr-2">NEW</span>
                        <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-black text-white">FEATURED</span> -->
                        
                        <!-- Job Title -->
                        <div class="text-gray-900 text-xl">{{job.title}}</div>
                        <!-- Deadline -->
                        <span class="text-gray-600 text-sm font-light mr-2">{{job.deadline}}</span>
                        <span class="text-gray-600 font-light mr-2">.</span>
                        
                        <!-- Contract Type -  -->
                        <span class="text-gray-600 text-sm font-light mr-2">{{job.contract}}</span>
                        <span class="text-gray-600 font-light mr-2">.</span>
                        
                        <!-- Location -->
                        <span class="text-gray-600 text-sm font-light mr-2">{{job.location}}</span>
                    </div>
                </div>

                <div class="lg:w-6/12 mt-10">
                    <!-- Industry/Profession type -->
                    <span class="px-4 py-2 mr-4 inline-flex text-base leading-5 font-semibold rounded-md bg-teal-accent-400 text-teal-500">
                        {{job.Industry}}
                        </span>
                    <!-- Position -->
                    <span class="px-4 py-2 mr-4 inline-flex text-base leading-5 font-semibold rounded-md bg-teal-accent-400 text-teal-500">{{job.Visa}}</span>
                    
                    <!-- Visa Type -->
                    <span key="" class="px-4 py-2 mr-4 inline-flex text-base leading-5 font-semibold rounded-md bg-teal-accent-400 text-teal-500">OPT</span>
                    <span key="" class="px-4 py-2 mr-4 mt-2 inline-flex text-base leading-5 font-semibold rounded-md bg-teal-accent-400 text-teal-500">{{job.STEM}}</span>
                    
                </div>
                
            </div>
            </div>
    </div>
   

</template>
<script>
import data from '@/data.json'

export default {
    data() {
        return {
            data
        }
    }
}
</script>