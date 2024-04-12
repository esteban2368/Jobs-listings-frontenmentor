"use client"
import { createContext, useContext, useState } from "react"
import {v4 as uuidv4} from 'uuid'

const FilterContext = createContext(null)
export const useFilterContext = () => useContext(FilterContext)

const FiltersProvider = ({children})=>{
    const [filtersItem, setFilterItem] = useState([])

    const removeFilters = (filterElement)=>{
        setFilterItem(
            filtersItem.filter(f=>
                f.id !== filterElement.id
        ))
    }
    const clearFilters = ()=>{
        setFilterItem([])
    }
    const addFilters = (filterTag)=>{
        const existFilter = filtersItem.some((filterItem)=> filterItem.name === filterTag)
        if (existFilter) return
        setFilterItem([
            ...filtersItem,
            {id:uuidv4(), name: filterTag }
        ])
    }

    return(
        <FilterContext.Provider value={{filtersItem, removeFilters, clearFilters, addFilters}}>
            {children}
        </FilterContext.Provider>
    )
}

export default FiltersProvider