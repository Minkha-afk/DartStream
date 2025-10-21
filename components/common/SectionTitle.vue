<template>
  <div class="flex flex-col justify-start items-center gap-3.5">
    <h2 class="w-auto text-center text-zinc-900 text-3xl sm:text-4xl md:text-5xl font-semibold font-inter leading-tight md:leading-[56px]">
      <slot name="title" />
    </h2>
    <p class="w-full max-w-[527px] opacity-70 text-center text-neutral-600 text-sm sm:text-base font-normal font-inter leading-snug md:leading-normal">
      <slot name="subtitle" />
    </p>
  </div>
</template>