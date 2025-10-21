<template>
  <button :class="buttonClasses">
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary' // 'primary', 'outline', 'outline-white', 'white'
  },
  size: {
    type: String,
    default: 'normal' // 'normal', 'large'
  }
})

 
const buttonClasses = computed(() => {
  let base = "rounded-xl font-medium font-inter leading-none flex justify-center items-center gap-2"

  // Size classes
  switch (props.size) {
    case 'large':
      base += " w-44 h-14 px-9 py-6 text-xl"
      break
    default:
      base += " w-40 h-12 px-8 py-3.5 text-base"
  }

  // Variant classes
  switch (props.variant) {
    case 'outline':
      return base + " text-indigo-800 outline outline-1 outline-offset-[-1px] outline-indigo-800"
    case 'outline-white':
      return base + " text-neutral-50 outline outline-1 outline-offset-[-1px] outline-white"
    case 'white':
      return base + " bg-white text-indigo-800"
    case 'primary':
    default:
      return base + " bg-indigo-800 text-white outline outline-1 outline-offset-[-1px] outline-white"
  }
})
</script>