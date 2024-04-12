'use client'
import {v4 as uuidv4} from 'uuid'
import style from './Jobs.module.css'

import { useFilterContext } from '../contexts/FiltersProvider'

const Tags = ({list})=>{
    const {addFilters} = useFilterContext()
    const {role, level, languages, tools} = list
    const filters = [role, level, ...languages, ...tools]
    const keys = filters.map(()=> uuidv4())
    return(
        <>
            {filters.map((filter, index) =>
                <button key={keys[index]} onClick={()=> addFilters(filter)} className={style.filter}>{filter}</button> 
            )}
        </>
    )
}

export default Tags