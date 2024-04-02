import Jobs from "./components/Jobs";

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
      <section className={`${style.container} mx-6 mt-8`}>
        <Jobs list={jobsData}/>
      </section>
    </>
  );
}
