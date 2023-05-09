/* eslint-disable @next/next/no-img-element */
import { classNames } from "../../../utils/classNames"
import Link from "next/link"

const PreviewLink = ({ picData, containerClassName="", imgClassName="" }) => {
    const { slug, title, initialImg, hoverImg, roles, link, redirect } = picData

    return (
        <div className={
            classNames("group cursor-pointer", containerClassName)
        }>
            {
                redirect ? (
                    <a href={link} target="_blank" rel="noreferrer" > 
                        <div className="w-full">
                            <div className="w-full relative">
                                <img className={classNames("hover:opacity-5 duration-700 w-full absolute h-full object-cover" , imgClassName)} src={initialImg} alt={title} />
                                <img className={classNames("object-cover w-full", imgClassName)} src={hoverImg} alt={title}/>
                            </div>
                            <div className="mt-16 mb-5">
                                <h4 className="text-heading-4 uppercase font-bold text-secondary tracking-widest">{title}</h4>
                                <div className="text-base text-secondary my-3 font-normal">
                                    { roles?.join(" | ") }
                                </div>
                                <div className="flex items-center">
                                    <p className='text-caption text-secondary mr-2 font-normal'>View work</p>
                                    <div className='group-hover:translate-x-1 duration-200'>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.7817 7.33336L7.20566 3.75736L8.14833 2.8147L13.3337 8.00003L8.14833 13.1854L7.20566 12.2427L10.7817 8.6667H2.66699V7.33336H10.7817Z" fill="#F0F9F1"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                ): (
                    <Link href={`/photography/all/${slug}`} scroll={true}> 
                        <div className="w-full">
                            <div className="w-full relative">
                                <img className={classNames("hover:opacity-5 duration-1000 w-full absolute h-full object-cover" , imgClassName)} src={initialImg} alt={title} />
                                <img className={classNames("object-cover w-full", imgClassName)} src={hoverImg} alt={title}/>
                            </div>
                            <div className="mt-16 mb-5">
                                <h4 className="text-heading-4 uppercase font-bold text-secondary tracking-widest">{title}</h4>
                                <div className="text-base text-secondary my-3 font-normal">
                                    { roles?.join(" | ") }
                                </div>
                                <div className="flex items-center">
                                    <p className='text-caption text-secondary mr-2 font-normal'>View work</p>
                                    <div className='group-hover:translate-x-1 duration-200'>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.7817 7.33336L7.20566 3.75736L8.14833 2.8147L13.3337 8.00003L8.14833 13.1854L7.20566 12.2427L10.7817 8.6667H2.66699V7.33336H10.7817Z" fill="#F0F9F1"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            }
        </div>
    )
}

export default PreviewLink