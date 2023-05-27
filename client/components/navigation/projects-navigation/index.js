/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import Link from "next/link"
import baseStyles from '../../../styles/components/Navigation.module.scss'
import styles from '../../../styles/components/ProjectsNavigation.module.scss'
import { classNames } from '../../../utils/classNames'

const ProjectsNavigation = ({ isNavDark, invertMenuColours=false, backButtonDestination="", setMixBlend=false }) => {
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    const showLightBg = showMenu && isNavDark

    return (
        <nav className={
            classNames(
                    baseStyles["navigation-container"],
                    showLightBg ? "bg-secondary" : "bg-primary",
                    showMenu && "fixed w-full top-0"
                )
            }
        >
            <div className={
                classNames(
                    "flex justify-between items-center py-8 px-[4.5%] mx-auto w-full fixed top-0 z-30 duration-500 breakpoint-ii:px-[4%] laptop:px-[8%]",
                    invertMenuColours && "invert",
                    setMixBlend && "mix-blend-difference"
                )
            }>
                <div>
                    {
                        backButtonDestination ?
                            (
                                <Link href={`${backButtonDestination}`}>
                                    <div className="flex items-center cursor-pointer group">
                                        <img
                                            className="duration-200 group-hover:-translate-x-1"
                                            src={"/assets/svg/navigation/back-icon.svg"}
                                            alt="Back"    
                                        /> 
                                        <p className="text-heading-6 ml-3 text-secondary">Back</p>
                                    </div>
                                </Link>
                            )
                        :
                            (
                                <img
                                    className={ classNames( "duration-300 w-full max-w-[42px]", showLightBg && "invert")}
                                    src={"/assets/svg/navigation/logo.svg"}
                                    alt="Femi Johnsn"
                                />    
                            )
                    }
                </div>
                <button className={baseStyles["menu-btn"]} onClick={toggleMenu}>
                    <h4 className={
                            classNames(
                                "text-white text-heading-6 font-normal duration-150 tablet:text-base",
                                showLightBg && "text-primary",
                                showMenu ? "mr-0" : "mr-[19px]"
                            )
                        }
                    >
                        {!showMenu ? "Menu" : "Close"}
                    </h4>
                    <div className={
                        classNames(
                            baseStyles["hamburger"],
                            showMenu && baseStyles["show-menu"],
                            showLightBg && baseStyles["bars-light"]
                        )
                    }>
                        <div className={ classNames(baseStyles['bar'], baseStyles['bar-1']) }></div>
                        <div className={ classNames(baseStyles['bar'], baseStyles['bar-2'], "my-[6px]") }></div>
                        <div className={ classNames(baseStyles['bar'], baseStyles['bar-3']) }></div>
                    </div>
                </button>
            </div>
            <div className={
                    classNames(
                        baseStyles["menu"],
                        styles['projects-navbar'],
                        "flex justify-items-end h-full w-full fixed -translate-y-[200%] duration-700",
                        showLightBg ? "bg-white" : "bg-primary",
                        showMenu && "translate-y-0"
                    )
                }
            >
                <div className="flex w-full h-full justify-end">
                    <div className={
                        classNames(
                            " w-full h-full px-[6%] max-w-[675px] bg-white relative pt-40 tablet:pt-52",
                        ) 
                    }>

                        <div className={
                                classNames(
                                    "font-body w-7/12",
                                    isNavDark ? " text-primary" : "text-secondary"
                                )
                            }
                        >
                            <ul className="mb-10">
                                <li className="text-heading-1 font-semibold mb-8">
                                    <Link href="/">Home</Link>
                                </li>
                                <li className="text-heading-1 font-semibold mb-8">
                                    <Link href="/projects">Projects</Link>
                                </li>
                                <li className="text-heading-1 font-semibold">
                                    <Link href="/photography">Photography</Link>
                                </li>
                            </ul>
                            <ul className="mb-40">
                                <li className="text-base font-normal mb-1">
                                    <a href="https://www.behance.net/femijohnsn" target="_blank" rel="noreferrer">Behance</a>
                                </li>
                                <li className="text-base font-normal mb-1">
                                    <a href="https://www.instagram.com/femijohnsn/?hl=en" target="_blank" rel="noreferrer">Instagram</a>
                                </li>
                                <li className="text-base font-normal mb-1">
                                    <a href="https://twitter.com/femijohnsn" target="_blank" rel="noreferrer">Twitter</a>
                                </li>
                            </ul>
                            <p className="text-base">Femi Johnsn, 2023</p>
                        </div>
                        <div className="absolute bottom-[400px] right-[10px] tablet:right-[200px] max-w-[42px] breakpoint-vi:max-w-[unset]">
                            <img
                                src={"/assets/svg/navigation/smiley.svg"}
                                alt="Smiley"
                            />
                        </div>
                    </div>
                </div>
                
            </div>
        </nav>

    )
}

export default ProjectsNavigation
