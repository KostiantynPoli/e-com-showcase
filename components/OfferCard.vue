
<script setup lang="ts">
      defineProps<{
        offer: {
          id: number
          name: string
          description: string
          promocode: string | null
          url: string
          logo_url: string
          date_to: string
          offer_name: string
          promotion_specie: string
        }
      }>()

      const formatDate = (date: string) =>
          new Date(date).toLocaleDateString('uk-UA')
</script>

    <template>
      <article
          class="bg-stone-50 border rounded-xl p-4 flex flex-col bg-white hover:shadow-lg transition"
      >
        <!-- Логотип -->
        <img
            :src="offer.logo_url"
            :alt="offer.offer_name"
            class="h-12 object-contain mb-4"
        />

        <!-- Название -->
        <h2 class="font-semibold text-lg mb-2">
          {{ offer.name }}
        </h2>

        <!-- Описание -->
        <p class="text-sm text-gray-600 mb-4 line-clamp-3">
          {{ offer.description }}
        </p>

        <!-- Промокод -->
        <div
            v-if="offer.promocode"
            class="mb-3 text-sm bg-gray-100 rounded px-3 py-2"
        >
          Промокод:
          <span class="font-mono font-semibold">
        {{ offer.promocode }}
      </span>
        </div>

        <!-- Footer -->
        <div class="mt-auto">
          <div class="text-xs text-gray-400 mb-3">
            Дата початку {{ formatDate(offer.date_to) }}
          </div>
          <div class="text-xs text-gray-400 mb-3">
            Дата закінчення {{ formatDate(offer.date_to) }}
          </div>

          <a
              :href="offer.url"
              target="_blank"
              class="block text-center bg-black text-white py-2 rounded-lg hover:bg-gray-800"
          >
            Перейти до оффера
          </a>
        </div>
      </article>
    </template>

    <img
        :src="offer.logo"
        :alt="offer.title"
        class="h-10 object-contain self-start"
    >

    <h3 class="text-lg font-semibold">
      {{ offer.title }}
    </h3>

    <p>{{ offer.description }}</p>

    <p class="font-mono bg-gray-100 px-2 py-1 rounded text-sm">
      Промокод: {{ offer.promo }}
    </p>

    <p class="text-sm text-gray-500">
      Діє з: {{ offer.from }}
    </p>

    <p class="text-sm text-gray-500">
      Діє до: {{ offer.to }}
    </p>

    <a
        :href="offer.link"
        target="_blank"
        class="mt-3 inline-block bg-black text-white text-center py-2 rounded-lg hover:bg-gray-800 transition"
    >
      Перейти до магазину
    </a>
  </article>
</template>
