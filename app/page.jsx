import Filters from "./components/Filters";
import Jobs from "./components/Jobs";
import ContextWrapper from "./components/ContextWrapper";
import Providers from "./components/Providers";

import style from "./Home.module.css"

const getJobs =  async () =>{
  const response = await fetch('http://localhost:3000/api',{
    method: 'GET'
  })
  return response.json()
}

export default async function Home() {
  const jobsData = await getJobs()
  return (
    <>
      <header className={style.header}></header>
      <section className={`${style.container} flex flex-col gap-14 sm:gap-10 mx-6 mt-8`}>
        <Providers>
          <ContextWrapper>
            <Filters/>
          </ContextWrapper>
          <Jobs list={jobsData}/>
        </Providers>
      </section>
    </>
  );
}
