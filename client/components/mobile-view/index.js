/* eslint-disable @next/next/no-img-element */

export default function MobileView() {
    return (
        <div className="w-full h-screen bg-primary breakpoint-i:hidden">
            <div className="flex flex-col text-center justify-center items-center self-center h-full">
                <img
                    className=" w-full max-w-[200px] self-center my-14"
                    src="/assets/svg/navigation/logo.svg"
                    alt="Femi Johnsn"
                />
                <div className="w-3/4">
                    <h3 className="text-heading-5 text-secondary tablet:text-heading-4">This website is not optimized for this screen size yet</h3>
                    <p className="text-heading-6 text-gray-500 mt-6">View this website on a larger screen</p>
                </div>
            </div>
        </div>
    )
}