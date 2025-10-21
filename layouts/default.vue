<template>
  <div class="flex flex-col min-h-screen bg-main-gradient">
    <LayoutTheHeader />
    <main class="flex-grow">
      <slot />
    </main>
    <LayoutTheFooter />
  </div>
</template>