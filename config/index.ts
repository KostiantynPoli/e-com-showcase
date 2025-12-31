import dotenv from 'dotenv'

dotenv.config()

function requireEnv(name: string): string {
    const value = process.env[name]
    if (!value) {
        throw new Error(`❌ Missing required environment variable: ${name}`)
    }
    return value
}

export const config = {
    BASE_URL: requireEnv('SALES_DOUBLER_BASE_URL'),
    API_KEY: requireEnv('AFFILIATE_API_KEY'),
    E_COM_CATEGORY: requireEnv('E_COM_CATEGORY_ID'),
    OFFER_PER_PAGE: requireEnv('OFFER_PER_PAGE'),
}