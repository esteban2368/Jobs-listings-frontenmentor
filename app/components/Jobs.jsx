import Image from "next/image";
import style from "./Jobs.module.css"

const Jobs = ({list}) =>{
    return(
        <ul className={style.containerCards}>
           { list.map(job => 
                <li key={job.id} className={style.card}>
                    <Image
                        src={job.logo}
                        alt={`Logo company ${job.company}`}
                        width={48}
                        height={48}
                    />
                    <div className={style.info}></div>
                </li>
            )}
        </ul>
    )
}

export default Jobs