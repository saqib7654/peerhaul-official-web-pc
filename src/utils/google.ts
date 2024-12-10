import { Loader } from "@googlemaps/js-api-loader"
import { GOOGLE_MAP_KEY } from "@/enum/common"

export const loader = new Loader({
    apiKey: GOOGLE_MAP_KEY,
    version: 'weekly'
})