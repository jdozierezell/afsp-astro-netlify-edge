export const graphQl = async (query : any) => {
  const previewMode = import.meta.env.PUBLIC_ENV === 'development' || import.meta.env.PUBLIC_ENV === 'cmspreview' ? 'true' : 'false'
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
  
  const response = await fetch('https://graphql.datocms.com/', {
  method: 'POST',
  headers: headers,
  body: JSON.stringify(query),
})

const parsedResponse = await response.json()

return parsedResponse.data

}