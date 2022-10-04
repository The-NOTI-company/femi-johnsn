import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import styles from '../../styles/components/Navigation.module.scss'
import { classNames } from '../../utils/classNames'

const Navigation = ({isNavDark}) => {
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
            <div className="flex justify-between items-center py-8 px-[15%] mx-auto w-full fixed top-0 z-20">
                <div>
                    <Image
                        className={ classNames( "duration-300", showLightBg && "invert")}
                        src={"/assets/svg/navigation/logo.svg"}
                        alt="Femi Johnsn"
                        width={42}
                        height={42}
                    />
                </div>
                <button className={styles["menu-btn"]} onClick={toggleMenu}>
                    <h4 className={
                            classNames(
                                "text-white mr-[19px] text-base",
                                showLightBg && "text-primary"
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
                        "h-full w-full fixed -translate-y-[200%]",
                        showLightBg ? "bg-secondary" : "bg-primary",
                        showMenu && "translate-y-0"
                    )
                }
            >
                <div className="flex justify-around w-full px-[10%] mt-40">
                    <div className="block max-w-[379px] w-full">
                        <Image
                            width={379}
                            height={520.52}
                            className="block h-full"
                            layout="responsive"
                            src={"/assets/png/navigation/navbar-img.png"}
                            alt="A model"
                        />
                    </div>
                    <div className={
                            classNames(
                                "font-body",
                                isNavDark ? " text-primary" : "text-secondary"
                            )
                        }
                    >
                        <ul className="mb-10">
                            <li className="text-heading-1 font-semibold mb-8">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="text-heading-1 font-semibold mb-8">
                                <Link href="/">Work</Link>
                            </li>
                            <li className="text-heading-1 font-semibold mb-8">
                                <Link href="/">About</Link>
                            </li>
                            <li className="text-heading-1 font-semibold">
                                <Link href="/">Contact</Link>
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
                        <p className="text-base">Femi Johnsn, 2022</p>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navigation
