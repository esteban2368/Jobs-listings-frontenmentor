'use client'
import {v4 as uuidv4} from 'uuid'
import style from './Jobs.module.css'

const Tags = ({list})=>{
    const {role, level, languages, tools} = list
    const filters = [role, level, ...languages, ...tools]
    const keys = filters.map(()=> uuidv4())
    return(
        <>
            {filters.map((filter, index) =>
                <button key={keys[index]} onClick={()=> alert("Filtrado!")} className={style.filter}>{filter}</button> 
            )}
        </>
    )
}

export default Tags