<template>
  <section class="w-full py-20 pt-48 hidden md:block desktop-finalcta">
    <div class="w-full max-w-7xl mx-auto px-6 flex items-center justify-center">
      <div class="w-full max-w-[1200px] h-[375px] rounded-xl flex items-center justify-center relative" style="background: radial-gradient(circle at center, #6366f1 0%, #42489E 50%)">
      <div class="w-[803px] mx-auto inline-flex flex-col justify-start items-center gap-12">
      <div class="w-[822px] flex flex-col justify-start items-center gap-3">
        <h2 class="self-stretch text-center text-white text-5xl font-semibold font-['Inter'] leading-[52.20px]">
          Get Started with DartStream Today
        </h2>
        <p class="w-[784px] h-6 opacity-90 text-center text-neutral-200 text-base font-normal font-['Inter'] leading-relaxed">
          Choose your plan and start building with DartStream
        </p>
      </div>
      <div class="inline-flex justify-center items-start gap-6">
        <NuxtLink href="/signin">
          <CommonAppButton variant="outline-white">
            Open Source
          </CommonAppButton>
        </NuxtLink>
        <NuxtLink href="/signin">
          <CommonAppButton variant="white">
            <div class="flex items-center justify-center gap-3">
              <WhitecloudSvg class="w-6 h-6 flex-shrink-0" />
              <span class="text-[#42489E] font-['DM_Sans'] font-medium">Cloud</span>
            </div>
          </CommonAppButton>
        </NuxtLink>
      </div>
      </div>
    </div>
    </div>
  </section>
</template>

<script setup>
import WhitecloudSvg from '~/assets/icons/cld1.svg'
</script>

<style scoped>
/* Hard-enforce hiding FinalCta on small screens */
@media (max-width: 767px) {
  .desktop-finalcta { display: none !important; }
}
</style>