"use client"
import { ReactNode, createContext, useState } from "react";
import { FilterTypes } from "../types/filter-types";

export const filterContext = createContext({
    search: '',
    page: 0,
    type: FilterTypes.US,
    setSearch: (value: string) => {},
    setPage: (value: number) => {},
    setType: (value: FilterTypes) => {},
})

interface ProviderProps {
    children: ReactNode
}

export function FilterContextProvider({ children }: ProviderProps){
    const[search, setSearch] = useState('')
    const[page, setPage] = useState(0)
    const[type, setType] = useState(FilterTypes.US)

    return(
        <filterContext.Provider value={{search, page, type, setSearch, setType, setPage}}>
            {children}
        </filterContext.Provider>
    )   
}