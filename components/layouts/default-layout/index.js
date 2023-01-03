import Navigation from "../../navigation";
import Footer from "../../footer";
import SeoHead from "../../seo-head";
import SpinningLogo from "../../spinning-logo";
import MobileView from "../../mobile-view";
import { classNames } from "../../../utils/classNames";

export default function DefaultLayout({ className, title, description, children, showSubFooter, isNavDark, backButtonDestination, invertMenuColours, setMixBlend, spinningLogoClassName }){
    return (
        <>
            <MobileView />
            <div className={ classNames( "hidden breakpoint-i:block", className)}>
                <SeoHead
                    title={title}
                    description={description}
                />
                <div>
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