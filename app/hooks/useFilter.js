'use client'
import { useFilterContext } from "@/app/contexts/FiltersProvider"

  const useFilters = ()=>{
    const {filtersItem} = useFilterContext()

    const jobsWithFilters = (jobs) =>{
        return jobs.map(job => {
            const {role, languages, level, tools} = job
            const filtersJob = [role, level, ...languages, ...tools]
            return {...job, filters: filtersJob}
        })
    }
    const jobsFiltered = (jobs)=>{
        if (!filtersItem.length) return jobs
        return jobs.filter(job =>{
            return filtersItem.every(
                filterItem => job.filters.some(
                    filter => filter === filterItem.name
                ))
        })
    }
    return {jobsWithFilters, jobsFiltered}
  }

  export default useFilters