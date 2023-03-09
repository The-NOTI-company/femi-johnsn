/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import ProjectsLayout from "../../components/layouts/projects-layout"
import styles from '../../styles/pages/Projects.module.scss'

export default function Projects() {
    return (
        <ProjectsLayout
            className={styles['container']}
            title="Projects"
            description="Projects outside photography"
            isNavDark={true}
            invertMenuColours={false}
            backButtonDestination="/"
        >
            <main className="mt-[111px] p-[57px]">
                <section className="flex flex-col">
                    <div className="w-full mx-12 relative">
                        <div className="absolute top-[-90px]">
                            <img
                                src={"/assets/svg/projects/star-vector.svg"}
                                alt="Star"
                            />
                        </div>
                        <div className="text-display-1 text-secondary font-cursive">
                            <div className="flex">
                                <h1>Outside</h1>
                                <div className="self-center ml-[10%]">
                                    <img
                                        src={"/assets/svg/projects/smiley-blue.svg"}
                                        alt="Smiley"
                                    />
                                </div>
                            </div>
                            <h1 className="ml-[20%]">Photography</h1>
                        </div>
                        <div className="relative">
                            <img
                                src={"/assets/svg/projects/underline.svg"}
                                alt="Underline"
                            />
                            <div className="absolute bottom-[-90px] left-[140px]">
                                <img
                                    src={"/assets/svg/projects/star-vector-ii.svg"}
                                    alt="Star"
                                />
                            </div>
                            <div className="absolute bottom-[-50px] right-[40px]">
                                <img
                                    src={"/assets/svg/projects/star-vector-iii.svg"}
                                    alt="Star"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-32 mb-16 self-end mr-28">
                        <a href="#" className="flex max-h-min">
                            <h2 className="text-[19px] leading-[25px] text-white self-center mt-24 -mr-7">scroll down</h2>
                            <img
                                src={"/assets/svg/projects/spiral.svg"}
                                alt="Spiral"
                            />
                        </a>
                    </div>
                    <p className="w-[75%] text-[#808080]">
                        These are the projects that make us who we are bla bla bla. We tend to communicate bla bla Lörem ipsum cybersoldat parasport benim i poke fast fabir i sovyn. Dylanman kungspudel rutkod, på krympflation, buda berenur, hyberavdrag. Munhota vifalingar: klimatneutral att cykelbox ogooglebar. 
                    </p>
                </section>
                <section className="mt-20">
                    <div className="flex justify-between items-center">
                        <div>
                            <img
                                src={"/assets/svg/projects/star-vector.svg"}
                                alt="Star"
                            />
                        </div>
                        <div>
                            <img
                                src={"/assets/svg/projects/cube.svg"}
                                alt="Star"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className="flex w-full ">
                            <div className="">
                                <img
                                    className="w-full"
                                    src={"/assets/png/projects/noti.png"}
                                    alt="NOTI"
                                />
                            </div>
                            <div className="mx-[72px] relative">
                                <h1 className="text-[38px] leading-[50px] text-secondary font-cursive">
                                    The Noti Company
                                </h1>
                                <p className="text-[19px] leading-[25px] text-secondary mt-[34px] mb-[30px] w-[80%]">
                                    Have you ever gazed into someone eyes and seen their souls, deepest secrets, and wildest fantasies? Come along with me on a tour through their illusion.
                                </p>
                                <div className="flex text-[19px] leading-[25px] text-secondary mb-8">
                                    <h2>Role:</h2>
                                    <div className="flex ml-2">
                                        <p>Creative Director</p>
                                        <span className="mx-1">|</span>
                                        <p>Co-founder</p>
                                    </div>
                                </div>
                                <Link href="/">
                                    <div className="flex items-center cursor-pointer group">
                                        <p className="text-heading-6 text-secondary">View work</p>
                                        <img
                                            className="duration-200 rotate-180 ml-[10px] group-hover:translate-x-1"
                                            src={"/assets/svg/navigation/back-icon.svg"}
                                            alt="Forward"    
                                        /> 
                                    </div>
                                </Link>
                                <div className="absolute top-[230px] right-44">
                                    <img
                                        src={"/assets/svg/projects/sparks.svg"}
                                        alt="Sparks"
                                    />
                                </div>
                                <div className="absolute bottom-44 left-10">
                                    <img
                                        src={"/assets/svg/projects/spiral-ii.svg"}
                                        alt="Spiral"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row-reverse w-full justify-between">
                            <div className="-mt-40">
                                <img
                                    className="w-full"
                                    src={"/assets/png/projects/icreate.png"}
                                    alt="NOTI"
                                />
                            </div>
                            <div className="mt-32 relative">
                                <div className="absolute -top-12 left-28">
                                    <img
                                        src={"/assets/svg/projects/round.svg"}
                                        alt="Round illustration"
                                    />
                                </div>
                                <h1 className="text-[38px] leading-[50px] text-secondary font-cursive">
                                    iCreate
                                </h1>
                                <p className="text-[19px] leading-[25px] text-secondary mt-[34px] mb-[35px] w-[80%]">
                                    Have you ever gazed into someone eyes and seen their souls, deepest secrets, and wildest fantasies? Come along with me on a tour through their illusion.
                                </p>
                                <div className="flex text-[19px] leading-[25px] text-secondary mb-8">
                                    <h2>Role:</h2>
                                    <div className="flex ml-2">
                                        <p>Creative Director</p>
                                        <span className="mx-1">|</span>
                                        <p>Co-founder</p>
                                    </div>
                                </div>
                                <Link href="/">
                                    <div className="flex items-center cursor-pointer group">
                                        <p className="text-heading-6 text-secondary">View work</p>
                                        <img
                                            className="duration-200 rotate-180 ml-[10px] group-hover:translate-x-1"
                                            src={"/assets/svg/navigation/back-icon.svg"}
                                            alt="Forward"    
                                        /> 
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="flex w-full justify-between">
                            <div>
                                <img
                                    className="w-full"
                                    src={"/assets/png/projects/nfts.png"}
                                    alt="NOTI"
                                />
                            </div>
                            <div className="mx-[74px] mt-40 relative">
                                <div className="absolute -top-12 right-44">
                                    <img
                                        src={"/assets/svg/projects/arrow.svg"}
                                        alt="Arrow illustration"
                                    />
                                </div>
                                <h1 className="text-[38px] leading-[50px] text-secondary font-cursive">
                                    I Love NFTs
                                </h1>
                                <p className="text-[19px] leading-[25px] text-secondary mt-[34px] mb-[35px] w-[80%]">
                                    Have you ever gazed into someone eyes and seen their souls, deepest secrets, and wildest fantasies? Come along with me on a tour through their illusion.
                                </p>
                                <div className="flex text-[19px] leading-[25px] text-secondary mb-8">
                                    <h2>Role:</h2>
                                    <div className="flex ml-2">
                                        <p>Creative Director</p>
                                        <span className="mx-1">|</span>
                                        <p>Co-founder</p>
                                    </div>
                                </div>
                                <Link href="/">
                                    <div className="flex items-center cursor-pointer group">
                                        <p className="text-heading-6 text-secondary">View work</p>
                                        <img
                                            className="duration-200 rotate-180 ml-[10px] group-hover:translate-x-1"
                                            src={"/assets/svg/navigation/back-icon.svg"}
                                            alt="Forward"    
                                        /> 
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-row-reverse w-full">
                            <div className="-mt-40">
                                <img
                                    className="w-full"
                                    src={"/assets/png/projects/opus.png"}
                                    alt="Opus session"
                                />
                            </div>
                            <div className="mt-32 relative">
                                <div className="absolute -top-12 left-28">
                                    <img
                                        src={"/assets/svg/projects/round.svg"}
                                        alt="Round illustration"
                                    />
                                </div>
                                <h1 className="text-[38px] leading-[50px] text-secondary font-cursive">
                                    Opus Sessions
                                </h1>
                                <p className="text-[19px] leading-[25px] text-secondary mt-[34px] mb-[35px] w-[80%]">
                                    Have you ever gazed into someone eyes and seen their souls, deepest secrets, and wildest fantasies? Come along with me on a tour through their illusion.
                                </p>
                                <div className="flex text-[19px] leading-[25px] text-secondary mb-8">
                                    <h2>Role:</h2>
                                    <div className="flex ml-2">
                                        <p>Creative Director</p>
                                        <span className="mx-1">|</span>
                                        <p>Co-founder</p>
                                    </div>
                                </div>
                                <Link href="/">
                                    <div className="flex items-center cursor-pointer group">
                                        <p className="text-heading-6 text-secondary">View work</p>
                                        <img
                                            className="duration-200 rotate-180 ml-[10px] group-hover:translate-x-1"
                                            src={"/assets/svg/navigation/back-icon.svg"}
                                            alt="Forward"    
                                        /> 
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </ProjectsLayout>
    )
}