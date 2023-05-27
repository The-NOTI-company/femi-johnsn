import ProjectsNavigation from "../../navigation/projects-navigation";
import Footer from "../../footer";
import SeoHead from "../../seo-head";
import { classNames } from "../../../utils/classNames";

export default function ProjectsLayout({ className, title, description, children, isNavDark, backButtonDestination, invertMenuColours, setMixBlend }){
    return (
        <>
            <div className={ classNames( "max-w-[100vw]", className)}>
                <SeoHead
                    title={title}
                    description={description}
                />
                <div className="mx-auto">
                    <ProjectsNavigation
                        backButtonDestination={backButtonDestination}
                        isNavDark={isNavDark}
                        invertMenuColours={invertMenuColours}
                        setMixBlend={setMixBlend}
                    />
                    <>
                        {children}
                    </>
                    <Footer
                        showSubFooter={false}
                    />
                </div>
            </div>
        </>
        
    )
}