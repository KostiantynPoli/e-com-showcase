<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Актуальні промокоди та знижки'
  },
  subtitle: {
    type: String,
    default: 'Оновлені пропозиції від перевірених брендів'
  }
})
</script>

<template>
  <section class="py-16 text-center">
    <h1 class="text-3xl md:text-4xl font-bold mb-4">
      {{ title }}
    </h1>

    <p class="text-gray-600 text-lg">
      {{ subtitle }}
    </p>
  </section>
</template>
