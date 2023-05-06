import React from 'react'

function Credits({ muse, makeup, stylists, creativeAgency, assist }) {

    const Role = ({ title, data }) => {

        if ( data && data?.length > 0) {
            return (
                <div className="flex items-center flex-col mb-[33px]">
                    <h2 className="uppercase text-secondary text-base mb-3">{title}</h2>
                    <div className="inline text-secondary text-base-big">
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