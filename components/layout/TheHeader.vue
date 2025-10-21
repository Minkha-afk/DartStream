<template>
  <div>
    
    <div v-if="!isScrolled" class="w-full h-20"></div>
    
    <header 
      class="fixed top-0 left-0 w-full h-20 px-6 sm:px-24 py-2 bg-transparent z-50 flex justify-between items-center overflow-hidden"
      :style="{ 
        transform: isScrolled ? 'translateY(0)' : 'translateY(0)',
        transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out'
      }"
    >
      <NuxtLink href="/" class="inline-flex items-center gap-2">
        <DartLogoSvg class="w-8 h-8" />
        <DartStreamSvg class="h-6" />
      </NuxtLink>

      
      <nav class="hidden md:flex justify-center items-center gap-10">
        <NuxtLink href="/" class="text-center text-indigo-800 text-base font-semibold font-poppins leading-normal tracking-wide">Home</NuxtLink>
        <NuxtLink href="/pricing" class="text-center text-indigo-800 text-base font-normal font-poppins leading-normal tracking-wide">Pricing</NuxtLink>
        <NuxtLink href="/thankyou" class="text-center text-indigo-800 text-base font-normal font-poppins leading-normal tracking-wide">Docs</NuxtLink>
        <NuxtLink href="/faq" class="text-center text-indigo-800 text-base font-normal font-poppins leading-normal tracking-wide">FAQ</NuxtLink>
      </nav>

      <div class="hidden md:block">
        <NuxtLink href="/signin">
          <CommonAppButton variant="primary">
            Get Started
          </CommonAppButton>
        </NuxtLink>
      </div>

      
      <div class="md:hidden">
        <button @click="isMobileMenuOpen = !isMobileMenuOpen">
          <HamSvg class="w-8 h-8 text-indigo-800" />
        </button>
      </div>
    </header>

    
    <div v-if="isMobileMenuOpen" class="fixed top-20 left-0 w-full bg-white z-40 md:hidden">
      <nav class="flex flex-col items-center gap-4 py-4">
        <NuxtLink href="/" @click="isMobileMenuOpen = false" class="text-center text-indigo-800 text-base font-semibold font-poppins leading-normal tracking-wide">Home</NuxtLink>
        <NuxtLink href="/pricing" @click="isMobileMenuOpen = false" class="text-center text-indigo-800 text-base font-normal font-poppins leading-normal tracking-wide">Pricing</NuxtLink>
        <NuxtLink href="/thankyou" @click="isMobileMenuOpen = false" class="text-center text-indigo-800 text-base font-normal font-poppins leading-normal tracking-wide">Docs</NuxtLink>
        <NuxtLink href="/faq" @click="isMobileMenuOpen = false" class="text-center text-indigo-800 text-base font-normal font-poppins leading-normal tracking-wide">FAQ</NuxtLink>
        <NuxtLink href="/signin" @click="isMobileMenuOpen = false">
          <CommonAppButton variant="primary">
            Get Started
          </CommonAppButton>
        </NuxtLink>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import DartLogoSvg from '~/assets/icons/dartlogo.svg'
import DartStreamSvg from '~/assets/icons/dartstream.svg'
import HamSvg from '~/assets/icons/ham.svg'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 80
  }
  
  window.addEventListener('scroll', handleScroll)
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>

<style scoped>
 
</style>