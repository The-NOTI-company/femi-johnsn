/* eslint-disable @next/next/no-img-element */


function Footer({ showSubFooter }) {

    return (
        <footer className="flex flex-col mx-auto w-full font-body max-w-[75%] mt-[15%]">
            {showSubFooter &&
                (
                    <div className="w-fit self-end">
                        <div className="flex pb-[45px] border-b-2 border-b-white">
                            <h1 className="text-secondary text-display-2 uppercase font-bold mr-[50px]">Make Magic</h1>
                            <img src={"/assets/svg/footer/arrow-right.svg"} alt="arrow" />
                        </div>
                        <div className="flex mt-32 mb-64">
                            <div className="text-secondary pr-[15%]">
                                <h4 className="text-heading-4 mb-10">Socials</h4>
                                <ul>
                                    <li className="uppercase text-base-semi-bold mb-4">
                                        <a href="https://www.instagram.com/femijohnsn/?hl=en" target="_blank" rel="noreferrer">Instagram</a>
                                    </li>
                                    <li className="uppercase text-base-semi-bold mb-4">
                                        <a href="https://www.behance.net/femijohnsn" target="_blank" rel="noreferrer">Behance</a>
                                    </li>
                                    <li className="uppercase text-base-semi-bold mb-4">
                                        <a href="https://twitter.com/femijohnsn" target="_blank" rel="noreferrer">Twitter</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="text-secondary pr-[15%]">
                                <h4 className="text-heading-4 mb-10">Say Hello!</h4>
                                <a href="https://www.instagram.com/femijohnsn/?hl=en" target="_blank" rel="noreferrer" className="text-base-semi-bold">
                                    femijohnsnn@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            <div className="border-t-2 border-t-white">
                <p className="text-secondary text-base-big py-9">Femi Johnsn © 2022</p>
            </div>
        </footer>
    )
}

export default Footer