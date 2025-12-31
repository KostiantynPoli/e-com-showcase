<script setup lang="ts">
defineProps<{
  current: number
  total: number
}>()

const emit = defineEmits<{
  (e: 'change', page: number): void
}>()
</script>

<template>
  <div class="flex justify-center gap-2 mt-10">
    <button
        class="px-3 py-1 border rounded"
        :disabled="current === 1"
        @click="emit('change', current - 1)"
    >
      ←
    </button>

    <button
        v-for="page in total"
        :key="page"
        @click="emit('change', page)"
        class="px-3 py-1 border rounded"
        :class="page === current
        ? 'bg-gray-900 text-white'
        : 'bg-white hover:bg-gray-100'"
    >
      {{ page }}
    </button>

    <button
        class="px-3 py-1 border rounded"
        :disabled="current === total"
        @click="emit('change', current + 1)"
    >
      →
    </button>
  </div>
</template>
