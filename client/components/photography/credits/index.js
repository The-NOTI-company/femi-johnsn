import React from 'react'

function Credits({ muse, makeup, stylists, creativeAgency, assist }) {

    const Role = ({ title, data }) => {

        if ( data && data?.length > 0) {
            return (
                <div className="flex items-center flex-col mb-[33px]">
                    <h2 className="uppercase text-secondary mb-3 text-caption tablet:text-base">{title}</h2>
                    <div className="inline-block text-secondary text-heading-5 tablet:text-base-big breakpoint-vi:text-heading-4">
                        {
                            data?.map((entry, idx) => {
                                return (
                                    <>
                                        <a className="duration-150 hover:text-accent" href={entry.contactLink} target="_blank" key={idx} rel="noreferrer">
                                            { entry.name }
                                        </a>
                                        {
                                            data.length !== idx + 1 ? (<span> | </span>) : null
                                        }
                                    </>
                                )
                            }
                        )}
                    </div>
                </div>
            )
        }
    }


    return (
        <div className="flex flex-col items-center">
            <Role title={"muse"} data={muse} />
            <Role title={"mua"} data={makeup} />
            <Role title={"stylists"} data={stylists} />
            <Role title={"creative agency"} data={creativeAgency} />
            <Role title={"assist"} data={assist}/>
        </div>
    )
}

export default Credits