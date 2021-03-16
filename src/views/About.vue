<template>
	<section class="bg-coolGray-100 mt-12 text-coolGray-800">
    <index-navbar></index-navbar>

		<div class="container max-w-xl p-6 py-10 mx-auto space-y-10 lg:px-8 lg:max-w-7xl">
			<div>
				<h2 class="text-3xl font-bold tracking-tight text-left sm:text-5xl text-coolGray-900">Built by International Students</h2>
				<p class="mx-auto mt-4 text-3xl text-left text-coolGray-600">
          <span class="relative inline-block px-2">
          <div class="absolute inset-0 transform -skew-x-12 bg-teal-accent-400"></div>
          <span class="relative text-teal-900">for international students</span>
          </span>
        </p>
			</div>
			<div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
				<div>
					<p class="mt-3 text-lg text-coolGray-600">
           We personally know the frustration and hustle that come with being an international student - from getting funded, growing your career(internships and jobs) and securing the right immigration status.
            </p>
          <p class="mt-3 text-lg text-coolGray-600">Our mission with The Guide is to bridge the gap between international students and their career and immigration goals providing access to the right set of opportunities when you need them.</p>
					<div class="mt-12 space-y-4">
						<div class="flex">
							<div class="flex-shrink-0">
								<div class="flex items-center justify-center w-12 h-12 rounded-md bg-teal-accent-400 text-coolGray-50">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div class="ml-4">
								<h4 class="text-2xl lg:pt-3 font-medium leading-6 text-coolGray-900">Community</h4>
							</div>
						</div>
						<div class="flex">
							<div class="flex-shrink-0">
								<div class="flex items-center justify-center w-12 h-12 rounded-md bg-teal-accent-400 text-coolGray-50">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div class="ml-4">
								<h4 class="text-2xl lg:pt-3 font-medium leading-6 text-coolGray-900">Access to opportunities</h4>
					</div>
						</div>
						<div class="flex">
							<div class="flex-shrink-0">
								<div class="flex items-center justify-center w-12 h-12 rounded-md bg-teal-accent-400 text-coolGray-50">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-7 h-7">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div class="ml-4">
								<h4 class="text-2xl lg:pt-3  font-medium leading-6 text-coolGray-900">Diversity and Inclusion</h4>
							</div>
						</div>
					</div>
				</div>
				<div aria-hidden="true" class="mt-10 lg:mt-0">
					<img src="@/assets/images/students1.jpeg" alt="" class="mx-auto rounded-lg shadow-lg">
				</div>
			</div>
		</div>

    <!-- Footer -->
    <home-footer></home-footer>

	</section>
</template>

<script>

import HomeFooter from '../components/Footer/HomeFooter.vue';
import IndexNavbar from "@/components/Navbar/IndexNavbar.vue";

export default {
  components: {HomeFooter,IndexNavbar}
  
}
</script>
