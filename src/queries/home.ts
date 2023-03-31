import { graphQl } from "../utilities/graphQl"

export const homeQuery = async () => {
  const home = await graphQl({
    query: `
      {
        home {
          _seoMetaTags {
            attributes
            content
            tag
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
    `,
  })

  return home.home
}