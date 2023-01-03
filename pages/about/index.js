/* eslint-disable @next/next/no-img-element */
import DefaultLayout from "../../components/layouts/default-layout";
import styles from '../../styles/pages/Contact.module.scss'
import { classNames } from "../../utils/classNames";

export default function About() {
    return (
        <DefaultLayout
            className={classNames(styles["container"])}
            title="About Femi Johnsn"
            showSubFooter={true}
            isNavDark={true}
            invertMenuColours={false}
            spinningLogoClassName="bottom-12 left-[40px]"
        >
            <main className="pt-[111px] max-w-[70%] mx-auto mb-[415px]">
                <section className=" pt-[130px]">
                    <p className=" text-4xl font-body font-medium text-[#F0F9F1] opacity-60">
                        For us who do not know  ourselves but still have to give content. I am Femi Johnsn and I am an editorial photographer 
                    </p>
                </section>
                <section className="flex justify-between text-secondary mt-36">
                    <h1 className="text-display-7 font-cursive uppercase">About</h1>
                    <div className="relative w-[55%]">
                        <div className="absolute -z-10 top-[-60px] right-0 max-w-[187px]">
                            <img src={"/assets/png/about/femi-2.png"} alt="Femi"/>
                        </div>
                        <div className={classNames("text-secondary text-[20px] leading-9 font-body", styles['about-text'])}>
                            <p>
                                It{"'"}s been a long road to get here, from discovering my path to understanding it. My name is Femi Johnsn, and I{"'"}m a fashion photographer. I{"'"}ve been shooting for five years, but I only started doing fashion photography two years ago.
                            </p>
                            <p>
                                I was enthralled by the color palette on set and the creative intent behind each piece, and I desired that.
                            </p>
                            <p>
                                Before discovering fashion photography, I wasn{"'"}t really loving my photography; I just wasn{"'"}t creating enough, thus fashion photography gave life to this, revived me.
                            </p>
                            <p>
                                From the styling, to the models, to the colors, to their eyes, it{"'"}s all there.
                                You could feel their aura just by gazing into their eyes. For the first time, I felt alive.
                            </p>
                        </div>
                        <div className="absolute -z-10 bottom-[-160px] left-[-50px] max-w-[153px]">
                            <img src={"/assets/png/about/femi-1.png"} alt="Femi"/>
                        </div>
                    </div>
                </section>
            </main>
        </DefaultLayout>
    )
}