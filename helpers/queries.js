export const homeQuery = `{
  "home": *[_type == "home"][0]{
    title,
    headerText,
    headerTextMobile,
    reelImages[] {
      asset-> {
        ...
      },
      caption,
      alt,
      hotspot {
        x,
        y
      },
    },
    seo {
      ...,
      shareGraphic {
        asset->
      }
    },
    "contact": *[_type == "contact"][0]{
      instagram,
      emailAddress,
      threads
    }
  }
}`

export const infoQuery = `{
  "info": *[_type == "info"][0]{
    title,
    biography,
    capabilities[],
    awards[] {
      awardTimesWon,
      awardWebsite,
    },
    seo {
      ...,
      shareGraphic {
        asset->
      }
    },
    "contact": *[_type == "contact"][0]{
      instagram,
      emailAddress,
      threads
    },
    "home": *[_type == "home"][0]{
      headerText,
    }
  }
}`