import { useLocalStorage } from "@/hooks/useLocalStorage"
import { BagIcon } from "./bagIcon"
import styled from "styled-components"

const BagCount = styled.span`
    width: 17px;
    height: 17px;
    border-radius: 100%;
    padding: 0px 5px;
    font-size: 10px;

    background-color: var(--delete-color);
    color: white;

    margin-left: -10px;
`

const Container = styled.div`
    position: relative;
`

export const ShoppingControl = () => {
    const {value} = useLocalStorage('bagItems', []) //pega o item do carrinho no local storage

    return(
        <Container>
            <BagIcon/>
            {value.length > 0 && <BagCount>{value.length}</BagCount>}
           
        </Container>
    )
}