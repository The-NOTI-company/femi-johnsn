/* eslint-disable @next/next/no-img-element */
import { useState } from "react"
import Link from "next/link"
import styles from '../../styles/components/Navigation.module.scss'
import { classNames } from '../../utils/classNames'

const Navigation = ({ isNavDark, invertMenuColours=false, backButtonDestination="", setMixBlend=false }) => {
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    const showLightBg = showMenu && isNavDark

    return (
        <nav className={
            classNames(
                    styles["navigation-container"],
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
                )}>
                <div>
                    {
                        backButtonDestination ?
                            (
                                <Link href={`${backButtonDestination}`}>
                                    <div className={classNames("flex items-center cursor-pointer group", showLightBg && "invert")}>
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
                                <Link href="/">
                                    <img
                                        className={ classNames( "duration-300 w-full max-w-[34px] cursor-pointer tablet:max-w-[40px]", showLightBg && "invert")}
                                        src={"/assets/svg/navigation/logo.svg"}
                                        alt="Femi Johnsn"
                                    />    
                                </Link>
                               
                            )
                    }
                </div>
                <button className={styles["menu-btn"]} onClick={toggleMenu}>
                    <h4 className={
                            classNames(
                                "text-white text-heading-6 font-light duration-150 tablet:text-base",
                                showLightBg && "text-primary",
                                showMenu ? "mr-0" : "mr-[19px]"
                            )
                        }
                    >
                        {!showMenu ? "Menu" : "Close"}
                    </h4>
                    <div className={
                        classNames(
                            styles["hamburger"],
                            showMenu && styles["show-menu"],
                            showLightBg && styles["bars-light"]
                        )
                    }>
                        <div className={ classNames(styles['bar'], styles['bar-1']) }></div>
                        <div className={ classNames(styles['bar'], styles['bar-2'], "my-[6px]") }></div>
                        <div className={ classNames(styles['bar'], styles['bar-3']) }></div>
                    </div>
                </button>
            </div>
            <div className={
                    classNames(
                        styles["menu"],
                        "h-full w-full fixed -translate-y-[200%] duration-700",
                        showLightBg ? "bg-secondary" : "bg-primary",
                        showMenu && "translate-y-0"
                    )
                }
            >
                <div className="flex justify-around w-full px-[10%] mt-40">
                    <div className="hidden max-w-[379px] w-full mr-10 breakpoint-i:mr-0 breakpoint-iv:block">
                        <img
                            className="block w-full max-w-[379px]"
                            src={"/assets/png/navigation/navbar-img.png"}
                            alt="A model"
                        />
                    </div>
                    <div className={
                            classNames(
                                "font-body text-right breakpoint-iv:text-left",
                                isNavDark ? " text-primary" : "text-secondary"
                            )
                        }
                    >
                        <ul className="mb-10">
                            <li className="text-heading-2 font-semibold mb-4 tablet:text-heading-1 tablet:mb-8">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="text-heading-2 font-semibold mb-4 tablet:text-heading-1 tablet:mb-8">
                                <Link href="/photography/all">Work</Link>
                            </li>
                            <li className="text-heading-2 font-semibold mb-4 tablet:text-heading-1 tablet:mb-8">
                                <Link href="/about">About</Link>
                            </li>
                            <li className="text-heading-2 font-semibold tablet:text-heading-1">
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>
                        <ul className="mb-16">
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
                </div>
            </div>
        </nav>

    )
}

export default Navigation
