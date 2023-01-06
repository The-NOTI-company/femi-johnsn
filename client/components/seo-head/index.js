import Head from "next/head";

const DOMAIN = "https://www.femijohnsn.com";
const DEFAULT_OG_IMAGE =
  "https://res.cloudinary.com/noticompany/image/upload/v1664799323/Projects/Femi%20Johnsn/portfolio_og.jpg";

export default function SeoHead({
  title = "Welcome",
  description = "My name is Femi Johnsn, and I'm a fashion photographer. I've been shooting for five years, but I only started doing fashion photography two years ago.",
  siteName = "Femi Johnsn",
  canonical = DOMAIN,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  twitterHandle = "femijohnsn",
}) {
  return (
    <Head>
      <title key="title">{`${title} | ${siteName}`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="photography, femijohnsn, creative, fashion editorial" />
      <meta key="og_type" property="og:type" content={ogType} />
      <meta key="og_title" property="og:title" content={title} />
      <meta key="og_description" property="og:description" content={description} />
      <meta key="og_locale" property="og:locale" content="en_IE" />
      <meta key="og_site_name" property="og:site_name" content={siteName} />
      <meta key="og_url" property="og:url" content={canonical ?? DOMAIN} />
      <meta key="og_site_name" property="og:site_name" content={siteName} />
      <meta
        key="og_image"
        property="og:image"
        content={ogImage ?? DEFAULT_OG_IMAGE}
      />
      <meta
        key="og_image:alt"
        property="og:image:alt"
        content={`${title} | ${siteName}`}
      />
      <meta key="og_image:width" property="og:image:width" content="1200" />
      <meta key="og_image:height" property="og:image:height" content="630" />

      <meta name="robots" content="index,follow" />

      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta 
        key="twitter:site" 
        name="twitter:site" 
        content={twitterHandle} 
      />
      <meta
        key="twitter:creator"
        name="twitter:creator"
        content={twitterHandle}
      />
      <meta 
        key="twitter:title" 
        property="twitter:title" 
        content={title} 
      />
      <meta
        key="twitter:description"
        property="twitter:description"
        content={description}
      />

      <link rel="canonical" href={canonical ?? DOMAIN} />

      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
  );
}