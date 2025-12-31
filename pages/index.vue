<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

/* router */
const route = useRoute()
const router = useRouter()

/* текущая страница из URL */
const page = computed(() => Number(route.query.page) || 1)

/* SSR-safe загрузка данных */
const { data, pending, error } = await useAsyncData(
    () => `offers-page-${page.value}`,
    () =>
        $fetch('/api/offers', {
          query: {
            page: page.value,
          },
        }),
    {
      watch: [page],
    }
)

function changePage(newPage: number) {
  router.push({
    query: {
      ...route.query,
      page: newPage,
    },
  })
}

const offers = computed(() => data.value?.data ?? [])
const totalPages = computed(() => data.value?.total_pages ?? 1)
</script>

<template>
  <section class="container mx-auto px-4 py-10">
    <Header />

    <!-- ❌ pending НЕ используем для v-if -->
    <div v-if="error" class="text-center text-red-600">
      Помилка
    </div>

<!--    <div class="fixed bottom-4 right-4 bg-black text-white px-3 py-1 text-sm">-->
<!--      pending: {{ pending }}-->
<!--    </div>-->
    <!-- 🔒 Обертка для grid + loader -->
    <div class="relative">
      <!-- GRID (DOM всегда одинаковый) -->
      <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-200"
          :class="{ 'opacity-50 pointer-events-none': pending }"
      >
        <OfferCard
            v-for="offer in offers"
            :key="offer.id"
            :offer="offer"
        />
      </div>

      <!-- LOADER поверх контента -->
      <div
          v-show="pending"
          class="absolute inset-0 flex items-center justify-center"
      >
        <div class="px-4 py-2 bg-white shadow rounded text-gray-600">
          Завантаження...
        </div>
      </div>
    </div>

    <!-- ✅ ПАГИНАЦИЯ -->
    <div class="flex justify-center items-center gap-4 mt-10">
      <button
          class="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          :disabled="page <= 1 || pending"
          @click="changePage(page - 1)"
      >
        ← Назад
      </button>

      <span class="font-medium">
        {{ page }} / {{ totalPages }}
      </span>

      <button
          class="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          :disabled="page >= totalPages || pending"
          @click="changePage(page + 1)"
      >
        Вперед →
      </button>
    </div>
  </section>
</template>