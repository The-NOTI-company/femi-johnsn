import Navigation from "../../navigation";
import Footer from "../../footer";
import SeoHead from "../../seo-head";
import SpinningLogo from "../../spinning-logo";

export default function DefaultLayout({ className, title, description, children, showSubFooter, isNavDark, spinningLogoClassName }){
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
                    {children}
                </main>
                <SpinningLogo className={spinningLogoClassName} />
                <Footer
                    showSubFooter={showSubFooter}
                />
            </div>
        </div>
    )
}