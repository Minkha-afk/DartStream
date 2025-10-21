<template>
  <section class="w-full py-16">
    <div class="w-full max-w-7xl mx-auto px-6 flex flex-col justify-start items-center gap-8">
    <CommonSectionTitle>
      <template #title>
        Explore Our Platform <span class="text-indigo-800 font-dm-sans">Services</span>
      </template>
      <template #subtitle>
        Unlock a suite of powerful tools designed to accelerate your Dart development and streamline your server-side solutions.
      </template>
    </CommonSectionTitle>

    <!-- Mobile: modern grid mimic from screenshot -->
    <div class="md:hidden grid grid-cols-1 gap-4 w-full max-w-3xl">
      <ServiceCardMobile
        v-for="(service, idx) in services"
        :key="service.title"
        :service="service"
        :active="idx === 0"
      />
    </div>

    <!-- Desktop: original inline layout -->
    <div class="hidden md:inline-flex justify-start items-start gap-7">
      <CommonServiceCard
        v-for="service in services"
        :key="service.title"
        :service="service"
      />
    </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ZapIcon from '~/assets/icons/zap.svg'
import SecurityIcon from '~/assets/icons/security.svg'
import DataIcon from '~/assets/icons/data.svg'
import CloudIcon from '~/assets/icons/clou.svg'
import ServiceCardMobile from '~/components/common/ServiceCardMobile.vue'

// All your data is now cleanly stored here!
const services = ref([
  {
    title: 'Flexible Deployment',
    description: 'Deploy your Dart applications on your preferred cloud infrastructure with our adaptable solutions.',
    icon: ZapIcon
  },
  {
    title: 'Security Services',
    description: 'Enhance your cloud deployments with advanced security features, including DDoS protection.',
    icon: SecurityIcon
  },
  {
    title: 'Scalability Tools',
    description: 'Seamlessly scale your apps to meet growing demands, whether open source or in the cloud.',
    icon: DataIcon
  },
  {
    title: 'Analytics and Monitoring',
    description: 'Gain real-time insights and monitor performance across your chosen environment.',
    icon: CloudIcon
  }
])
</script>