"use client"
import { FilterByType } from "./filter-by-type"

interface FilterBarProps {

}

export function FilterBar(props : FilterBarProps){
    return(
        <div>
            <FilterByType/>
        </div>
    )
}