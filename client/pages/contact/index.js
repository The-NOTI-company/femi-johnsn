/* eslint-disable @next/next/no-img-element */
import DefaultLayout from "../../components/layouts/default-layout";
import styles from '../../styles/pages/Contact.module.scss'
import { classNames } from "../../utils/classNames";

export default function Contact() {
    return (
        <DefaultLayout
            className={ classNames(styles["container"] )}
            title="Contact me"
            showSubFooter={false}
            isNavDark={false}
            invertMenuColours={false}
            setMixBlend={true}
            spinningLogoClassName="bottom-12 left-[72px]"
        >
            <main className="bg-secondary pt-[111px]">
                <section className="w-full">
                    <div className="flex flex-col w-full">
                        <div className="flex mx-[6%]">
                            <div>
                                <p className="text-[96px] leading-[131px] tracking-wide text-primary uppercase font-body font-semibold">
                                    say hello
                                </p>
                                <p className="text-[96px] leading-[131px] tracking-wide text-primary uppercase font-body font-semibold">
                                    to Femi Johnsn -
                                </p>
                            </div>
                            <a href="#" className="w-[248px] h-[248px] border-accent border-2 m-auto rounded-full relative duration-300 group hover:bg-accent">
                                <p className="absolute top-[43%] left-[22%] uppercase text-heading-4 text-accent font-body duration-300 group-hover:text-secondary">
                                    Contact me
                                </p>
                            </a>
                        </div>
                        <a href="#" className="text-[7em] leading-[131px] tracking-wider text-primary uppercase font-body font-semibold underline ml-[6%]">
                            femijohnsnn@gmail.com
                        </a>
                    </div>
                    <div className="flex justify-between mx-[6%] my-32">
                        <div className="block mr-11"></div>
                        <div className="font-body">
                            <h1 className="text-heading-1 font-semibold mb-[60px]">Socials</h1>
                            <ul>
                                <li className="text-base-big font-normal uppercase">
                                    <a href="#">instagram</a>
                                </li>
                                <li className="text-base-big font-normal uppercase my-6">
                                    <a href="#">behance</a>
                                </li>
                                <li className="text-base-big font-normal uppercase">
                                    <a href="#">twitter</a>
                                </li>
                            </ul>
                        </div>
                        <div className="max-w-[387px]">
                            <img src={"/assets/png/contact/femi-1.png"} alt="Femi"/>
                        </div>
                    </div>
                </section>
                <section className="bg-primary font-body px-[100px] pt-24">
                    <h3 className="text-[96px] leading-[131px] tracking-wide text-secondary font-semibold">Hello,</h3>
                    <form className="flex flex-col">
                        <div className="flex w-full">
                            <h2 className="text-[96px] leading-[131px] tracking-wide text-secondary uppercase font-semibold w-2/5">My name is </h2>
                            <div className="border-b-2 border-secondary flex flex-col w-3/5 pt-11">
                                <input type="text" placeholder="Your name goes here." className="text-base-semi-bold bg-transparent self-end h-full w-full text-secondary text-right"/>
                            </div>
                        </div>
                        <div className="flex w-full my-5">
                            <h2 className="text-[96px] leading-[131px] tracking-wide text-secondary uppercase font-semibold w-2/5">My email is </h2>
                            <div className="border-b-2 border-secondary flex flex-col w-3/5 pt-11">
                                <input type="email" placeholder="Your email goes here." className="text-base-semi-bold bg-transparent self-end h-full w-full text-secondary text-right"/>
                            </div>
                        </div>
                        <div className="flex w-full">
                            <h2 className="text-[96px] leading-[131px] tracking-wide text-secondary uppercase font-semibold w-2/5">I want to</h2>
                            <div className="border-b-2 border-secondary flex flex-col w-3/5 pt-11">
                                <input type="text" placeholder="Description of shoot." className="text-base-semi-bold bg-transparent self-end h-full w-full text-secondary text-right"/>
                            </div>
                        </div>
                        <button className="rounded-full uppercase border-2 border-accent w-60 h-60 self-center mt-[75px] mb-24 group duration-300 hover:bg-accent">
                            <span className="text-accent text-heading-4 duration-300 group-hover:text-secondary">Send</span>
                        </button>
                    </form>
                </section>
            </main>
        </DefaultLayout>
    )
}