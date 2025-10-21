<template>
  <div class="flex flex-col justify-start items-center gap-3.5">
    <h2 class="w-auto text-center text-zinc-900 text-5xl font-semibold font-inter leading-[56px]">
      <slot name="title" />
    </h2>
    <p class="w-[527px] opacity-70 text-center text-neutral-600 text-base font-normal font-inter leading-normal">
      <slot name="subtitle" />
    </p>
  </div>
</template>