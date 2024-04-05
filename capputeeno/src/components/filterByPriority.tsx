import styled from "styled-components"
import { ArrowIcon } from "./arrowIcon";
import { useState } from "react";
import { PriorityTypes } from "@/types/priorityTypes";
import { useFilter } from "@/hooks/useFilter";

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    button {
        background: transparent;
        border: none;
        cursor: pointer;
        font-family: inherit;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: var(--text-filter);

        display: flex;
        align-items: center;
        justify-content: center;
    }

    svg {
        margin-left: 16px;
    }
`

const PriorityFilter = styled.ul`
    position: absolute;
    width: 176px;
    background: #FFFFFF;
    box-shadow: 0px 4px 12px 0px #0000001A;
    border-radius: 4px;
    padding: 12px 16px;
    z-index: 999;

    list-style: none;

    top: 100%;
    right: 3px;

    li {
        font-size: 14px;
        cursor: pointer;
        color: var(--text-filter)
    }

    li + li {
        margin-top: 4px; 
    }
`

export const FilterByPriority = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { setPriority } = useFilter();

    const handleOpen = () => {setIsOpen(prev => !prev)};
    const handleUpdatePriority = (newPriority: PriorityTypes) => {
        setPriority(newPriority)
        setIsOpen(false)
    };

    return(
        <FilterContainer>
            <button onClick={handleOpen}>Organizar por
                <ArrowIcon/>
            </button>
            {isOpen && 
            <PriorityFilter>
                <li onClick={() => handleUpdatePriority(PriorityTypes.NEWS)}>Novidades</li>
                <li onClick={() => handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}>Preço: Maior - menor</li>
                <li onClick={() => handleUpdatePriority(PriorityTypes.MENOR_PRICE)}>Preço: Menor - maior</li>
                <li onClick={() => handleUpdatePriority(PriorityTypes.POPULARITY)}>Mais vendidos</li>
            </PriorityFilter>}
        </FilterContainer>
    );
}