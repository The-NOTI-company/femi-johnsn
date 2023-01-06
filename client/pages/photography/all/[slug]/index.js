import DefaultLayout from "../../../../components/layouts/default-layout";
import styles from '../../../../styles/pages/PhotoDisplay.module.scss'
import Link from "next/link";
import { photosPreview } from "../../../../utils/constants";
import PreviewLink from "../../../../components/photography/preview-link";
import { classNames } from "../../../../utils/classNames";
import { useRouter } from "next/router";

export default function PhotoDisplay() {
    const router = useRouter()
    const { slug } = router.query

    const currentCollection = photosPreview.find(p => p.slug === slug)
    
    function pad(d) {
        return (d < 10) ? '0' + d.toString() : d.toString();
    }

    return (
        <DefaultLayout
            className={styles["container"]}
            title={currentCollection.title}
            showSubFooter={true}
            isNavDark={true}
            backButtonDestination={"/photography/all"}
            spinningLogoClassName="bottom-12 right-[240px]"
        >
            <main className="pt-[111px]">
                <section className="mt-[169px]"> 
                    <div className="flex justify-between text-secondary mb-[205px] w-[65%] mx-auto">
                        <h4 className="font-cursive text-display-4 self-start mr-[77px] mt-6">
                            {
                                pad(currentCollection.id)
                            }
                            {"`"}
                        </h4>
                        <div className="flex flex-col max-w-fit font-body">
                            <h1 className="text-heading">
                                { currentCollection.title }
                            </h1>
                            <div className="text-base mt-[52px] font-normal text-right">
                                { currentCollection.roles?.join(" | ") }
                            </div>
                        </div>
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