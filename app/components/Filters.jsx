'use client'
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import style from './Filters.module.css'

const Filters = ()=>{
    const filters = [{
            id: uuidv4(),
            name: "React"
        }, {
            id: uuidv4(),
            name: "Javascript"
        }, {
            id: uuidv4(),
            name: "Pyton"
        }, {
            id: uuidv4(),
            name: "HTML"
    }]
    const [filter, setFilter] = useState(
        filters
    )
    return (
        <div className={`${style.container} p-5 sm:px-10`}>
            <ul className="flex flex-wrap gap-4">
                {filter.map((filterElement, index)=>
                    <li key={filterElement.id} className={style.tag}>
                        <span className={style.tag__text}>{filterElement.name}</span>
                        <button 
                            className={style.tag__button}
                            onClick={()=>
                                setFilter(
                                    filter.filter(f=>
                                        f.id !== filterElement.id
                                ))
                            }
                        >
                            <FontAwesomeIcon icon={faXmark} className={style.tag__icon}/>
                        </button>
                    </li>
                )}
            </ul>
            <button className={style.link}>Clear</button>
        </div>
    )
}

export default Filters