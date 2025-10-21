<template>
  <div :class="cardClasses" :style="cardStyle">
    <div class="w-80 h-44 relative">
      <div class="w-44 h-44 left-0 top-0 absolute">
        <div class="w-32 h-20 left-0 top-0 absolute">
          <div class="w-10 h-10 left-0 top-0 absolute overflow-hidden flex items-center justify-center">
            <CircleSvg class="w-full h-full" />
          </div>
          <h3 :class="textClasses" class="left-0 top-[51px] absolute text-lg font-bold font-['Merriweather_Sans']">
            {{ plan.name }}
          </h3>
        </div>
        <div class="w-auto h-14 left-0 top-[108.01px] absolute flex items-baseline gap-2 pt-2">
          <span :class="textClasses" class="text-5xl font-bold font-['Merriweather_Sans']">{{ plan.price }}</span>
          <span v-if="plan.period" :class="textClasses" class="text-2xl font-normal font-['Segoe_UI']">{{ plan.period }}</span>
        </div>
      </div>
      
 
      <div class="absolute top-2 right-2 inline-flex justify-center items-center -rotate-11" style="padding: 39.71px 10.375px 7.286px 10.624px;">
        <BilledSvg class="w-auto h-auto" />
      </div>
      
      <div v-if="isPopular" class="w-24 h-10 left-[59.50px] top-0 absolute bg-amber-500 rounded-[42px] flex items-center justify-center">
        <div class="text-white text-xl font-medium font-['Roboto']">Popular</div>
      </div>
    </div>

    <hr :class="isPopular ? 'border-white/20' : 'border-indigo-800/20'" class="w-80 rounded-[10px]" />

    <div class="w-80 h-auto flex-1">
      <ul class="flex flex-col gap-4">
        <li
          v-for="feature in plan.features"
          :key="feature"
          :class="textClasses"
          class="flex items-center gap-3 text-sm font-normal font-['DM_Sans'] leading-normal"
        >
          <Tick4Svg v-if="isPopular" class="w-5 h-5 flex-shrink-0" />
          <Tick3Svg v-else class="w-5 h-5 flex-shrink-0" />
          <span>{{ feature }}</span>
        </li>
      </ul>
    </div>

    <NuxtLink href="/signin" class="w-80">
      <CommonAppButton :variant="isPopular ? 'primary' : 'outline'" class="w-80">
        Subscribe
      </CommonAppButton>
    </NuxtLink>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BilledSvg from '~/assets/icons/billed.svg'
import CircleSvg from '~/assets/icons/circle.svg'
import Tick3Svg from '~/assets/icons/tick3.svg'
import Tick4Svg from '~/assets/icons/tick4.svg'

const props = defineProps({
  plan: Object,
  isPopular: {
    type: Boolean,
    default: false
  }
})

// Dynamically sets classes for the whole card
const cardClasses = computed(() => {
  let base = "w-[320px] md:w-96 min-h-[773px] p-6 rounded-2xl shadow-lg flex flex-col items-start gap-6 overflow-hidden "
  if (props.isPopular) {
    return base + "text-white"
  } else {
    return base + "bg-white outline outline-1 outline-offset-[-1px] outline-indigo-800/20"
  }
})

// Dynamically sets card style for gradient background
const cardStyle = computed(() => {
  return props.isPopular ? 'background: radial-gradient(circle at center, #6366f1 0%, #42489E 50%)' : ''
})

// Dynamically sets text color
const textClasses = computed(() => {
  return props.isPopular ? "text-white" : "text-black"
})
</script>