/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react"
import ProjectsLayout from "../../components/layouts/projects-layout"
import styles from '../../styles/pages/Projects.module.scss'
import anime from "animejs"
import { classNames } from "../../utils/classNames"

export default function Projects() {

    const animationRef = useRef(null)

    useEffect(() => {
        animationRef.current = anime({
            targets: '#illustrations .star-vector path',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 1500,
            delay: function(el, i) { return i * 250 },
            // direction: 'alternate',
            // loop: true
        });
    },[])

    return (
        <ProjectsLayout
            className={styles['container']}
            title="Projects"
            description="Projects outside photography"
            isNavDark={true}
            invertMenuColours={false}
            backButtonDestination="/"
        >
            <main className="mt-[111px] py-[57px] px-[22px] tablet:p-[57px]">
                <section className="flex flex-col">
                    <div className="w-full mx-12 relative self-center">
                        <div className="absolute top-[-90px] max-w-[18px] breakpoint-iii:max-w-[unset]">
                            <img
                                src={"/assets/svg/projects/star-vector.svg"}
                                alt="Star"
                            />
                        </div>
                        <div className={classNames("text-secondary font-cursive", styles.projectsPageTitle)}>
                            <div className="flex">
                                <h1>Outside</h1>
                                <div className="self-center ml-[10%] max-w-[40px] breakpoint-iii:max-w-[unset]">
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
                            <div className="absolute bottom-[-90px] left-[140px] max-w-[18px] breakpoint-iii:max-w-[unset]">
                                <img
                                    src={"/assets/svg/projects/star-vector-ii.svg"}
                                    alt="Star"
                                />
                            </div>
                            <div className="absolute bottom-[-50px] right-[40px] max-w-[18px] breakpoint-iii:max-w-[unset]">
                                <img
                                    src={"/assets/svg/projects/star-vector-iii.svg"}
                                    alt="Star"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-32 mb-16 self-end mr-0 breakpoint-iii:mr-28">
                        <div className="flex max-h-min">
                            <h2 className="text-[19px] leading-[25px] text-white self-center mt-24 -mr-7">scroll down</h2>
                            <img
                                className="max-w-[70px] breakpoint-iii:max-w-[unset]"
                                src={"/assets/svg/projects/spiral.svg"}
                                alt="Spiral"
                            />
                        </div>
                    </div>
                    <p className="w-[95%] text-[#808080] breakpoint-iv:w-[75%]">
                        Welcome to the projects section of the multi-faceted individual who has a wide range of interests! Here, you will find a diverse collection of topics that capture my attention and curiosity. From music and art to NFTs and technology, I have something for everyone so sit back, relax, and immerse yourself in the world of a passionate and inquisitive person.
                    </p>
                </section>
                <section className="mt-20">
                    <div className="flex justify-between items-center">
                        <div>
                            <img
                                className="max-w-[18px] breakpoint-iii:max-w-[unset]"
                                src={"/assets/svg/projects/star-vector.svg"}
                                alt="Star"
                            />
                        </div>
                        <div>
                            <img
                                className="max-w-[42px] tablet:max-w-[unset]"
                                src={"/assets/svg/projects/cube.svg"}
                                alt="Star"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between" id="projects">
                        <div className="flex flex-col w-full laptop:flex-row">
                            <div className="max-w-[unset] laptop:max-w-[640px]">
                                <img
                                    className="w-full"
                                    src={"/assets/png/projects/noti.png"}
                                    alt="NOTI"
                                />
                            </div>
                            <div className="mx-0 relative laptop:mx-[72px]">
                                <h1 className="text-display-7 text-secondary font-cursive tablet:text-[38px] tablet:leading-[50px]">
                                    The NOTI Company
                                </h1>
                                <p className="text-caption text-secondary mt-[34px] mb-[30px] w-[95%] laptop:w-[78%] tablet:text-[19px] tablet:leading-[25px]">
                                    NOTI (NotOutToImpress) is a branding and design company with a unique approach to helping businesses and brands tell their stories and attract their audience through analytical and creative thinking.
                                </p>
                                <div className="flex text-caption text-secondary mb-8 tablet:text-[19px] tablet:leading-[25px]">
                                    <h2>Role:</h2>
                                    <div className="flex ml-2">
                                        <p>Creative Director</p>
                                        <span className="mx-1">|</span>
                                        <p>Co-founder</p>
                                    </div>
                                </div>
                                <a href="https://thenoticompany.com/" target="_blank" rel="noreferrer">
                                    <div className="flex items-center cursor-pointer group">
                                        <p className="text-heading-6 text-secondary">View work</p>
                                        <img
                                            className="duration-200 rotate-180 ml-[10px] group-hover:translate-x-1"
                                            src={"/assets/svg/navigation/back-icon.svg"}
                                            alt="Forward"    
                                        /> 
                                    </div>
                                </a>
                                <div className="absolute top-[230px] right-44 max-w-[50px] tablet:max-w-[unset]">
                                    <img
                                        src={"/assets/svg/projects/sparks.svg"}
                                        alt="Sparks"
                                    />
                                </div>
                                <div className="absolute bottom-44 left-10 max-w-[50px] tablet:max-w-[unset]">
                                    <img
                                        src={"/assets/svg/projects/spiral-ii.svg"}
                                        alt="Spiral"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full justify-between laptop:flex-row-reverse">
                            <div className="mt-14 max-w-[unset] laptop:-mt-40 laptop:max-w-[640px]">
                                <img
                                    className="w-full"
                                    src={"/assets/png/projects/icreate.png"}
                                    alt="iCreate"
                                />
                            </div>
                            <div className="my-14 relative laptop:my-28">
                                <div className="absolute -top-10 left-28 max-w-[100px] tablet:max-w-[unset]">
                                    <img
                                        src={"/assets/svg/projects/round.svg"}
                                        alt="Round illustration"
                                    />
                                </div>
                                <h1 className="text-display-7 text-secondary font-cursive tablet:text-[38px] tablet:leading-[50px]">
                                    iCreate
                                </h1>
                                <p className="text-caption text-secondary mt-[34px] mb-[30px] w-[95%] laptop:w-[80%] tablet:text-[19px] tablet:leading-[25px]">
                                    iCreate offers a safe and nurturing environment for artists, designers, writers, and innovators to develop their skills, explore new ideas, and unleash their creativity to the fullest.
                                </p>
                                <div className="flex text-caption text-secondary mb-8 tablet:text-[19px] tablet:leading-[25px]">
                                    <h2>Role:</h2>
                                    <div className="flex ml-2">
                                        <p>Creative Director</p>
                                        <span className="mx-1">|</span>
                                        <p>Co-founder</p>
                                    </div>
                                </div>
                                <a href="https://instagram.com/icreatetour?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
                                    <div className="flex items-center cursor-pointer group">
                                        <p className="text-heading-6 text-secondary">View work</p>
                                        <img
                                            className="duration-200 rotate-180 ml-[10px] group-hover:translate-x-1"
                                            src={"/assets/svg/navigation/back-icon.svg"}
                                            alt="Forward"    
                                        /> 
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between w-full laptop:flex-row">
                            <div className="max-w-[unset] laptop:max-w-[640px]">
                                <img
                                    className="w-full"
                                    src={"/assets/png/projects/nfts.png"}
                                    alt="Femi's NFTs"
                                />
                            </div>
                            <div className="mx-0 mt-14 relative laptop:mx-[72px] tablet:mt-40">
                                <div className="absolute -top-12 right-44">
                                    <img
                                        src={"/assets/svg/projects/arrow.svg"}
                                        alt="Arrow illustration"
                                    />
                                </div>
                                <h1 className="text-display-7 text-secondary font-cursive tablet:text-[38px] tablet:leading-[50px]">
                                    I Love NFTs
                                </h1>
                                <p className="text-caption text-secondary mt-[34px] mb-[30px] w-[95%] laptop:w-[80%] tablet:text-[19px] tablet:leading-[25px]">
                                    I am a web3 merchant weaving intricate worlds of wonder through the art of NFTs. As a collector and creator, I gather and create unique tokens that captivate the imagination and inspire awe.
                                </p>
                                <div className="flex text-caption text-secondary mb-8 tablet:text-[19px] tablet:leading-[25px]">
                                    <h2>Role:</h2>
                                    <div className="flex ml-2">
                                        <p>Creator</p>
                                        <span className="mx-1">|</span>
                                        <p>Collector</p>
                                    </div>
                                </div>
                                <a href="https://opensea.io/femijohnsn" target="_blank" rel="noreferrer">
                                    <div className="flex items-center cursor-pointer group">
                                        <p className="text-heading-6 text-secondary">View work</p>
                                        <img
                                            className="duration-200 rotate-180 ml-[10px] group-hover:translate-x-1"
                                            src={"/assets/svg/navigation/back-icon.svg"}
                                            alt="Forward"    
                                        /> 
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col w-full justify-between laptop:flex-row-reverse">
                            <div className="mt-14 max-w-[unset] laptop:-mt-40 laptop:max-w-[640px]">
                                <img
                                    className="w-full"
                                    src={"/assets/png/projects/opus.png"}
                                    alt="Opus session"
                                />
                            </div>
                            <div className="my-32 relative">
                                <div className="absolute -top-10 left-28 max-w-[100px] tablet:max-w-[unset]">
                                    <img
                                        src={"/assets/svg/projects/round.svg"}
                                        alt="Round illustration"
                                    />
                                </div>
                                <h1 className="text-display-7 text-secondary font-cursive tablet:text-[38px] tablet:leading-[50px]">
                                    Opus Sessions
                                </h1>
                                <p className="text-caption text-secondary mt-[34px] mb-[30px] w-[95%] laptop:w-[80%] tablet:text-[19px] tablet:leading-[25px]">
                                    Our vlog/podcast is a unique blend of passion, expertise, and human connection, crafted to engage and inspire music lovers of all kinds.
                                </p>
                                <div className="flex text-caption text-secondary mb-8 tablet:text-[19px] tablet:leading-[25px]">
                                    <h2>Role:</h2>
                                    <div className="flex ml-2">
                                        <p>Creative Director</p>
                                    </div>
                                </div>
                                <a href="https://opussessions.netlify.app" target="_blank" rel="noreferrer" >
                                    <div className="flex items-center cursor-pointer group">
                                        <p className="text-heading-6 text-secondary">View work</p>
                                        <img
                                            className="duration-200 rotate-180 ml-[10px] group-hover:translate-x-1"
                                            src={"/assets/svg/navigation/back-icon.svg"}
                                            alt="Forward"    
                                        /> 
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </ProjectsLayout>
    )
}