export default defineNuxtConfig({
    ssr: true,

    // Runtime Config
    runtimeConfig: {
        public: {
            offerPerPage: Number(process.env.OFFER_PER_PAGE) || 10,
        },
        salesDoublerBaseUrl: process.env.SALES_DOUBLER_BASE_URL,
        salesDoublerToken: process.env.AFFILIATE_API_KEY,
        salesDoublerCategory: Number(process.env.E_COM_CATEGORY_ID),
    },

    // Модули
    modules: [
        '@nuxtjs/tailwindcss',
    ],

    // CSS: кастомного нет
    css: ['~/assets/css/tailwind.css'],

    // Tailwind
    tailwindcss: {
        viewer: false,
    },

    // Nitro preset
    nitro: {
        preset: process.env.VERCEL ? 'vercel' : 'static', // для GitHub Pages используем static
    },

    // Базовый URL для GitHub Pages
    app: {
        baseURL: '/e-com-showcase/',
    },

    build: {
        transpile: [],
    },

    vite: {
        css: {},
    },

    compatibilityDate: '2025-12-28',
})
