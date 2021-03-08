<template>
    <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-12 lg:-mt-2 lg:py-4">
        <div class="max-w-xl mb-10 md:mx-1 sm:text-center lg:max-w-2xl md-3">
            <p class="text-base text-left font-semibold text-gray-700 md:text-lg">
            Featured Companies
            </p>
        </div>

        <section class="bg-coolGray-100 text-coolGray-800">
            <div class="container p-2 mx-auto space-y-6 text-center lg:p-2 lg:space-y-5">
                <div class="flex flex-wrap justify-center lg:justify-between">
                    <img :src="amazon" alt=""  class="w-24 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 text-coolGray-600">
                    <img :src="google" alt=""  class="w-24 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 text-coolGray-600">
                    <img :src="microsoft" alt=""  class="w-24 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 text-coolGray-600">
                    <!-- <img :src="accenture" alt=""  class="w-24 h-12 mx-10 my-5 fill-current md:mx-12 lg:m-0 text-coolGray-600"> -->
                    <img :src="deloitte" alt=""  class="w-24 h-12 mx-10 my-5 fill-current md:mx-12 lg:m-0 text-coolGray-600">
                    <img :src="apple" alt=""  class="w-24 h-12 mx-10 my-5 fill-current md:mx-12 lg:m-0 text-coolGray-600">
                    <img :src="ibm" alt=""  class="w-24 h-12 mx-10 my-5 fill-current md:mx-12 lg:m-0 text-coolGray-600">
                    <img :src="salesforce" alt=""  class="w-24 h-12 mx-10 my-5 fill-current md:mx-12 lg:m-0 text-coolGray-600">
                     <img :src="ernst" alt=""  class="w-24 h-12 mx-10 my-5 fill-current md:mx-12 lg:m-0 text-coolGray-600">
                    
                </div>
            </div>
        </section>
         

    </div>
</template>

<script>
import amazon from '@/assets/images/companies/amazon-2.svg'
import google from '@/assets/images/companies/google-1-1.svg'
import microsoft from '@/assets/images/companies/microsoft.svg'
import accenture from '@/assets/images/companies/accenture-2.svg'
import deloitte from '@/assets/images/companies/deloitte-2.svg'
import apple from '@/assets/images/companies/apple-11.svg'
import ibm from '@/assets/images/companies/ibm.svg'
import salesforce from '@/assets/images/companies/salesforce-2.svg'
import ernst from '@/assets/images/companies/ernst-young-ey.svg'

export default {
    data() {
      return {
       amazon, google, microsoft, accenture, deloitte, apple, ibm, salesforce, ernst
      }
    },
}
</script>