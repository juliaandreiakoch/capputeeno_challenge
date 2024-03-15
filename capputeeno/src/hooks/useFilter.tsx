import { FilterContext } from "@/context/filterContext"
import { useContext } from "react"

export const useFilter = () => {
    return useContext(FilterContext)
}