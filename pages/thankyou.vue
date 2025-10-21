<template>
  <div class="thankyou-page">
    <TheHeader />
    <div class="w-full max-w-[1440px] h-[750px] mx-auto flex items-center justify-center">
      <div class="w-[1200px] h-[375px] rounded-xl flex items-center justify-center relative" style="background: radial-gradient(circle at center, #6366f1 0%, #42489E 50%)">
        <div class="w-[644px] inline-flex flex-col justify-start items-center gap-6">
          <div class="w-[628px] flex flex-col justify-start items-center gap-3">
            <div class="self-stretch text-center justify-start text-white text-4xl font-bold font-['Merriweather_Sans'] leading-10">Thank You</div>
            <div class="w-[627px] h-16 opacity-90 text-center justify-start text-neutral-50 text-lg font-normal font-['Merriweather_Sans'] leading-7">You're on our list! We'll keep you updated. In the meantime, explore AORTEM and see what's coming.</div>
          </div>
          <div class="w-40 h-12 bg-white rounded-xl shadow-[0px_10.526888847351074px_42.1075553894043px_0px_rgba(254,134,103,0.10)] flex items-center justify-center">
            <div class="text-center text-black text-sm font-semibold font-['Plus_Jakarta_Sans'] leading-none">Explore Aortem</div>
          </div>
        </div>
      </div>
    </div>
    <!-- Thank you page content (out of scope) -->
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
// Add your thank you page logic here
</script>

<style scoped>
/* Add your thank you page styles here */
</style>
