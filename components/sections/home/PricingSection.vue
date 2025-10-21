<template>
  <section class="w-full py-20">
    <div class="w-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-center gap-14">
      <CommonSectionTitle>
        <template #title>Plan Features Breakdown</template>
        <template #subtitle>Choose the Right Plan: Explore the Core Features of Our Free and Paid Versions</template>
      </CommonSectionTitle>

      
      <div class="md:hidden w-full -mx-6 px-6">
        <div class="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide" style="scroll-padding-left: 1.5rem;">
          <div class="shrink-0 snap-start w-[320px]">
            <CommonPricingCard :plan="standardPlan" />
          </div>
          <div class="shrink-0 snap-start w-[320px]">
            <CommonPricingCard :plan="enhancePlan" :is-popular="true" />
          </div>
          <div class="shrink-0 snap-start w-[320px]">
            <CommonPricingCard :plan="customPlan" />
          </div>
        </div>
        
        <div class="w-full flex items-center justify-center gap-2 mt-6">
          <span class="w-16 h-2 rounded-full bg-[#42489E]"></span>
          <span class="w-2 h-2 rounded-full bg-gray-300"></span>
          <span class="w-2 h-2 rounded-full bg-gray-300"></span>
        </div>
      </div>

      
      <div class="hidden md:inline-flex w-full justify-center items-start gap-16">
        <CommonPricingCard :plan="standardPlan" />
        <CommonPricingCard :plan="enhancePlan" :is-popular="true" />
        <CommonPricingCard :plan="customPlan" />
      </div>

    <NuxtLink href="/pricing" class="w-full md:w-96 px-5 py-2.5 rounded-lg outline outline-1 outline-offset-[-1px] outline-[#42489E] inline-flex justify-center items-center gap-2.5">
      <div class="text-[#42489E] text-lg md:text-2xl font-semibold font-['DM_Sans']">View full price comparison</div>
    </NuxtLink>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

 
const standardPlan = ref({
  name: 'Standard Plan',
  price: '$10',
  period: '/month',
  isPopular: false,
  features: [
    'Full CLI + core framework',
    '1 vendor (e.g. Firebase)',
    '1 cloud storage + 1 database (Postgres/MySQL)',
    '1 feature flag system',
    'Basic message broker & WebSocket (e.g. Redis, Socket.IO)',
    'In-memory scheduler & FCM notifications',
    'Basic usage analytics',
    'Community Slack support',
    'No SLA'
  ]
})

 
const enhancePlan = ref({
  name: 'Enhance Plan',
  price: '$250',
  period: '/month',
  isPopular: true,
  features: [
    'Full CLI + all built-in features',
    'All auth, storage, and database connectors',
    'All built-in feature flags, brokers, and WebSocket services',
    'AWS/GCP workflow integration',
    'Multi-channel notifications (email, SMS, push)',
    'Advanced dashboards',
    'Email/chat support',
    'Guided setup',
    '99.9% uptime SLA'
  ]
})

 
const customPlan = ref({
  name: 'Custom Plan',
  price: 'Custom',
  period: null,
  isPopular: false,
  features: [
    'Everything in Enhanced + full customization',
    'Custom integrations & private cloud connectors',
    'White-label messaging',
    'Custom workflows & reporting',
    'Dedicated AM + 24/7 support',
    '99.99% SLA'
  ]
})
</script>