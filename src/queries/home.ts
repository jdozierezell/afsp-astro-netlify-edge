import { graphQl } from "./_graphQl"

import { seo } from "./fragments/seo"

export const homeQuery = async () => {
  const home = await graphQl({
    query: `
      {
        home {
          _seoMetaTags {
            ...seo
          }
          heroVideo {
            alt
            video {
              mp4Url(res: medium)
            }
          }
          heroHeading
          heroBrief
          heroButtonCta
          heroButtonExternal
          heroButtonExternalLink
          heroButtonInternalLink {
            ... on DetailRecord {
              slug
            }
            ... on RealStoryRecord {
              slug
            }
            ... on LandingRecord {
              slug
            }
            ... on DetailTaggedRecord {
              slug
            }
          }
          instagramClass
        }
      }
      ${seo}
    `,
  })

  return home.home
}