<template>
  <div class="bg-gray-900 lg:min-w-full">
    <div
      class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
    >
      <div class="relative flex grid items-center grid-cols-2 lg:grid-cols-3">
        <ul class="flex items-center hidden space-x-8 lg:flex">
          <li>
            <router-link to="/admin/careerbot" >
              <a
              aria-label="Our product"
              title="Career Hub"
              class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >Career Hub</a>
            </router-link>
          </li>
          <li>
             <router-link to="/admin/immigration-hub" >
            <a
              aria-label="Immigration Hub"
              title="Immigration Hub"
              class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >Immigration Hub</a>
             </router-link>
          </li>
          <!-- <li>
            <router-link to="/community" >
            <a
              aria-label="Community"
              title="Community"
              class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >Community</a
            >
            </router-link>
          </li> -->
        </ul>
        <!-- Logo -->
        <a
          href="/"
          aria-label="Company"
          title="Company"
          class="inline-flex items-center lg:mx-auto"
        >
          <img src="@/assets/images/Logo_2_.png" class="lg:w-3/5" alt="">
          <!-- <svg
            class="w-8 text-teal-accent-400"
            viewBox="0 0 24 24"
            stroke-linejoin="round"
            stroke-width="2"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke="currentColor"
            fill="none"
          >
            <rect x="3" y="1" width="7" height="12"></rect>
            <rect x="3" y="17" width="7" height="6"></rect>
            <rect x="14" y="1" width="7" height="6"></rect>
            <rect x="14" y="11" width="7" height="12"></rect>
          </svg>
          <span
            class="ml-2 text-3xl font-bold tracking-wide text-teal-accent-400 uppercase"
            >𝕋𝕙𝕖 𝔾𝕦𝕚𝕕𝕖</span
          > -->
        </a>
        <ul class="flex items-center hidden ml-auto space-x-8 lg:flex">
          <li>
            <a
              href="/admin"
              aria-label="Admin"
              title="Admin"
              class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >Admin</a
            >
          </li>
          <li>
            <a
              href="/settings"
              aria-label="Admin"
              title="Setting"
              class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >Profile Settings</a
            >
          </li>
          <li>
            <a @click="logout()"
              class="inline-flex cursor-pointer items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-600 hover:bg-green-700 focus:shadow-outline focus:outline-none"
              aria-label="Log Out"
              title="Log Out"
            >
              Log out
            </a>
          </li>
        </ul>
        <!-- Mobile -->
         <div class="ml-auto lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
            @click="isMenuOpen = true"
          >
            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              ></path>
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              ></path>
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              ></path>
            </svg>
          </button>
          <div v-if="isMenuOpen" class="absolute top-0 left-0 w-full">
            <div class="p-5 bg-white border rounded shadow-sm">
              <div class="flex items-center justify-between mb-4">
                <div>
                  <a
                    href="/admin"
                    aria-label="Company"
                    title="Company"
                    class="inline-flex items-center"
                  >
                        <svg
                        class="w-8 text-green-600"
                        viewBox="0 0 24 24"
                        stroke-linejoin="round"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke="currentColor"
                        fill="none"
                    >
                        <rect x="3" y="1" width="7" height="12"></rect>
                        <rect x="3" y="17" width="7" height="6"></rect>
                        <rect x="14" y="1" width="7" height="6"></rect>
                        <rect x="14" y="11" width="7" height="12"></rect>
                    </svg>
                    <span
                        class="ml-2 text-3xl font-bold tracking-wide text-green-600 uppercase"
                        >𝕋𝕙𝕖 𝔾𝕦𝕚𝕕𝕖</span
                    >
                  </a>
                </div>
                <div>
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    @click="isMenuOpen = false"
                  >
                    <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <nav>
                <ul class="space-y-4">
                  <li>
                    <a
                      href="/admin/career-hub"
                      aria-label="Career Hub"
                      title="Career Hub"
                      class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >Career Hub</a
                    >
                  </li>
                  <li>
                    <a
                      href="/admin/immigration-hub"
                      aria-label="Immigration Hub"
                      title="Immigration Hub"
                      class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >Immigration Hub</a
                    >
                  </li>
                  <li>
                    <a
                      href="/admin"
                      aria-label="Admin"
                      title="Admin"
                      class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >Admin</a
                    >
                  </li>
                  <li>
                    <a
                      href="/settings"
                      aria-label="profile setttings"
                      title="Profile Settings"
                      class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >Profile Settings</a
                    >
                  </li>
                  <!-- <li>
                    <a
                      href="/"
                      aria-label="Community"
                      title="Community"
                      class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >Community</a
                    >
                  </li> -->
                  <li>
                    <a
                      href="/"
                      aria-label="Home"
                      title="Home"
                      class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >Home</a
                    >
                  </li>
                  <li>
                    <a
                      class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-accent-400 hover:bg-teal-accent-400 focus:shadow-outline focus:outline-none"
                      aria-label="Sign up"
                      title="Sign up"
                    >
                      Log out
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import logo from '@/assets/images/Logo(2).png'

export default {
  data() {
    return {
      isMenuOpen: false,
    //   logo
    };
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  }
};
</script>