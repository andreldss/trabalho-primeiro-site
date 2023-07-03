import { useContext } from "react";
import { filterContext } from "../contexts/filter-context";

export function useFilter(){
    return useContext(filterContext)
}