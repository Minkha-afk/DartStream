<template>
  <section class="w-full py-10">
    <div class="w-full max-w-7xl mx-auto px-6">
      
      <div class="md:hidden w-full rounded-[28px] p-8 flex items-center justify-center" style="background: radial-gradient(circle at center, #6366f1 0%, #42489E 55%)">
        <div class="w-full max-w-sm mx-auto flex flex-col items-center justify-center gap-6">
          <div class="w-full flex flex-col items-center gap-2">
            <h2 class="text-center text-white text-2xl font-semibold font-['Inter'] leading-snug">
              Get Started with DartStream
              <br />
              Today
            </h2>
            <p class="text-center text-neutral-200 text-sm font-normal font-['Inter'] leading-relaxed">
              Choose your plan and start building with DartStream
            </p>
          </div>
          <div class="w-full flex flex-col items-center gap-3">
            <NuxtLink href="/signin" class="w-full">
              <CommonAppButton variant="white" class="w-full">
                <div class="flex items-center justify-center gap-2">
                  <WhitecloudSvg class="w-5 h-5 flex-shrink-0" />
                  <span class="text-[#42489E] font-['DM_Sans'] font-medium">Cloud</span>
                </div>
              </CommonAppButton>
            </NuxtLink>
            <NuxtLink href="/signin" class="w-full">
              <CommonAppButton variant="outline-white" class="w-full">
                Open Source
              </CommonAppButton>
            </NuxtLink>
          </div>
        </div>
      </div>

      
      <div class="desktop-cta hidden md:block w-full">
        <div class="w-full p-16 bg-[#e6e7f4] rounded-2xl flex justify-between items-center">
          <div class="w-[768px] inline-flex flex-col justify-start items-start gap-4">
            <h2 class="self-stretch text-indigo-800 text-3xl font-semibold font-['Inter'] leading-9">
              Start your 7-days free Sandbox Plan
            </h2>
            <p class="self-stretch text-indigo-800 text-xl font-normal font-['Inter'] leading-loose">
              Join over 1,000+ startups already growing with Untitled.
            </p>
          </div>
          <div class="flex justify-start items-center gap-8">
            <CommonAppButton variant="primary" size="large">Get Started</CommonAppButton>
            <CommonAppButton variant="outline" size="large">Learn More</CommonAppButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import WhitecloudSvg from '~/assets/icons/whitecloud.svg'
</script>

<style scoped>
@media (max-width: 767px) {
  .desktop-cta { display: none !important; }
}
</style>