'use client'
import FiltersProvider from '../contexts/FiltersProvider'

const Providers = ({children})=>{
    return (
        <FiltersProvider>
            {children}
        </FiltersProvider>
    )
}

export default Providers