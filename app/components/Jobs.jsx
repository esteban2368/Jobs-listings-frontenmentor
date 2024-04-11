import Image from "next/image";
import Tags from "./Tags";
import style from "./Jobs.module.css"

const Jobs = ({list}) =>{
    return(
        <ul className={style.containerCards}>
           { list.map(job => 
                <li key={job.id} className={`${style.card}`}>
                    <Image
                        src={job.logo}
                        alt={`Logo company ${job.company}`}
                        width={48}
                        height={48}
                        className={`${style.imageCompany} sm:hidden`}
                    />
                    <div className={`${style.card__container} flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 p-6 pt-8 sm:px-10 sm:py-8`}>
                        {job.featured &&
                            <div className={style.card__line}></div>
                        }
                        <div className="sm:flex items-center gap-6">
                            <Image
                                src={job.logo}
                                alt={`Logo company ${job.company}`}
                                width={88}
                                height={88}
                                className="hidden sm:block"
                            />
                            <div className={style.info}>
                                <div className="flex gap-4 items-center">
                                    <span className={style.title}>{job.company}</span>
                                    <div className="flex items-center gap-2">
                                        {job.new &&
                                            <span className={`${style.badge} ${style.badge_level1} p-2`}>New!</span>
                                        }
                                        {job.featured &&
                                            <span className={`${style.badge} ${style.badge_level2} p-2`}>Feactured</span>
                                        }
                                    </div>
                                </div>
                                <span className={`${style.title} ${style.title__sub}`}>{job.position}</span>
                                <div className={style.info__general}>
                                    <span>{job.postedAt}</span>
                                    <span className={style.bullet}>&bull;</span>
                                    <span>{job.contract}</span>
                                    <span className={style.bullet}>&bull;</span>
                                    <span>{job.location}</span>
                                </div>
                            </div>
                        </div>
                        <div className={style.separate}></div>
                        <div className="flex flex-wrap gap-4 mt-2">
                            <Tags list={job}/>
                        </div>
                    </div>
                </li>
            )}
        </ul>
    )
}

export default Jobs