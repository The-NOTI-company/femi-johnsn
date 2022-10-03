import Head from "next/head";
import Navigation from "../navigation";
import Footer from "../footer";
import SeoHead from "../seo-head";

export default function Layout({ className, title, description, children, showSubFooter, isNavDark }){
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
                <main>
                    { children }
                </main>
                <Footer
                    showSubFooter={showSubFooter}
                />
            </div>
        </div>
    )
}