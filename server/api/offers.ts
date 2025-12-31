// import {config} from "~/config";
import { H3Error } from 'h3'

interface PromoOffer {
    id: number
    name: string
    description: string
    promocode: string | null
    date_from: string
    date_to: string
    url: string
    logo_url: string
    promotion_specie: 'sale' | 'promocode'
}

interface PromoResponse {
    total_pages: number
    page: number
    size: number
    data: PromoOffer[]
}

export default defineEventHandler(async (event) => {
    setHeader(event, 'Cache-Control', 's-maxage=60, stale-while-revalidate')

    const config = useRuntimeConfig()
    const query = getQuery(event)

    const page = Number(query.page) || 1
    const size = Number(query.size) || config.offerPerPage || 10

    try {
        return await $fetch<PromoResponse>(
            `${config.salesDoublerBaseUrl}/promo/`,
            {
                query: {
                    page,
                    size,
                    lang: 'uk',
                    period: 'active',
                    category_id: config.salesDoublerCategory,
                },
                headers: {
                    accept: 'application/json',
                    'X-API-Key': config.salesDoublerToken,
                },
            }
        )
    } catch (error) {
        console.log(error)
        throw createError({
            statusCode: 502,
            statusMessage: 'External API unavailable',
        })
    }
})
