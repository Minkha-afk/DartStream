<template>
  <div :class="cardClass">
    <div class="flex flex-col justify-start items-start gap-7 h-full">
      <div :class="iconWrapClass">
        <component :is="service.icon" :class="iconClass" />
      </div>
      <div class="flex flex-col justify-start items-start gap-2.5 flex-1">
        <h3 :class="titleClass">{{ service.title }}</h3>
        <p :class="descClass">{{ service.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  service: Object,
  active: {
    type: Boolean,
    default: false
  }
})

const cardClass = computed(() =>
  props.active
    ? 'w-full h-[180px] p-5 rounded-xl bg-[#42489E] text-white shadow-sm'
    : 'w-full h-[180px] p-5 rounded-xl bg-white outline outline-1 outline-gray-200 text-black shadow-sm'
)

const iconWrapClass = computed(() =>
  props.active
    ? 'w-12 h-12 bg-white/20 rounded-full border border-white/40 flex items-center justify-center'
    : 'w-12 h-12 bg-white rounded-full border border-indigo-800/40 flex items-center justify-center'
)

const iconClass = computed(() => (props.active ? 'w-6 h-6 text-white' : 'w-6 h-6 text-indigo-800'))
const titleClass = computed(() => (props.active ? 'text-white text-lg font-semibold leading-tight' : 'text-indigo-800 text-lg font-semibold leading-tight'))
const descClass = computed(() => (props.active ? 'text-white/90 text-sm leading-snug' : 'text-zinc-500 text-sm leading-snug'))
</script>
