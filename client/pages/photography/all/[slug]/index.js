import DefaultLayout from "../../../../components/layouts/default-layout";
import styles from '../../../../styles/pages/PhotoDisplay.module.scss'
import { photographyCollection, photosPreview } from "../../../../utils/constants";
import { getSlugList, getSlugDetails, pad } from "../../../../utils/functions";
import PreviewLink from "../../../../components/photography/preview-link";
import Credits from "../../../../components/photography/credits";
import ViewCollection from "../../../../components/photography/view-collection";

export async function getStaticPaths() {
    const paths = await getSlugList(photographyCollection)
  
    return {
      paths,
      fallback: false
    }
} 
  
export async function getStaticProps({ params }) {
    const shoot = await getSlugDetails(params.slug, photographyCollection)
  
    return {
      props: {
        shoot
      }
    }
}
  

export default function PhotoDisplay({ shoot }) {
    const currentCollection = shoot

    const renderMoreCreations = () => {

        return photosPreview.filter(p => p.slug !== currentCollection.slug).slice(1,4).map(project => {
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
            spinningLogoClassName="bottom-12 right-[50px] laptop:right-[100px]"
        >
            <main className="pt-[111px]">
                <section className="mt-[50px] laptop:mt-[169px]"> 
                    <div className="flex text-secondary mb-[205px] w-[85%] mx-auto laptop:w-[65%]">
                        <h4 className="font-cursive text-display-6 self-start mr-[30px] mt-0 breakpoint-iii:mt-6 breakpoint-iii:text-display-4 breakpoint-iii:mr-[77px]">
                            {
                                pad(currentCollection?.id)
                            }
                            {"`"}
                        </h4>
                        <div className="flex flex-col max-w-fit font-body">
                            <h1 className={styles.collectionTitle}>
                                { currentCollection?.title }
                            </h1>
                            <div className="text-heading-6 mt-[52px] mx-0 font-normal text-right breakpoint-iii:mx-[54px] breakpoint-iii:text-base">
                                { currentCollection?.roles?.join(" | ") }
                            </div>
                        </div>
                    </div>
                    {
                        currentCollection?.quote ? (
                            <div className="mt-[205px] px-[4%]">
                                <div className="border-t-[3px] border-secondary w-fit max-w-[550px]">
                                    <h2 className="mt-10 mb-[30px] text-heading-3 font-bold text-secondary breakpoint-iii:text-heading-2">
                                        {currentCollection?.quote?.title}
                                    </h2>
                                    <div className=" text-gray-400 text-caption font-light text-justify breakpoint-iii:text-base"
                                        dangerouslySetInnerHTML={{ __html: currentCollection?.quote?.description }}
                                    >
                                    </div>
                                </div>
                            </div>
                        ) : null
                    }
                </section>
                <section className="flex flex-col mt-[150px] mb-14 breakpoint-iii:mt-[350px]">
                    <div className="px-[3%]">
                        <ViewCollection
                            title={currentCollection?.title}
                            images={currentCollection?.imgs}
                        />
                    </div>
                    <div className="items-center justify-center border-[3px] border-secondary min-w-[700px] min-h-[700px] rounded-[50%] self-end mt-[100px] hidden breakpoint-iv:flex">
                        <Credits
                            muse={currentCollection?.credits?.muse}
                            makeup={currentCollection?.credits?.makeup}
                            stylists={currentCollection?.credits?.stylists}
                            creativeAgency={currentCollection?.credits?.creativeAgency}
                            assist={currentCollection?.credits?.assist}
                        />
                    </div>
                    <div className="items-center justify-center mt-[100px] flex breakpoint-iv:hidden">
                        <Credits
                            muse={currentCollection?.credits?.muse}
                            makeup={currentCollection?.credits?.makeup}
                            stylists={currentCollection?.credits?.stylists}
                            creativeAgency={currentCollection?.credits?.creativeAgency}
                            assist={currentCollection?.credits?.assist}
                        />
                    </div>
                </section>
                <section className="px-[4%] mt-[224px] mb-[200px] breakpoint-iii:mb-0">
                    <h1 className="text-heading-3 font-cursive text-secondary tablet:text-display-4 breakpoint-iii:text-display-5">
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