export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            offerPerPage: Number(process.env.OFFER_PER_PAGE) || 10
        },
        salesDoublerBaseUrl: process.env.SALES_DOUBLER_BASE_URL,
        salesDoublerToken: process.env.AFFILIATE_API_KEY,
        salesDoublerCategory: Number(process.env.E_COM_CATEGORY_ID),

    },

    modules: [
        '@nuxtjs/tailwindcss',
    ],
    css: [
        '~/assets/css/tailwind.css', // если есть кастомный css
    ],

    compatibilityDate: '2025-12-28',
})