export default defineNuxtConfig({
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

    // CSS (если кастомного нет, оставляем пустым)
    css: [],

    // Nitro target: static для GitHub Pages
    nitro: {
        preset: 'static',
    },

    // Tailwind
    tailwindcss: {
        // configPath: 'tailwind.config.js', // если кастомный
        // cssPath: '~/assets/css/tailwind.css', // можно создать, если нужны кастомные стили
        viewer: false, // отключаем viewer в CI
    },

    build: {
        transpile: [],
    },

    vite: {
        css: {
            preprocessorOptions: {},
        },
    },

    app: {
        baseURL: '/e-com-showcase/', // Важно для GitHub Pages!
    },

    compatibilityDate: '2025-12-28',
})
