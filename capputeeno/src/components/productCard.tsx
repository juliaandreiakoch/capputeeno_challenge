import { centsToReais } from "@/utils/centsToReais";
import styled from "styled-components";

interface cardProps {
    name: string, 
    price: number, 
    image: string
}

const Card = styled.div`
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
    border-radius: 0px 4px;
    cursor: pointer;

    width: 256px;

    img {
       width: 256px;
       height: 300px; 
    }

    h3 {
        font-weight: 300;
        font-size: 16px;
        line-height: 150%;
        color: var(--text-dark2);
    }

    p {
        font-size: 14px;
        font-weight: 600;
        line-height: 150%;
        color: var(--text-price);
    }

    div {
        display: flex;
        align-items: start;
        justify-content: center;
        flex-direction: column;
        padding: 8px 0px;
        padding-left: 15px;
        
        > div {
            width: 228px;
            height: 1px;
            margin: 8px 0;
            padding: 0px;
            background: var(--shapes);
        }
    }
`

export const ProductCard = (props: cardProps) => {
    
    return(
        <Card>
            <img src={props.image} alt="" />
            <div>
                <h3>{props.name}</h3>
                <div></div>
                <p>{centsToReais(props.price)}</p> 
            </div>
        </Card>
    )
}