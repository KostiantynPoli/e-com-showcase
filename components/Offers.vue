<script setup>
import OfferCard from './OfferCard.vue'

defineProps({
  offers: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section
      id="offers"
      class="grid md:grid-cols-2 gap-6 pb-24"
  >
    <OfferCard
        v-for="(offer, i) in offers"
        :key="i"
        :offer="offer"
    />
  </section>
</template>
