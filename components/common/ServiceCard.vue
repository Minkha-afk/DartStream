<template>
  <div class="w-64 h-60 p-4 bg-slate-200 rounded-md flex flex-col justify-start items-start gap-2">
    <div class="flex flex-col justify-start items-start gap-7 h-full">
      <div class="w-12 h-12 bg-white rounded-full border border-indigo-800 flex items-center justify-center">
        <component :is="service.icon" class="w-6 h-6" />
      </div>
      <div class="flex flex-col justify-start items-start gap-2.5 flex-1">
        <h3 class="text-indigo-800 text-xl font-semibold font-inter leading-tight">{{ service.title }}</h3>
        <p class="text-zinc-500 text-sm font-normal font-inter leading-tight">{{ service.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  service: Object
})
</script>