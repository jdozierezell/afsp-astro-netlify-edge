


export const graphQl = async (query : any) => {
  const previewMode = import.meta.env.DEV === true
  console.log(import.meta.env)
  let headers 

  if(previewMode) {
  headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${import.meta.env.DATOCMS_API}`,
        'X-Include-Drafts': previewMode
      }
  } else {
  headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${import.meta.env.DATOCMS_API}`
      }
  }
 
  console.log(previewMode)
  
  const response = await fetch('https://graphql.datocms.com/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer 9f5cbe4841edf2fce54a61df719ade`,
    'X-Include-Drafts': 'true',
  },
  body: JSON.stringify(query),
})

const parsedResponse = await response.json()

return parsedResponse.data

}