<template>
  <footer class="w-full bg-[#e6e7f4] px-6 py-10 md:px-24 md:py-16">
    <div class="w-full max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between items-start gap-10 md:gap-20 md:px-8">
      <!-- Brand + description + github -->
      <div class="w-full md:w-96 inline-flex flex-col justify-start items-start gap-3">
        <div class="flex items-center gap-2">
          <dartLogo class="h-7 w-auto" />
          <Dartstream class="h-5 w-auto" />
        </div>
        <p class="max-w-[300px] md:w-96 opacity-90 text-gray-800 text-sm md:text-lg font-light font-dm-sans leading-relaxed">
          DartStream is built by AORTEM, a company focused on powering scalable, multi-platform developer tools.
        </p>
        <a href="#" class="w-7 h-7 bg-neutral-700 rounded-full text-white flex items-center justify-center">
          <GitSvg class="w-4 h-4" />
        </a>
      </div>

      <!-- Links: Company + Resources -->
      <div class="w-full grid grid-cols-2 gap-8 md:gap-20 md:w-auto">
        <div class="inline-flex flex-col justify-start items-start gap-4">
          <h3 class="text-gray-800 text-base md:text-lg font-semibold font-dm-sans leading-tight">Company</h3>
          <div class="flex flex-col justify-start items-start gap-3">
            <NuxtLink href="#" class="text-gray-800 text-sm md:text-base font-light font-dm-sans leading-normal">Pricing</NuxtLink>
            <NuxtLink href="#" class="text-gray-800 text-sm md:text-base font-light font-dm-sans leading-normal">Doc</NuxtLink>
            <NuxtLink href="#" class="text-gray-800 text-sm md:text-base font-light font-dm-sans leading-normal">About Us</NuxtLink>
          </div>
        </div>
        <div class="inline-flex flex-col justify-start items-start gap-4">
          <h3 class="text-gray-800 text-base md:text-lg font-semibold font-dm-sans leading-tight">Resources</h3>
          <div class="flex flex-col justify-start items-start gap-3">
            <NuxtLink href="#" class="text-gray-800 text-sm md:text-base font-light font-dm-sans leading-normal">Customer Support</NuxtLink>
            <NuxtLink href="#" class="text-gray-800 text-sm md:text-base font-light font-dm-sans leading-normal">Terms & conditions</NuxtLink>
            <NuxtLink href="#" class="text-gray-800 text-sm md:text-base font-light font-dm-sans leading-normal">Privacy Policy</NuxtLink>
          </div>
        </div>
      </div>

      <!-- Newsletter -->
      <div class="w-full md:w-80 inline-flex flex-col justify-start items-start gap-4 md:gap-7">
        <h3 class="text-gray-800 text-xs md:text-sm font-semibold font-dm-sans leading-none">Subscribe to Newsletter</h3>
        <form class="flex w-full">
          <input type="email" placeholder="Enter email address" class="w-full h-10 md:h-12 bg-white rounded-l-md px-4 text-xs font-normal font-inter" />
          <CommonAppButton variant="primary" class="rounded-l-none rounded-r-md">
            Join
          </CommonAppButton>
        </form>
      </div>
    </div>
  </footer>
</template>

<script setup>
import GitSvg from '~/assets/icons/git.svg'
import dartLogo from '~/assets/icons/dartlogo.svg'
import Dartstream from '~/assets/icons/dartstream.svg'
</script>