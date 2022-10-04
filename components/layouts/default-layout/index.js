import Navigation from "../../navigation";
import Footer from "../../footer";
import SeoHead from "../../seo-head";

export default function DefaultLayout({ className, title, description, children, showSubFooter, isNavDark }){
    return (
        <div className={className}>
            <SeoHead
                title={title}
                description={description}
            />
            <div>
                <Navigation
                    isNavDark={isNavDark}
                />
                <main className="mt-[111px]">
                    { children }
                </main>
                <Footer
                    showSubFooter={showSubFooter}
                />
            </div>
        </div>
    )
}