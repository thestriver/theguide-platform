<template>
   <div class="lg:mb-20">
      <splitpanes style="min-height: 400px" class="default-theme" id="featuredjobs">
            <pane class="" min-size="75" max-size="100" >
               <button @click="hidePane2 = !hidePane2" class="bg-teal-accent-400 px-5 mx-16 mt-10 lg:mb-5" >{{ hidePane2 ? 'Show' : 'Hide' }} Filters</button>
        
                <!-- <job-item></job-item> -->
                  <div class="relative pt-1 lg:mb-20 mx-5 border lg:mx-1 lg:mt-6 lg:py-2 ">
                    <div class="mb-40">
                      <div  v-for="job in filteredRows" v-bind:key="job.id" class="max-w-full mx-10 mb-10 bg-white rounded-3xl flex">

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
                              <!-- <span key="" class="px-4 py-2 mr-4 inline-flex text-base leading-5 font-semibold rounded-md bg-teal-accent-400 text-teal-500">OPT</span> -->
                              <span key="" class="px-4 py-2 mr-4 mt-2 inline-flex text-base leading-5 font-semibold rounded-md bg-teal-accent-400 text-teal-500">{{job.STEM}}</span>
                              
                          </div>
                          
                      </div>
                      </div>
                  </div>
   
            </pane>
            <pane class="" min-size="25" max-size="25" v-if="!hidePane2" >
                <div class="relative flex w-full flex-wrap items-stretch bg-gray-100 mx-auto my-10  py-3 border-2 ">
                  <span
                    class="z-10 h-full leading-snug font-normal text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3"
                  >
                  <i class="fas fa-search"></i>
                  </span>
                  <input
                    type="text"
                    v-model="filter"
                    placeholder="Filter by OPT, H1b, Tier 2 or PGWP"
                    class="px-3 py-3 border-2 placeholder-gray-400 text-gray-700 relative bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
                  />
              </div>
                  
                  
                  
            </pane>
        </splitpanes>
        <!-- <split-panes class="default-theme">
            <pane v-for="i in 3" :key="i">
                <div>{{ i }}</div>
            </pane>
        </split-panes> -->
        
    
   </div>
</template>

<script>
import { Splitpanes, Pane } from 'splitpanes'
import 'splitpanes/dist/splitpanes.css'
import JobItem from '../Job/JobItem'
import data from '@/data.json'



export default {
    components: { Splitpanes, Pane, JobItem },
    data() {
        return{
            hidePane2: true,
            data,
            filter:'',
        }
    },
  computed: {
  filteredRows() {
    return this.data.filter(job => {
      const jobVisa = job.Visa.toString().toLowerCase();
      const searchTerm = this.filter.toLowerCase();

      return jobVisa.includes(searchTerm)
    });
  }
},
}
</script>

<style scoped>

/* .splitpanes {
  background: lightgray
} */

/* .splitpanes__pane {
  box-shadow: 0 0 5px rgba(0, 0, 0, .2) inset;
  justify-content: center;
  align-items: center;
  display: flex;
} */

.splitpanes > .splitpanes__splitter {
  min-height: 6px;
  background: white
}
/* .splitpanes__pane {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0 0 3px rgba(0, 0, 0, .2) inset;
}

em.specs {
  font-size: 0.2em;
  line-height: 1;
  position: absolute;
  color: #bbb;
  bottom: 0.5em;
  left: 0;
  right: 0;
  text-align: center;
}


link.p {
  position: absolute;
  bottom: 5px;
  right: 5px;
  color: #666;
  z-index: 10;
  font-size: 12px;
  
}

.splitpanes__pane {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0 0 3px rgba(0, 0, 0, .2) inset;
}

em.specs {
  font-size: 0.2em;
  line-height: 1;
  position: absolute;
  color: #bbb;
  bottom: 0.5em;
  left: 0;
  right: 0;
  text-align: center;
}


link.p {
  position: absolute;
  bottom: 5px;
  right: 5px;
  color: #666;
  z-index: 10;
  font-size: 12px;
  
} */

</style>