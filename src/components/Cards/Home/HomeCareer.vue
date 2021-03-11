<template>
    <div class="lg:bg-gray-900 lg:mx-16 px-2 rounded-xl border-t-2 flex items-center p-2 lg:p-5 overflow-hidden relative ">
    <div class="w-full max-w-7xl rounded-2xl bg-white shadow-xl sm:p-10 lg:p-5 lg:mx-8 text-gray-800 relative md:text-left mt-8 mb-8">
        <div class="px-4 sm:py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-1">
            <div class="flex flex-col lg:flex-row">
                    <div class="mb-2 lg:mb-0 lg:w-1/2 lg:pr-5">
                    <h2 class="font-sans text-3xl font-bold tracking-tight text-black sm:text-4xl sm:leading-none">
                        Career Hub    
                    </h2>
                    </div>
                    <div class="lg:w-1/2">
                    <p class="mb-4 text-lg text-gray-700 font-normal ">
                        Our career hub is filled with part and full time job opportunities with innovative companies who are actually excited to work with talented international students like <span class="inline-block font-semibold text-teal-accent-400">YOU.</span> <br>
                        Tailored to your career goals.
                    </p>
                    </div>
            </div>
        </div>


        <div class="px-4 py-12 mx-auto  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-1">
            <div class="flex flex-col bg-white border rounded shadow-sm md:justify-center lg:flex-row">
                <div class="flex flex-col justify-between p-5 border-b sm:p-5 lg:border-b-0 lg:border-r lg:w-1/2">
                    <div>
                        <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-black uppercase rounded-full bg-teal-accent-400">
                        Step One
                        </p>
                        <h5 class="max-w-md mb-2 text-3xl font-extrabold leading-none sm:text-4xl">
                        Interact with our Career Bot
                        </h5>
                        <p class="text-base text-gray-700 md:text-lg sm:mb-2">
                        and tailor our opportunities to suit your preferences.
                        </p>
                    </div>
                    <div class="flex items-center">
                        <router-link to="/careerbot">
                            <button
                            type="submit"
                            class="inline-flex items-center justify-center h-10 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-accent-400 hover:bg-teal-700 focus:shadow-outline focus:outline-none"
                            >
                            Get started
                            </button>
                        </router-link>
                    </div>
                </div>
                <div class="pl-5 flex flex-col justify-between lg:p-4 sm:p-10 lg:w-1/2">
                <div>
                    <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-black uppercase rounded-full bg-teal-accent-400">
                    Step Two
                    </p>
                    <h5 class="max-w-md mb-6 text-3xl font-extrabold leading-none sm:text-4xl">
                    Explore Our Offerings
                    </h5>
                    <p class="mb-6 text-base text-gray-700 md:text-lg sm:mb-8">
                    Plus perfectly tailored Career Guides, and resources
                    </p>
                </div>
                <div class="flex items-center">
                       <router-link to="/career-hub">
                        <button
                        type="submit"
                        class="inline-flex items-center justify-center h-10 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-accent-400 hover:bg-teal-700 focus:shadow-outline focus:outline-none"
                        >
                        Get started
                        </button>
                       </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
name: 'HommeCareer',
  data() {
    return {
    
    };
  },
};
</script>