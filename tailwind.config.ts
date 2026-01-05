import { type Config } from 'tailwindcss'

const config: Config = {
    content: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './app.vue',
        './plugins/**/*.{js,ts}',
        './server/api/**/*.ts'
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}

export default config