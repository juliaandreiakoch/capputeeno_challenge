import { ProductsResponse } from "@/types/productsResponse"
import { useQuery } from "@tanstack/react-query"
import axios, {AxiosPromise} from "axios"
import { useFilter } from "./useFilter"
import { formatQuery } from "@/utils/graphqlFilters"
import { useDeferredValue } from "react"

const API_URL = process.env.NEXT_PUBLIC_API_URL as string

const fetcher = (formattedQuery: string): AxiosPromise<ProductsResponse> => {
    return axios.post(
        API_URL, {query: formattedQuery}
    )
}

export const useGetProductsList = () => {
    const { type, priority, search } = useFilter();
    const searchDeffered = useDeferredValue(search); //só atualiza quando o usuário terminar de digitar
    const query = formatQuery(type, priority);   
    const { data } = useQuery({
        queryFn: () => fetcher(query),
        queryKey: ['products', type, priority]
    })

    const products = data?.data?.data?.allProducts
    const filteredProducts = products?.filter(product => product.name.toLowerCase().includes(searchDeffered.toLowerCase()))

    return {data: filteredProducts}
}