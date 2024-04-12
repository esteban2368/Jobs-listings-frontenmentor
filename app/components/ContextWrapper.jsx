'use client'
import { useFilterContext } from '../contexts/FiltersProvider'

const ContextWrapper = ({children})=>{
    const {filtersItem} = useFilterContext()
    return filtersItem.length ? children : null
}

export default ContextWrapper