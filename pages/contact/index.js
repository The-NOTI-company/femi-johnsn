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
            invertMenuColours={true}
            spinningLogoClassName="bottom-12 left-[72px]"
        >
            <main className="bg-secondary pt-[111px]">
                <section className="h-screen">

                </section>
            </main>
        </DefaultLayout>
    )
}