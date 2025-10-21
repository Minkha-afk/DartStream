<template>
  <div class="signin-page min-h-screen">
    <!-- Header Component -->
    <TheHeader />
    
    <!-- Sign In Content Section -->
    <section class="w-full py-16 pt-56 flex justify-center items-center min-h-[calc(100vh-200px)]">
      <div class="inline-flex justify-start items-center gap-32">
        <div class="w-[502px] inline-flex flex-col justify-start items-start gap-7">
          <div class="self-stretch inline-flex justify-start items-center gap-4">
            <div class="w-40 h-0 bg-[#42489E] outline outline-1 outline-offset-[-0.50px] outline-[#42489E]"></div>
            <div class="text-center justify-center text-[#42489E] text-lg font-semibold font-['Inter'] leading-none">Early Bird Sign-up</div>
            <div class="w-40 h-0 bg-[#42489E] outline outline-1 outline-offset-[-0.50px] outline-[#42489E]"></div>
          </div>
          <div class="self-stretch flex flex-col justify-start items-start gap-3">
            <div class="self-stretch inline-flex justify-start items-start gap-2.5">
              <div class="flex-1 justify-start text-[#42489E]/50 text-lg font-medium font-['Inter'] leading-none">Name</div>
            </div>
            <div class="self-stretch h-14 rounded-[5px] outline outline-1 outline-[#42489E]/50 relative">
              <input 
                type="text" 
                placeholder="Enter your name" 
                class="w-full h-full px-4 bg-transparent text-[#42489E] placeholder-[#42489E]/30 outline-none rounded-[5px]"
              />
            </div>
          </div>
          <div class="self-stretch flex flex-col justify-start items-start gap-3">
            <div class="self-stretch inline-flex justify-start items-start gap-2.5">
              <div class="flex-1 justify-start text-[#42489E]/50 text-lg font-medium font-['Inter'] leading-none">Email</div>
            </div>
            <div class="self-stretch h-14 rounded-[5px] outline outline-1 outline-[#42489E]/50 relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                class="w-full h-full px-4 bg-transparent text-[#42489E] placeholder-[#42489E]/30 outline-none rounded-[5px]"
              />
            </div>
          </div>
          <div class="self-stretch relative flex flex-col justify-start items-start gap-3">
            <div class="self-stretch inline-flex justify-start items-start gap-2.5">
              <div class="flex-1 justify-start text-[#42489E]/50 text-lg font-medium font-['Inter'] leading-none">Job Title</div>
            </div>
            <div class="self-stretch h-14 rounded-[5px] outline outline-1 outline-[#42489E]/50 relative">
              <select class="w-full h-full px-4 bg-transparent text-[#42489E] outline-none rounded-[5px] appearance-none">
                <option value="">Select your job title</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="manager">Manager</option>
                <option value="other">Other</option>
              </select>
              <ArrowSvg class="w-5 h-2.5 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          <div class="self-stretch relative flex flex-col justify-start items-start gap-3">
            <div class="self-stretch inline-flex justify-start items-start gap-2.5">
              <div class="flex-1 justify-start text-[#42489E]/50 text-lg font-medium font-['Inter'] leading-none">What do you build primarily?</div>
            </div>
            <div class="self-stretch h-14 rounded-[5px] outline outline-1 outline-[#42489E]/50 relative">
              <select class="w-full h-full px-4 bg-transparent text-[#42489E] outline-none rounded-[5px] appearance-none">
                <option value="">Select what you build</option>
                <option value="web">Web Applications</option>
                <option value="mobile">Mobile Apps</option>
                <option value="api">APIs/Backend</option>
                <option value="other">Other</option>
              </select>
              <ArrowSvg class="w-5 h-2.5 absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
          <div class="self-stretch h-20 px-40 py-3 bg-[#42489E] rounded-[50px] inline-flex justify-center items-center gap-2.5 overflow-hidden">
            <div class="text-center justify-center text-white text-lg font-normal font-['Inter'] leading-none">Get Early Access</div>
          </div>
        </div>
        <div class="w-[582px] h-[569px] px-9 py-9 bg-[#42489E] rounded-[20px] shadow-[0px_3px_7px_0px_rgba(0,0,0,0.10)] shadow-[0px_12px_12px_0px_rgba(0,0,0,0.09)] shadow-[0px_27px_16px_0px_rgba(0,0,0,0.05)] shadow-[0px_49px_19px_0px_rgba(0,0,0,0.01)] shadow-[0px_76px_21px_0px_rgba(0,0,0,0.00)] inline-flex flex-col justify-start items-start gap-2.5 overflow-hidden">
          <div class="self-stretch flex flex-col justify-start items-start gap-6">
            <div class="self-stretch flex flex-col justify-start items-start gap-1">
              <div class="self-stretch justify-start text-white text-3xl font-bold font-['Merriweather_Sans'] capitalize leading-9">Be First. Build Faster. Get Ahead.</div>
              <div class="self-stretch justify-start text-white text-2xl font-light font-['Merriweather_Sans'] capitalize leading-normal">Join Our community of early adopters shaping the future of Dart-powered development.</div>
            </div>
            <div class="self-stretch flex flex-col justify-start items-start gap-4">
              <div class="self-stretch inline-flex justify-start items-center gap-3">
                <TickSvg class="w-5 h-5 text-white" />
                <div class="w-[473px] justify-start text-white text-lg font-light font-['Merriweather_Sans'] capitalize leading-normal">Priority access to features before public release</div>
              </div>
              <div class="self-stretch inline-flex justify-start items-center gap-3">
                <TickSvg class="w-5 h-5 text-white" />
                <div class="w-[473px] justify-start text-white text-lg font-light font-['Merriweather_Sans'] capitalize leading-normal">Direct influence on the product roadmap</div>
              </div>
              <div class="self-stretch inline-flex justify-start items-center gap-3">
                <TickSvg class="w-5 h-5 text-white" />
                <div class="w-[473px] justify-start text-white text-lg font-light font-['Merriweather_Sans'] capitalize leading-normal">Limited-edition early adopter badge</div>
              </div>
              <div class="self-stretch inline-flex justify-start items-center gap-3">
                <TickSvg class="w-5 h-5 text-white" />
                <div class="w-[473px] justify-start text-white text-lg font-light font-['Merriweather_Sans'] capitalize leading-normal">Special pricing and partner perks at launch</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Footer Component -->
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
// Sign in page with proper Nuxt.js layout
import ArrowSvg from '~/assets/icons/arrow.svg'
import TickSvg from '~/assets/icons/tick.svg'
</script>

<style scoped>
.signin-page {
  min-height: 100vh;
}
</style>
