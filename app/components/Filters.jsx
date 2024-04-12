'use client'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import style from './Filters.module.css'

import { useFilterContext } from '../contexts/FiltersProvider'

const Filters = ()=>{
    const {filtersItem, removeFilters, clearFilters } = useFilterContext()
    return (
        <div className={`${style.container} p-5 sm:px-10`}>
            <ul className="flex flex-wrap gap-4">
                {filtersItem.map((filterElement, index)=>
                    <li key={filterElement.id} className={style.tag}>
                        <span className={style.tag__text}>{filterElement.name}</span>
                        <button 
                            className={style.tag__button}
                            onClick={()=> removeFilters(filterElement)}
                        >
                            <FontAwesomeIcon icon={faXmark} className={style.tag__icon}/>
                        </button>
                    </li>
                )}
            </ul>
            <button className={style.link} onClick={clearFilters}>Clear</button>
        </div>
    )
}

export default Filters