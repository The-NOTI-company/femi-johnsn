import Navigation from "../../navigation";
import Footer from "../../footer";
import SeoHead from "../../seo-head";
import SpinningLogo from "../../spinning-logo";
import { classNames } from "../../../utils/classNames";

export default function DefaultLayout({ className, title, description, children, showSubFooter, isNavDark, backButtonDestination, invertMenuColours, setMixBlend, spinningLogoClassName }){
    return (
        <>
            <div className={ classNames( "max-w-[100vw]", className)}>
                <SeoHead
                    title={title}
                    description={description}
                />
                <div className="mx-auto w-full">
                    <Navigation
                        backButtonDestination={backButtonDestination}
                        isNavDark={isNavDark}
                        invertMenuColours={invertMenuColours}
                        setMixBlend={setMixBlend}
                    />
                    <>
                        {children}
                    </>
                    <SpinningLogo className={spinningLogoClassName} />
                    <Footer
                        showSubFooter={showSubFooter}
                    />
                </div>
            </div>
        </>
        
    )
}