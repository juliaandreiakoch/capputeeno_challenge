"use client"

import { useGetProductsList } from "@/hooks/useGetProductsList"
import { ProductCard } from "./productCard";
import styled from "styled-components";

const ListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, 256px);
    gap: 32px;
    max-width: 100%;

    margin-top: 32px;
`

export const ProductList = () => {
    const { data } = useGetProductsList();

    return(
        <ListContainer>{data?.map(product => <ProductCard 
            key={product.id}
            name={product.name} 
            price={product.price_in_cents} 
            image={product.image_url}/>
            )}</ListContainer>
    )    
}