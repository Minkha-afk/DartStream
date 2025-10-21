<template>
  <div class="coming-soon-page min-h-screen">
    
    <TheHeader />
    
    
    <div class="relative w-full h-[634px] flex items-end justify-center pb-6">
      
      <div class="absolute inset-0 w-full h-full">
        <img src="~/assets/images/Shadow.png" alt="Development Environment Background" class="w-full h-full object-cover" />
        <div class="absolute inset-0 w-full h-full  "></div>
      </div>
      
      
      <div class="relative z-10 self-stretch inline-flex flex-col justify-start items-center gap-14 px-10 mt-40">
        <div class="text-center justify-start text-white text-2xl font-light font-['Merriweather_Sans'] uppercase leading-none tracking-[8.40px]">
          We are launching soon
        </div>
        <div class="text-center justify-center text-white text-8xl font-normal font-['Merriweather_Sans'] uppercase leading-10">
          SECOND QUATER
        </div>
        <div class="self-stretch text-center justify-start text-white text-base font-normal font-['Merriweather_Sans'] capitalize leading-7 max-w-4xl">
          Get exclusive early access to cutting-edge tools built for Dart devs, including serverless cloud functions, a high-speed backend framework, and an AI code assistant tailored for Dart. Be the first to try it, shape it, and ship with it.
        </div>
        
        
        <div class="px-5 py-3 bg-indigo-800 rounded-[5px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] outline outline-1 outline-offset-[-1px] outline-indigo-800 inline-flex justify-center items-center gap-2 overflow-hidden cursor-pointer hover:bg-indigo-700 transition-colors">
          <div class="justify-start text-white text-base font-normal font-['Merriweather_Sans'] leading-normal">
            Get Early Access
          </div>
        </div>
      </div>
    </div>
    
    
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
 
</script>

<style scoped>
.coming-soon-page {
  min-height: 100vh;
}

 
@import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300;400;700&display=swap');
</style>
