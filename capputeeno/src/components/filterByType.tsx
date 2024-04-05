"use client"
import { useFilter } from "@/hooks/useFilter";
import { FilterType } from "@/types/filterTypes";
import styled from "styled-components"

interface FilterItemProps {
    selected: boolean;
}

const FilterList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    list-style: none;
`

const FilterItem = styled.li<FilterItemProps>`
    font-family: inherit;
    font-weight: ${props => props.selected ? '600' : '400'};
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;

    color: ${props => props.selected ? 'var(--text-dark)' : 'var(--text-filter)'};

    border-bottom: ${props => props.selected ? '4px solid var(--border-bottom)' : ''};

    @media(min-width: ${props => props.theme.desktopBreakpoint}) {
        font-size: 16px;
        line-height: 22px;
    }
`

export const FilterByType = () => {
    const {type, setType}= useFilter();

    const handleChangeType = (newType: FilterType) => {
        setType(newType);
    }

    return(
        <FilterList>
            <FilterItem 
                selected={type === FilterType.ALL} 
                onClick={() => handleChangeType(FilterType.ALL)}
            >
                TODOS OS PRODUTOS
            </FilterItem>
            <FilterItem 
                selected={type === FilterType.SHIRT} 
                onClick={() => handleChangeType(FilterType.SHIRT)}
            >
                CAMISETAS
            </FilterItem>
            <FilterItem 
                selected={type === FilterType.MUG} 
                onClick={() => handleChangeType(FilterType.MUG)}
            >
                CANECAS
            </FilterItem>
        </FilterList>
    )
}