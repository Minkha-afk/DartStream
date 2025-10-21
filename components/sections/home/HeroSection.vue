<template>
  <section class="w-full py-16 sm:py-20 relative">
    <div class="w-full max-w-7xl mx-auto px-6 flex flex-col items-center gap-10">
    
    
    <div class="flex flex-col items-center gap-5 text-center w-full" style="overflow: visible;">
      <h1 class="text-4xl sm:text-5xl font-bold leading-tight text-indigo-800 font-['Inter'] md:text-6xl md:leading-[76.80px]" style="max-width: none;">
        <div class="flex flex-col items-center justify-center gap-2">
          <div class="inline-flex items-center justify-center gap-2 sm:gap-4 flex-wrap sm:flex-nowrap">
            <span class="whitespace-nowrap">Simplify Your</span>
            <span class="md:hidden font-bold">Dart</span>
            <DartSvg class="hidden md:inline-block" style="width: 213px; height: auto; flex-shrink: 0;" />
          </div>
          <span>Development</span>
        </div>
      </h1>
      <p class="w-full max-w-[587px] text-lg sm:text-xl font-normal leading-relaxed text-neutral-900/70 font-['Inter'] md:text-2xl md:leading-10">
        Empower your server-side applications with DartStream's minimalistic and scalable framework.
      </p>
    </div>

  
    <div class="absolute hidden md:block" style="width: 49px; height: 49px; top: 230px; left: 283px; opacity: 1; transform: rotate(0deg);">
      <ClouSvg class="w-full h-full" />
    </div>

    
    <div class="absolute hidden md:block" style="top: 280px; left: 105px; opacity: 1;">
      <OpensrcSvg class="w-auto h-auto" />
    </div>

     
    <div class="absolute hidden md:block w-[140px] h-[80px] top-[130px] right-[220px] z-20 overflow-visible">
      <Clou class="w-full h-full object-contain" />
    </div>

    <!-- Container for the action buttons -->
    <div class="inline-flex flex-col items-center justify-start gap-4 sm:flex-row sm:gap-6">
      <NuxtLink href="/signin">
        <CommonAppButton variant="primary">
          <div class="flex items-center justify-center gap-2">
            <WhitecloudSvg class="w-5 h-5 flex-shrink-0" />
            <span class="text-sm font-medium">Cloud</span>
          </div>
        </CommonAppButton>
      </NuxtLink>
      <NuxtLink href="/signin">
        <CommonAppButton variant="outline">
          <span class="text-sm font-medium whitespace-nowrap">Open Source</span>
        </CommonAppButton>
      </NuxtLink>
    </div>

     
    <div class="absolute hidden md:block" style="width: 49px; height: 49px; top: 400px; right: 310px; opacity: 1; ">
      <Cloue class="w-full h-full" />
    </div>

    <!-- 
      Dashboard image container with fixed dimensions
    -->
    <div class="mt-4 hidden md:flex justify-start">
      <img src="~/assets/images/Dashboard1.png" alt="Dashboard" style="width: 912px; height: 728px;" />
    </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Import Dart logo SVG
import DartSvg from '~/assets/icons/dart.svg'
// Import Cloud SVG
import ClouSvg from '~/assets/icons/clou.svg'
import Clou from '~/assets/icons/cloud.svg'
import Cloue from '~/assets/icons/cld1.svg'
import OpensrcSvg from '~/assets/icons/opensrc.svg'
import WhitecloudSvg from '~/assets/icons/whitecloud.svg'
</script>
