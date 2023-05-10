import DefaultLayout from "../../../../components/layouts/default-layout";
import styles from '../../../../styles/pages/PhotoDisplay.module.scss'
import { photographyCollection, photosPreview } from "../../../../utils/constants";
import PreviewLink from "../../../../components/photography/preview-link";
import { useRouter } from "next/router";
import Credits from "../../../../components/photography/credits";
import ViewCollection from "../../../../components/photography/view-collection";

export default function PhotoDisplay() {
    const router = useRouter()
    const { slug } = router.query


    const currentCollection = photographyCollection.find(p => p.slug === slug)
    
    function pad(d) {
        return (d < 10) ? '0' + d?.toString() : d?.toString();
    }

    const renderMoreCreations = () => {

        return photosPreview.filter(p => p.slug !== slug).slice(1,4).map(project => {
            if (project.isLink) {
                return (
                    <PreviewLink
                        key={project.id}
                        picData={project}
                        containerClassName={"border-b-2 border-b-secondary"}
                    />
                )
            }
        })
    }

    return (
        <DefaultLayout
            className={styles["container"]}
            title={currentCollection?.title}
            showSubFooter={true}
            isNavDark={true}
            backButtonDestination={"/photography/all"}
            spinningLogoClassName="bottom-12 right-[100px]"
        >
            <main className="pt-[111px]">
                <section className="mt-[169px]"> 
                    <div className="flex text-secondary mb-[205px] w-[65%] mx-auto ">
                        <h4 className="font-cursive text-display-4 self-start mr-[77px] mt-6">
                            {
                                pad(currentCollection?.id)
                            }
                            {"`"}
                        </h4>
                        <div className="flex flex-col max-w-fit font-body">
                            <h1 className="text-[9.2vw] leading-[140px]">
                                { currentCollection?.title }
                            </h1>
                            <div className="text-base mt-[52px] mx-[54px] font-normal text-right">
                                { currentCollection?.roles?.join(" | ") }
                            </div>
                        </div>
                    </div>
                    {
                        currentCollection?.quote ? (
                            <div className="mt-[205px] px-[4%]">
                                <div className="border-t-[3px] border-secondary w-fit max-w-[550px]">
                                    <h2 className="mt-10 mb-[30px] text-heading-2 font-bold text-secondary">
                                        {currentCollection?.quote?.title}
                                    </h2>
                                    <div className=" text-gray-400 text-base font-light text-justify"
                                        dangerouslySetInnerHTML={{ __html: currentCollection?.quote?.description }}
                                    >
                                    </div>
                                </div>
                            </div>
                        ) : null
                    }
                </section>
                <section className="flex flex-col mt-[350px] mb-14">
                    <div className="px-[3%]">
                        <ViewCollection
                            title={currentCollection?.title}
                            images={currentCollection?.imgs}
                        />
                    </div>
                    <div className=" flex items-center justify-center border-[3px] border-secondary min-w-[700px] min-h-[700px] rounded-[50%] self-end mt-[100px]">
                        <Credits
                            muse={currentCollection?.credits?.muse}
                            makeup={currentCollection?.credits?.makeup}
                            stylists={currentCollection?.credits?.stylists}
                            creativeAgency={currentCollection?.credits?.creativeAgency}
                            assist={currentCollection?.credits?.assist}
                        />
                    </div>
                </section>
                <section className="px-[4%] mt-[224px]">
                    <h1 className="text-display-5 font-cursive text-secondary">
                        More Creations
                    </h1>
                    <div className="grid grid-cols-creations-grid mt-[70px] gap-[70px]">
                        {renderMoreCreations()}
                    </div>
                </section>
            </main>
        </DefaultLayout>
    )
}