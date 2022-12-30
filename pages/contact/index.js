import DefaultLayout from "../../components/layouts/default-layout";
import styles from '../../styles/pages/Contact.module.scss'
import { classNames } from "../../utils/classNames";

export default function Contact() {
    return (
        <DefaultLayout
            className={ classNames(styles["container"] )}
            title="Contact me"
            showSubFooter={false}
            isNavDark={false}
            invertMenuColours={false}
            spinningLogoClassName="bottom-12 left-[72px]"
        >
            <main className="bg-secondary pt-[111px]">
                <section className="h-screen">
                    <div>
                        <div>
                            <div>
                                <p className="text-[96px] leading-[131px] text-primary uppercase font-body font-semibold">
                                    say hello
                                </p>
                                <p className="text-[96px] leading-[131px] text-primary uppercase font-body font-semibold">
                                    to Femi Johnsn -
                                </p>
                            </div>
                            <a href="#">
                                
                            </a>
                        </div>
                        <a href="#" className="text-[96px] leading-[131px] text-primary uppercase font-body font-semibold">
                            femijohnsnn@gmail.com
                        </a>
                    </div>
                    <div>

                    </div>
                </section>
                <section>
                    
                </section>
            </main>
        </DefaultLayout>
    )
}