import { Product } from "./productType"

export interface ProductsResponse {
    data: {
        allProducts: [Product]
    }
}