import styled from "styled-components";

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
    border-radius: 0px 4px;

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
        width: 228px;
        height: 1px;
        margin: 8px 0;
        color: var(--shapes);
    }

    }
`
interface cardProps {
    name: string, 
    price: number, 
    image: string
}

export const ProductCard = (props: cardProps) => {
    
    return(
        <Card>
            <img src={props.image} alt="" />
            <h3>{props.name}</h3>
            <div/>
            <p>{props.price}</p> 
        </Card>
    )
}