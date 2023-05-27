/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import styles from "../../styles/components/Footer.module.scss"
import { classNames } from "../../utils/classNames"


function Footer({ showSubFooter }) {

    return (
        <footer className="flex flex-col mx-auto w-full font-body max-w-[85%] mt-[10%] breakpoint-v:mt-[15%] breakpoint-v:max-w-[75%]">
            {showSubFooter &&
                (
                    <div className="w-fit self-end">
                        <Link href="/contact">
                            <div className={ classNames("flex items-center pb-[45px] border-b-2 border-b-white cursor-pointer group", styles.makeMagicLink)}>
                                <h1 className={ classNames("text-secondary uppercase font-bold mr-[50px] duration-200 group-hover:-skew-x-12", styles.makeMagicLinkText)}>Make Magic</h1>
                                <svg width="109" height="74" viewBox="0 0 109 74" fill="none" className={ classNames(styles.makeMagicArrow, "group-hover:-skew-x-12 w-[60px] breakpoint-iii:w-[109px]")} xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.66152 30.1102V43.3407H82.032L63.8447 62.1986L72.4445 72.1214L107.505 37.0607L72.4445 2L63.8447 11.2523L82.032 29.4397H1.66152C1.66152 29.4324 1.22051 29.4366 1 29.4397" strokeWidth="2"/>
                                </svg>
                            </div>
                        </Link>
                        <div className="flex flex-col-reverse mt-32 mb-64 breakpoint-vi:flex-row">
                            <div className="text-secondary pr-[15%]">
                                <h4 className="text-heading-4 mb-10">Socials</h4>
                                <ul>
                                    <li className="uppercase text-base-semi-bold mb-4 duration-150 hover:text-accent">
                                        <a href="https://www.instagram.com/femijohnsn/?hl=en" target="_blank" rel="noreferrer">Instagram</a>
                                    </li>
                                    <li className="uppercase text-base-semi-bold mb-4 duration-150 hover:text-accent">
                                        <a href="https://www.behance.net/femijohnsn" target="_blank" rel="noreferrer">Behance</a>
                                    </li>
                                    <li className="uppercase text-base-semi-bold mb-4 duration-150 hover:text-accent">
                                        <a href="https://twitter.com/femijohnsn" target="_blank" rel="noreferrer">Twitter</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="text-secondary pr-[15%] mb-12 breakpoint-vi:mb-0">
                                <h4 className="text-heading-4 mb-10">Say Hello!</h4>
                                <a href="mailto:femijohnsnn@gmail.com" target="_blank" rel="noreferrer" className="text-base-semi-bold duration-150 hover:text-accent">
                                    femijohnsnn@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            <div className="border-t-2 border-t-white">
                <p className="text-secondary text-base-big py-9">Femi Johnsn © 2023</p>
            </div>
        </footer>
    )
}

export default Footer