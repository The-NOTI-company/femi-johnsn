import ProjectsNavigation from "../../navigation/projects-navigation";
import Footer from "../../footer";
import SeoHead from "../../seo-head";
import { classNames } from "../../../utils/classNames";
import AnimationLayer from "../../animation-layer";

export default function ProjectsLayout({ className, title, description, children, isNavDark, backButtonDestination, invertMenuColours, setMixBlend }){
    return (
        <>
            <div className={ classNames( "max-w-[100vw]", className)}>
                <SeoHead
                    title={title}
                    description={description}
                />
                <div className="mx-auto">
                    <AnimationLayer>
                        <ProjectsNavigation
                            backButtonDestination={backButtonDestination}
                            isNavDark={isNavDark}
                            invertMenuColours={invertMenuColours}
                            setMixBlend={setMixBlend}
                        />
                        <>
                            {children}
                        </>
                    </AnimationLayer>
                    <a href="https://www.designnominees.com/sites/femi-johnsn" title="Design Nominees" style={{width:'70px', height:'130px', position:'fixed', top:'150px', right:0, zIndex:99999, textIndent:-'9999px', background: `url(${'http://www.designnominees.com/ribbons/designnominees-ribbon-sotd-white-right.png'}) no-repeat` }} target="_blank" rel="noreferrer"></a>
                    <Footer
                        showSubFooter={false}
                    />
                </div>
            </div>
        </>
        
    )
}