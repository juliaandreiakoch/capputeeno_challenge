"use client"

import { useGetProductsList } from "@/hooks/useGetProductsList"
import { ProductCard } from "./productCard";

export const ProductList = () => {
    const { data } = useGetProductsList();

    return(
        <div>{data?.map(product => <ProductCard 
            key={product.id}
            name={product.name} 
            price={product.price_in_cents} 
            image={product.image_url}/>
            )}</div>
    )    
}