<template>
   <div>
       <home-navbar></home-navbar>
        <!-- Deadline -->
        <!-- <div class=" lg:block hidden relative pt-1 mx-5 border shadow-md rounded-xl lg:mx-32 mt-14 lg:py-5 lg:px-8 ">
            <div class="flex mb-2 items-center justify-between ">
                <div>
                <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-acccent-400 bg-teal-accent-400">
                   YOUR STUDENT VISA EXPIRATION
                </span>
                </div>
                <div class="text-right">
                <span class="text-md font-bold inline-block text-gray-900">
                    30%
                </span>
                </div>
            </div>
            <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-teal-accent-400">
                <div style="width:30%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-400"></div>
            </div>
        </div> -->

        <!-- Quiz -->
        <card-quiz-inputs></card-quiz-inputs>


   </div>
</template>

<script>
import CardQuizInputs from '../../components/Cards/ImmiHub/CardQuizInputs.vue'
import HomeNavbar from '../../components/Navbar/HomeNavbar.vue'
export default {
  components: { HomeNavbar, CardQuizInputs },
    
}
</script>

<style scoped>

</style>
