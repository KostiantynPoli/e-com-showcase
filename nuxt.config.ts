export default defineNuxtConfig({
    runtimeConfig: {
        salesDoublerBaseUrl: process.env.SALES_DOUBLER_BASE_URL,
        salesDoublerToken: process.env.AFFILIATE_API_KEY,
        salesDoublerCategory: Number(process.env.E_COM_CATEGORY_ID),
        offerPerPage: Number(process.env.OFFER_PER_PAGE),
    },

    modules: [
        '@nuxtjs/tailwindcss',
    ],

    compatibilityDate: '2025-12-28',
})