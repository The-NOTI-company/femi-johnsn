// Dynamic routes
export async function getSlugList(data) {
    const slugList = []
    data.map(portfolio => {
      let paramObj = { params: { slug: portfolio.slug } }
      slugList.push(paramObj)
    })
  
    return slugList
}
  
export async function getSlugDetails(slug, data) {
    const dataset = {}
    for (let i = 0; i <= data.length; i++){
        let val = data[i]
        dataset[val?.slug] = val
    }

    return dataset[slug]
}

    
export function pad(d) {
    return (d < 10) ? '0' + d?.toString() : d?.toString();
}
  