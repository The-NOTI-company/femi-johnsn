/* eslint-disable @next/next/no-img-element */
import { toast } from "react-hot-toast";
import DefaultLayout from "../../components/layouts/default-layout";
import styles from '../../styles/pages/Contact.module.scss'
import { classNames } from "../../utils/classNames";
import { useEffect, useRef } from "react";

export default function Contact() {
    const contactForm = useRef(null)

    const responseLink = "https://docs.google.com/forms/d/e/1FAIpQLSdKd4sklEMANPar4noW06nBj4BKXDAGZEPGmzcFzLNVDG0G1Q/formResponse"

    const handleSubmit = (e) => {
        e.preventDefault()
        const contactName = e.target.elements["entry.364101381"].value
        const contactEmail = e.target.elements["entry.1419107623"].value
        const description = e.target.elements["entry.653997729"].value

        toast(`You'll hear from me soon, ${contactName}`, {
            icon: "💚"
        })

        fetch(responseLink, {
            method: 'post',
            body : JSON.stringify({
                "entry.364101381": contactName,
                "entry.1419107623": contactEmail,
                "entry.653997729": description
            }),
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
          })
            .then(() => {
                toast(`You'll hear from me soon, ${contactName}`, {
                    icon: "💚"
                })
            })
            .catch(function(error) {
                toast(`An error occurred: ${error}`, {
                    icon: "💚"
                })
            });
       
        contactForm.current.reset()
    }

    return (
        <DefaultLayout
            className={ classNames(styles["container"] )}
            title="Contact me"
            showSubFooter={false}
            isNavDark={false}
            invertMenuColours={false}
            setMixBlend={true}
            spinningLogoClassName="bottom-12 left-[10px] tablet:left-[72px]"
        >
            <main className="bg-secondary pt-[111px]">
                <section className="w-full">
                    <div className="flex flex-col w-full">
                        <div className="flex mx-[6%]">
                            <div className={
                                classNames(
                                    "tracking-tight text-primary uppercase font-body font-semibold breakpoint-iii:tracking-wide",
                                    styles.contactTitle
                                )
                            }>
                                <p>
                                    say hello
                                </p>
                                <p>
                                    to Femi Johnsn -
                                </p>
                            </div>
                            <a href="mailto:femijohnsnn@gmail.com" className="w-[248px] h-[248px] border-accent border-2 m-auto rounded-full relative duration-300 group hover:bg-accent hidden breakpoint-i:block">
                                <p className="absolute top-[43%] left-[22%] uppercase text-heading-4 text-accent font-body duration-300 group-hover:text-secondary">
                                    Contact me
                                </p>
                            </a>
                        </div>
                        <a href="mailto:femijohnsnn@gmail.com" className={classNames("tracking-wider text-primary uppercase font-body font-semibold ml-[6%] underline w-full", styles.emailText)}>
                            femijohnsnn@gmail.com
                        </a>
                    </div>
                    <div className="flex flex-col-reverse justify-between mx-[6%] mt-12 mb-32 breakpoint-iii:flex-row breakpoint-iii:mt32">
                        <div className="block mr-11"></div>
                        <div className="font-body">
                            <h1 className="text-heading-3 font-semibold mb-[30px] breakpoint-vii:text-heading-1 breakpoint-vii:mb-[60px]">Socials</h1>
                            <ul>
                                <li className="text-heading-4 font-normal uppercase mb-4 breakpoint-vii:text-base-big breakpoint-vii:mb-0">
                                    <a href="https://www.instagram.com/femijohnsn/" target="_blank" rel="noreferrer" >instagram</a>
                                </li>
                                <li className="text-heading-4 font-normal uppercase mb-4 breakpoint-vii:text-base-big breakpoint-vii:mb-0">
                                    <a href="https://www.behance.net/femijohnsn?tracking_source=search_projects%7Cfemijohnsn" target="_blank" rel="noreferrer" >behance</a>
                                </li>
                                <li className="text-heading-4 font-normal uppercase mb-4 breakpoint-vii:text-base-big breakpoint-vii:mb-0">
                                    <a href="https://twitter.com/femijohnsn" target="_blank" rel="noreferrer" >twitter</a>
                                </li>
                            </ul>
                        </div>
                        <div className="max-w-full mb-16 breakpoint-iii:max-w-[387px] breakpoint-iii:mb-0">
                            <img src={"/assets/png/contact/femi-1.png"} className="w-full" alt="Femi"/>
                        </div>
                    </div>
                </section>
                <section className="bg-primary font-body px-[4%] pt-24 tablet:px-[100px]">
                    <h3 className={classNames("tracking-wide text-secondary  font-semibold", styles.formTitle)}>Hello,</h3>
                    <form ref={contactForm} action={responseLink} target="_blank" className="flex flex-col">
                        <div className="flex flex-col w-full desktop:flex-row ">
                            <h2 className={classNames("tracking-wide text-secondary uppercase font-semibold w-full desktop:w-2/5", styles.formTitle)}>My name is </h2>
                            <div className="border-b-2 border-secondary flex flex-col pt-11 pb-8 w-full desktop:w-3/5 desktop:pb-0">
                                <input name="entry.364101381" required type="text" placeholder="Your name goes here." className="text-base-semi-bold bg-transparent self-end h-full w-full text-secondary text-right"/>
                            </div>
                        </div>
                        <div className="flex flex-col w-full my-5 desktop:flex-row">
                            <h2 className={classNames("tracking-wide text-secondary uppercase font-semibold w-full desktop:w-2/5", styles.formTitle)}>My email is </h2>
                            <div className="border-b-2 border-secondary flex flex-col pt-11 pb-8 w-full desktop:w-3/5 desktop:pb-0">
                                <input name="entry.1419107623" required type="email" placeholder="Your email goes here." className="text-base-semi-bold bg-transparent self-end h-full w-full text-secondary text-right"/>
                            </div>
                        </div>
                        <div className="flex flex-col w-full desktop:flex-row">
                            <h2 className={classNames("tracking-wide text-secondary uppercase font-semibold w-full desktop:w-2/5", styles.formTitle)}>I want to</h2>
                            <div className="border-b-2 border-secondary flex flex-col pt-11 pb-8 w-full desktop:w-3/5 desktop:pb-0">
                                <input name="entry.653997729" required type="text" placeholder="Description of shoot." className="text-base-semi-bold bg-transparent self-end h-full w-full text-secondary text-right"/>
                            </div>
                        </div>
                        <button type="submit" className="rounded-full uppercase border-2 border-accent w-60 h-60 self-center mt-[75px] mb-24 group duration-300 hover:bg-accent">
                            <span className="text-accent text-heading-4 duration-300 group-hover:text-secondary">Send</span>
                        </button>
                    </form>
                </section>
            </main>
        </DefaultLayout>
    )
}