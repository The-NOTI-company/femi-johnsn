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
                    <a href="https://www.designnominees.com/sites/femi-johnsn" title="Design Nominees" style={{width:'70px', height:'130px', position:'fixed', top:'150px', right:0, zIndex:99999, textIndent:-'9999px', background: `url(${'http://www.designnominees.com/ribbons/designnominees-ribbon-sotd-white-right.png'}) no-repeat` }} target="_blank" rel="noreferrer"></a>
                    <Footer
                        showSubFooter={showSubFooter}
                    />
                </div>
            </div>
        </>
        
    )
}