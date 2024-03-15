"use client"

import { FilterType } from "@/types/filterTypes";
import { PriorityTypes } from "@/types/priorityTypes";
import { ReactNode, createContext, useState } from "react";

export const FilterContext = createContext({
    search: '',
    page: 0,
    type: FilterType.ALL,
    priority: PriorityTypes.NEWS,
    setPriority: (value: number) => {},
    setSearch: (value: string) => {},
    setPage: (value: number) => {},
    setType: (value: FilterType) => {},
})

interface ProviderProps {
    children: ReactNode
}

export const FilterContextProvider = ({ children }: ProviderProps) => {
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(0);
    const [type, setType] = useState(FilterType.ALL);
    const [priority, setPriority] = useState(PriorityTypes.NEWS);

    return(
        <FilterContext.Provider value={{
            search, 
            page, 
            type, 
            setSearch, 
            setPage, 
            setType, 
            priority, 
            setPriority}}>
            {children}
        </FilterContext.Provider>
    )
} 